import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import Image from './Image';
import {LoadImages,SearchImages} from './api'
import './Header.css'


function Header() {

    const [query,setQuery]=useState()
    const [searchq,setSearchq]=useState()
    const data = LoadImages();
    // console.log(data);
    console.log(query);
    // console.log(SearchImages(query));
  
    const search = () => {
      setSearchq(query)
    }
    const searchData=SearchImages(searchq)
    console.log(searchData);
  
  return (
    <div>

        
         <Navbar bg="light" expand="lg">
      <Container fluid>
      <img className='image' src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png"></img>
        <Navbar.Brand className='text-success' href="#">Pexels</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">License</Nav.Link>
            
            <Nav.Link href="#">
              Explore
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={search}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <div className="contain">
      {searchq?searchData.map((img)=>(
         <Image src={img.urls.thumb}/>
       )): data.map((img)=>(
        <Image src={img.urls.thumb}/>
      ))}



      </div>

    
    </div>
  )
}

export default Header