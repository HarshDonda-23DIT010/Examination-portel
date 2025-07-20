import { useState } from "react";
import { Button } from "./components/ui/button";
import axios from "axios";

function App() {

  const handelPort = async () =>{
    try {
      const res = await axios.get("http://localhost:5000/example");
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <h1 className="flex justify-center items-center h-64 text-5xl text-amber-600">
        Welcome
      </h1>
      <Button onClick={handelPort}>Check Port </Button>
    </>
  );
}

export default App;
