import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Eggs from "../eggsActions/eggsAction";
// import Buttons from "../buttons";
import Volk from "../volk";
import "../volk/volk.css";




function Display (){
    

    
        
        
        return(
            <>
                <div className="back">
                <div className="display">
                    <Volk/>
                    
                    <Eggs></Eggs>
                </div>
                
                <div className="LOGO"/>
                </div>
            
            </>
        ) 
   

    

}




export default Display;

