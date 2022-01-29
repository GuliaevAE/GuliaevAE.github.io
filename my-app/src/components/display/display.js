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
            classNameForRightArrow: "arrow right_arrow ",
            classNameForDownArrow: "arrow down_arrow ",
            classNameForLeftArrow: "arrow left_arrow ",
            classNameForFooter: "footer none",
            modalhelp: "modalhelp none",
            back: "back",
            ikonModalHelp: "help",
            classNameForRecordsTable: "highScoreTable none",
            display: "display",
            module: "module",

            user: localStorage.getItem('Пользователь'),
            record: localStorage.getItem('Рекорд'),
            fullStage: localStorage.getItem('Полный этап'),
            value: '',
            valueOld: '',


        };
        this.toggleClasses = this.toggleClasses.bind(this);
        this.modalhelp = this.modalhelp.bind(this);
        this.renderRecords = this.renderRecords.bind(this);

    }



    componentDidUpdate() {






        // if (this.state.record !== prevState.record) {
        //     return(
        //     this.setState({
        //         user: localStorage.getItem('Пользователь'),
        //         record: localStorage.getItem('Рекорд'),
        //         fullStage: localStorage.getItem('Полный этап')
        //     }))
        // }else return
       
        // this.state.user = localStorage.getItem('Пользователь')
        // this.state.record = localStorage.getItem('Рекорд')
        // this.state.fullStage = localStorage.getItem('Полный этап')
    }


    recordUpdate=()=>{
        this.setState({
            user: localStorage.getItem('Пользователь'),
            record: localStorage.getItem('Рекорд'),
            fullStage: localStorage.getItem('Полный этап')
        })
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

            case 'leftArrow':
                this.presLeftArrow()
                break;

            default:
                break;
        }
    }

    presRightArrow() {
        if (this.state.classNameForRightArrow === "arrow right_arrow ") {
            this.setState({ classNameForRightArrow: "arrow right_arrow rotatedRight" })
            this.setState({ classNameForFooter: "footer " })
        } else {
            this.setState({ classNameForRightArrow: "arrow right_arrow " })
            this.setState({ classNameForFooter: "footer none" })
        }
    }

    presLeftArrow() {
        
        if (this.state.classNameForLeftArrow === "arrow left_arrow ") {
            this.setState({ classNameForLeftArrow: "arrow left_arrow rotatedLeft" })
            this.setState({ classNameForRecordsTable: "highScoreTable classForSlideRight" })
        } else {
            this.setState({ classNameForLeftArrow: "arrow left_arrow " })
            this.setState({ classNameForRecordsTable: "highScoreTable classForSlideLeft" })
        }
    }

    presDownArrow() {
        if (this.state.classNameForDownArrow === "arrow down_arrow ") {
            this.setState({ classNameForDownArrow: "arrow down_arrow rotatedDown" })
            this.setState({ display: "display none" })
            this.setState({ module: "module none" })
            this.setState({ back: "backSide " })
        } else {
            this.setState({ classNameForDownArrow: "arrow down_arrow " })
            this.setState({ display: "display " })
            this.setState({ module: "module " })
            this.setState({ back: "back " })
        }
    }


    button1Click = () => {
        if (this.state.value !== '' && this.state.valueOld !== this.state.value) {
            localStorage.setItem('Пользователь', this.state.value)
            alert(`Имя пользователя было изменено на ${this.state.value}, старое имя ${this.state.valueOld} `);
            this.state.valueOld = this.state.value

        } else alert("Поле заполнено не верно")
        this.recordUpdate()
    }

    changeName = (e) => {
        let user = this.state
        user.value = e.target.value;
        this.recordUpdate()

    }




    renderRecords() {

        return (
            <>
                <div>
                    <table border="1" >
                        <tr>
                            <th>Пользователь</th>
                            <th>Рекорд</th>
                            <th>Полных кругов</th>
                        </tr>
                        <tr>
                            <td>
                                <p>{this.state.user}</p>
                            </td>
                            <td>
                                <p>{this.state.record}</p>
                            </td>
                            <td>
                                <p>{this.state.fullStage}</p>
                            </td>




                        </tr>
                    </table>
                </div>

            </>
        )
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
                            <Eggs recordUpdate={this.recordUpdate}/>
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





                <div className={this.state.classNameForRecordsTable}>
                    <div className="avatar" >
                        <input type="text" maxlength={20} onChange={this.changeName}></input>
                        <p>{this.state.user}</p>
                        <button onClick={this.button1Click}>Button</button>
                    </div>
                    {this.renderRecords()}
                </div>
                <Swing><div id="help" className={this.state.ikonModalHelp} onClick={this.toggleClasses} /></Swing>
                <div id="rightArrow" className={this.state.classNameForRightArrow} onClick={this.toggleClasses} />
                <div id="downArrow" className={this.state.classNameForDownArrow} onClick={this.toggleClasses} />
                <div id="leftArrow" className={this.state.classNameForLeftArrow} onClick={this.toggleClasses} />
            </>
        )
    }
}

const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
const RotateInUpRight = styled.div`animation: 1s ${keyframes`${rotateInUpRight}`}`;
const Swing = styled.div`animation: 3s ${keyframes`${flash}`} infinite`;