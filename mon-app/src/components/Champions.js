import axios from "axios";
import React, { useEffect, useState } from "react";
import ChampionsData from "./ChampionsData";

function Champions() {

  const [appState, setAppState] = useState([])
  
  useEffect(() => {
    const headers = {
      
    };
    axios
      .get("http://localhost:8080/champions", { headers })
      .then((response) => { 
        const allChampions = response.data;
        setAppState({
          champions: allChampions
        });
      });
    }, [setAppState]);
  
    //permet d'afficher la réponse de ma requête dans la console 
  //     .then((response) => console.log(response));
  // }, []);


  return (
    <div className="app">
      <ChampionsData champions={appState.champions}/>
    </div>
  );
}


  
export default Champions;