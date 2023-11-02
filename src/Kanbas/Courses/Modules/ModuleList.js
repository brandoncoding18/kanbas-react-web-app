import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { FaAlignRight } from "react-icons/fa";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group" style={{color : "black", fontSize : "12px", width : "500px", textAlign : "left"}}>
      <li className="list-group-item">
      <h3 style={{fontSize: "20px"}}>
      <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value } ))
          } style={{width : '300px'}}/>

<button
          onClick={() => dispatch(updateModule(module))}className="btn btn-primary" style = {{marginLeft: "10px"}}>
          Update
        </button>
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}className="btn btn-success">
          Add
        </button>
          <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }style={{width : '450px'}}/>
        
      </h3>
      
        
      
        
        
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item" style= {{color : "black", fontSize : "20px"}}>
            <h3 >{module.name}
            <button
              onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger" style= {{alignItems : "right"}}>
              Delete
            </button>
            <button
              onClick={() => dispatch(setModule(module))} className="btn btn-success">
              Edit
            </button></h3>
            
            
            <p>{module.description}</p>
            
            
            
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;