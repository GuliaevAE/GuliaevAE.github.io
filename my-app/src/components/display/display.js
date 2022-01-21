import React from "react";
import { Component } from "react/cjs/react.production.min";
import Eggs from "../eggsActions/eggsAction";
import Volk from "../volk";
import "../volk/volk.css";
import github from "../img/github.png";
import vk from "../img/vk.png";
import styled, { keyframes } from 'styled-components';
import { rotateInDownRight , rotateInUpRight } from 'react-animations';
// import RotateInUpLeft from "@bit/formidablelabs.react-animations.rotate-in-up-left";


const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
const RotateInUpRight = styled.div`animation: 1s ${keyframes`${rotateInUpRight}`}`;

export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            classNameForArrow: "right_arrow rotated",
            classNameForFooter: "footer none",



        };
        this.toggleClasses = this.toggleClasses.bind(this);

    }


    toggleClasses() {


        if (this.state.classNameForArrow === "right_arrow") {
            this.setState({ classNameForArrow: "right_arrow rotated" })
            this.setState({ classNameForFooter: "footer none" })
        } else {
            this.setState({ classNameForArrow: "right_arrow" })
            this.setState({ classNameForFooter: "footer" })
        }


    }

    render() {
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
                <div className="divForArrow" onClick={this.toggleClasses}>

                </div>
                <div className={this.state.classNameForArrow} onClick={this.toggleClasses} />
                <div className={this.state.classNameForFooter}>
                <RotateInDownRight><a href="https://github.com/GuliaevAE"><img src={github} alt="github" /></a></RotateInDownRight>
                   <RotateInUpRight><a href="https://vk.com/id114500556"><img src={vk} alt="github" /></a></RotateInUpRight> 


                </div>
            </>
        )
    }
}






