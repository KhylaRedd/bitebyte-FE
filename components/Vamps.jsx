import React, { useState, useEffect } from "react";
import Vampire from "./Vampire";

const API = import.meta.env.VITE_BASE_URL;

function Vamps() {
    const [vamps, setVamps] = useState([]);

    // console.log(API)
    useEffect(() => {
        fetch(`${API}/vampires`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setVamps(res);
        })
        .catch(err => console.log(err))
    },[]);
  return (
    <div>
      {vamps.map((vamp)=>{
         return <Vampire key= {vamp.id} vamp={vamp} id={vamp.id}/>
      })}
    </div>
  );
};

export default Vamps
