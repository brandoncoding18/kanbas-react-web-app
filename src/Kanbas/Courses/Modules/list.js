import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

import { FaAlignRight } from "react-icons/fa";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


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
          onClick={() =>handleUpdateModule}className="btn btn-primary" style = {{marginLeft: "10px"}}>
          Update
        </button>
        <button
          onClick={() => handleAddModule} className="btn btn-success">
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
              onClick={() => handleDeleteModule(module._id) } style= {{alignItems : "right"}}>
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