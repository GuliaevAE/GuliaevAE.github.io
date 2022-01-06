import React from "react";
import Eggs from "../eggsActions/eggsAction";
import Volk from "../volk";
import "../volk/volk.css";


export default function Display() {
    return (
        <>
            <div className="back">
                <div className="display">
                    <Volk />
                    <Eggs />
                </div>
                <div className="LOGO" />
            </div>

        </>
    )
}




 

