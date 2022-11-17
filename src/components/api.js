//api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// accesskey=XkQcC-M2j_idbhOuCOjy3dvjc0Np2jLpKIV3cwdP3aU

import {useState,useEffect} from 'react';
import axios from 'axios';
const count=1

function LoadImages(){
    const [state,setState]=useState([])

    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos?client_id=XkQcC-M2j_idbhOuCOjy3dvjc0Np2jLpKIV3cwdP3aU")
        .then((data)=>{
            setState(data.data)
        })
    

    },[count])

    return state;

}
function SearchImages(query){
    const [state,setState]=useState([])

    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=XkQcC-M2j_idbhOuCOjy3dvjc0Np2jLpKIV3cwdP3aU")
        .then((data)=>{
            setState(data.data.results)
        })
    

    },[query])

    return state;

}

export {LoadImages,SearchImages}

