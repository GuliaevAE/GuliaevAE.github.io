import React from "react";
import { Component } from "react/cjs/react.production.min";
import Eggs from "../eggsActions/eggsAction";
import Volk from "../volk";
import "../volk/volk.css";
import github from "../img/github.png";
import vk from "../img/vk.png";
import styled, { keyframes } from 'styled-components';
import { rotateInDownRight, rotateInUpRight, flash } from 'react-animations';
import axios from "axios";

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
            classNameForWrapper: "wrapper",
            display: "display",
            module: "module",

            user: localStorage.getItem('Пользователь'),
            record: localStorage.getItem('Рекорд'),
            fullStage: localStorage.getItem('Полный этап'),
            value: '',
            valueOld: '',
            persons: []

        };
        this.toggleClasses = this.toggleClasses.bind(this);
        this.modalhelp = this.modalhelp.bind(this);
        this.renderRecords = this.renderRecords.bind(this);
        this.allRecords = this.allRecords.bind(this);
        this.createNewScore = this.createNewScore.bind(this);
        this.updateLeaderboard = this.updateLeaderboard.bind(this);

    }

    componentDidMount() {
        this.updateLeaderboard()
    }

    updateLeaderboard(){
        axios.get(`http://localhost:5000/api/score/`)
            .then(res => {
                const resdata = res.data;
                this.setState({ persons: resdata });
            })
    }

    async createNewScore() {
        const scoreObj = {
            username: localStorage.getItem('Пользователь'),
            score: localStorage.getItem('Рекорд'),
            loop: localStorage.getItem('Полный этап')
        }
    
        const response = await axios.post('http://localhost:5000/api/score/', scoreObj);
        console.log(response.data)
        this.updateLeaderboard()
    }


    allRecords() {
        // let prss = this.state.persons
        // console.log(prss)
        let allRecords = this.state.persons.map((item) =>
            <div className="newUserRecord">
                <div className="userName"><span>{item.username}</span></div>
                <div className="userScore">{item.score}</div>
                <div className="userLoop">{item.loop}</div>
            </div>
        )
        return (
            <ul>{allRecords}</ul>
        )
    }

    recordUpdate = () => {
        this.setState({
            user: localStorage.getItem('Пользователь'),
            record: localStorage.getItem('Рекорд'),
            fullStage: localStorage.getItem('Полный этап')
        })
        console.log('dasna')
        this.updateLeaderboard()
    }

    modalhelp() {
        if (this.state.modalhelp === "modalhelp none") {
            this.setState({ modalhelp: "modalhelp " })
            this.setState({ ikonModalHelp: "offModalHelp " })
            this.setState({ classNameForWrapper: "none" })
        } else {
            this.setState({ modalhelp: "modalhelp none" })
            this.setState({ classNameForWrapper: "wrapper" })
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
                    <tr>

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
                    <div className="wrapperForPlayerRecord">
                        <p>ТВОЙ РЕКОРД</p>
                        <div className="newPlaerRecord">
                            <span id='name'>ИМЯ</span>
                            <button className="btnForChangeName" onClick={this.button1Click}>СМЕНИТЬ ИМЯ</button>
                            <span id='score'>ОЧКИ</span>
                            <span id='loop'>КРУГИ</span>
                            <input id="forUser" type="text" className="userName"  placeholder={this.state.user} maxLength={20} onChange={this.changeName}></input>
                            <div id="forUser" className="userScore">{this.state.record}</div>
                            <div id="forUser" className="userLoop">{this.state.fullStage}</div>
                            <div className="iconSave" onClick={()=> this.createNewScore()}/>
                            <div className="iconDelete" onClick={()=>{
                                localStorage.clear()
                                this.recordUpdate()
                            }} />
                        </div>

                    </div>
                    <div className="wrapperForAllRecords">
                    <p>ВСЕ РЕКОРДЫ</p>
                        {this.allRecords()}
                    </div>
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

                <div className={this.state.classNameForWrapper}>
                    <div className={this.state.back}>
                        <div className={this.state.module}>
                            <div className="frame" />
                            <div className="title">НУ, ПОГОДИ!</div>
                            <div className="displayGlass">

                            </div>
                            <div className={this.state.display}>
                                <Volk />
                                <Eggs recordUpdate={this.recordUpdate} />

                            </div>
                            <div className="title2">ЭЛЕКТРОНИКА</div>
                            <div className="LOGO" />
                            <div className="bell" />
                            <div className="clockFace" />
                        </div>

                    </div>
                </div>

                <div className={this.state.classNameForFooter}>
                    <RotateInDownRight><a href="https://github.com/GuliaevAE"><img src={github} alt="github" /></a></RotateInDownRight>
                    <RotateInUpRight><a href="https://vk.com/id114500556"><img src={vk} alt="github" /></a></RotateInUpRight>
                </div>
                <div className={this.state.classNameForRecordsTable}>
                    
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