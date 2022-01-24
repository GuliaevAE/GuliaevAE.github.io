import React from "react";
import { Component } from "react/cjs/react.production.min";
import Eggs from "../eggsActions/eggsAction";
import Volk from "../volk";
import "../volk/volk.css";
import github from "../img/github.png";
import vk from "../img/vk.png";
import styled, { keyframes } from 'styled-components';
import { rotateInDownRight, rotateInUpRight, flash } from 'react-animations';

export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            classNameForArrow: "right_arrow rotated",
            classNameForFooter: "footer none",
            modalhelp: "modalhelp none",
            back: "back",
        };
        this.toggleClasses = this.toggleClasses.bind(this);
        this.modalhelp = this.modalhelp.bind(this);

    }


    modalhelp(){
        if(this.state.modalhelp === "modalhelp none"){
        this.setState({ modalhelp: "modalhelp " })
        this.setState({ back: "back none" })
        }else{
            this.setState({ modalhelp: "modalhelp none" })
            this.setState({ back: "back " })
        }
    }


    textInModalHelp(){
        return(
            <h2><p>
                Пожалуй, это была самая популярная электронная игра в СССР! В «Ну погоди» играли все – школьники на переменках, рабочие на заводах, студенты и военные, взрослые и дети в автобусах и метро. 
                А по-настоящему народной игру сделали её персонажи – Заяц и Волк из любимых мультфильмов «Ну погоди!».
                </p> 
                <p>Управление: Используйте кнопки wasd</p>
               
                <div className="wasd"/>
            </h2>
        )
    }


    toggleClasses(e) {
        if(e.target.id !== 'help'){
            if (this.state.classNameForArrow === "right_arrow") {
                this.setState({ classNameForArrow: "right_arrow rotated" })
                this.setState({ classNameForFooter: "footer none" })
            } else {
                this.setState({ classNameForArrow: "right_arrow" })
                this.setState({ classNameForFooter: "footer" })
            }
        }else{
            this.modalhelp()
        }
        

       


    }

    render() {

        return (
            <>
                <div className={this.state.modalhelp}>
                    {this.textInModalHelp()}
                </div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div className={this.state.back}>
                    <div className="module">
                        <div className="frame" />
                        <div className="title">НУ, ПОГОДИ!</div>
                        <div className="display">
                            <Volk />
                            <Eggs />
                        </div>
                        <div className="title2">ЭЛЕКТРОНИКА</div>
                        
                    </div>
                    <div className="LOGO" />
                    <div className="bell"/>
                        <div className="clockFace"/>
                </div>
                <div className="divForArrow" onClick={this.toggleClasses}>
                </div>
                <div className={this.state.classNameForFooter}>
                    <RotateInDownRight><a href="https://github.com/GuliaevAE"><img src={github} alt="github" /></a></RotateInDownRight>
                    <RotateInUpRight><a href="https://vk.com/id114500556"><img src={vk} alt="github" /></a></RotateInUpRight>
                </div>
                <Swing><div id="help" className="help" onClick={this.toggleClasses}/></Swing>
                <div className={this.state.classNameForArrow} onClick={this.toggleClasses} />
            </>
        )
    }
}

const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
const RotateInUpRight = styled.div`animation: 1s ${keyframes`${rotateInUpRight}`}`;
const Swing = styled.div`animation: 3s ${keyframes`${flash}`} infinite`;