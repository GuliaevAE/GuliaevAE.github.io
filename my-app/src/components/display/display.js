import React from "react";
import Eggs from "../eggsActions/eggsAction";
import Volk from "../volk";
import "../volk/volk.css";


export default function Display() {
    return (
        <>

            <div className="back">
                <div className="module">
                    <div className="title">НУ, ПОГОДИ!</div>
                    <div className="display">
                        <Volk />
                        <Eggs />
                    </div>
                    <div className="title2">ЭЛЕКТРОНИКА</div>
                </div>

                <div className="LOGO" />
            </div>

        </>
    )
}






