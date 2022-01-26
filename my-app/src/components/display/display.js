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
            classNameForRightArrow: "right_arrow rotatedRight",
            classNameForDownArrow: "down_arrow ",
            classNameForFooter: "footer none",
            modalhelp: "modalhelp none",
            back: "back",
            ikonModalHelp: "help",

            display: "display",
            module: "module",
        };
        this.toggleClasses = this.toggleClasses.bind(this);
        this.modalhelp = this.modalhelp.bind(this);
    }

    modalhelp() {
        if (this.state.modalhelp === "modalhelp none") {
            this.setState({ modalhelp: "modalhelp " })
            this.setState({ ikonModalHelp: "offModalHelp " })
            this.setState({ back: "back none" })
        } else {
            this.setState({ modalhelp: "modalhelp none" })
            this.setState({ back: "back " })
            this.setState({ ikonModalHelp: "help " })
        }
    }

    textInModalHelp() {
        return (
            <h2><p>
                Пожалуй, это была самая популярная электронная игра в СССР!
                В «Ну погоди» играли все – школьники на переменках, рабочие на заводах, студенты и военные, взрослые и дети в автобусах и метро.
                А по-настоящему народной игру сделали её персонажи – Заяц и Волк из любимых мультфильмов «Ну погоди!».
            </p>
                <table >
                    <tr>
                        <th>Режимы игры</th>
                        <th>Управление</th>
                    </tr>
                    <tr>
                        <td>
                            <p>"игра А": яйца катятся с нормальной скоростью. Увеличение скорости на 15мс.</p> <p>"игра Б": яйца катятся быстрее скоростью. Увеличение скорости на 50мс.</p>
                        </td>
                        <td>
                            <p>Используйте кнопки wasd для перемещения волка.</p>
                            <div className="wasd" />
                        </td>
                    </tr>
                </table>
            </h2>
        )
    }

    toggleClasses(e) {
        switch (e.target.id) {
            case 'help':
                this.modalhelp()
                break;

            case 'rightArrow':
                this.presRightArrow()
                break;


            case 'downArrow':
                this.presDownArrow()
                break;

            default:
                break;
        }
    }

    presRightArrow(){
        if (this.state.classNameForRightArrow === "right_arrow") {
            this.setState({ classNameForRightArrow: "right_arrow rotatedRight" })
            this.setState({ classNameForFooter: "footer none" })
        } else {
            this.setState({ classNameForRightArrow: "right_arrow" })
            this.setState({ classNameForFooter: "footer" })
        }
    }

    presDownArrow(){
        if (this.state.classNameForDownArrow === "down_arrow ") {
            this.setState({ classNameForDownArrow: "down_arrow rotatedDown" })
            this.setState({ display: "display none" })
            this.setState({ module: "module none" })
            this.setState({ back: "backSide " })
        } else {
            this.setState({ classNameForDownArrow: "down_arrow " })
            this.setState({ display: "display " })
            this.setState({ module: "module " })
            this.setState({ back: "back " })
        }
    }

    render() {
        return (
            <>
                <div className={this.state.modalhelp}>
                    {this.textInModalHelp()}
                </div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                
                <div className={this.state.back}>
                    <div className={this.state.module}>
                        <div className="frame" />
                        <div className="title">НУ, ПОГОДИ!</div>
                        <div className="displayGlass">

                        </div>
                        <div className={this.state.display}>
                            <Volk />
                            <Eggs />
                        </div>
                        <div className="title2">ЭЛЕКТРОНИКА</div>
                        <div className="LOGO" />
                        <div className="bell" />
                        <div className="clockFace" />
                    </div>

                </div>

                {/* <div className="divForArrow" onClick={this.toggleClasses}>
                </div> */}
                <div className={this.state.classNameForFooter}>
                    <RotateInDownRight><a href="https://github.com/GuliaevAE"><img src={github} alt="github" /></a></RotateInDownRight>
                    <RotateInUpRight><a href="https://vk.com/id114500556"><img src={vk} alt="github" /></a></RotateInUpRight>
                </div>
                <Swing><div id="help" className={this.state.ikonModalHelp} onClick={this.toggleClasses} /></Swing>
                <div id="rightArrow" className={this.state.classNameForRightArrow} onClick={this.toggleClasses} />
                <div id="downArrow" className={this.state.classNameForDownArrow} onClick={this.toggleClasses} />
            </>
        )
    }
}

const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
const RotateInUpRight = styled.div`animation: 1s ${keyframes`${rotateInUpRight}`}`;
const Swing = styled.div`animation: 3s ${keyframes`${flash}`} infinite`;