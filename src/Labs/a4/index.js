import React from "react";
import Add from "./Add.js"
import ClickEvent from "./ClickEvent.js"
import PassingDataOnEvent from "./PassingDataOnEvent.js";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

 return(
   <>
     <h1>Assignment 4</h1>
     <ReduxExamples/>
     <Add a={1} b={2}/>
     <ClickEvent/>
     <PassingFunctions theFunction={sayHello} />
   </>
   
 );
};
export default Assignment4;