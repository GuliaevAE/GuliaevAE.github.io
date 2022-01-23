import React, { Component } from "react";
import EggsNone from "../eggs";
import "../eggsActions/eggsActions.css";
import actEggSound from "../sounds/bit-pong-sound.mp3";
import hitEgg from "../sounds/bit-punch.mp3";
import { Howl, Howler } from "howler";

const audioClips = [
    { sound: actEggSound, label: "actEggSound" },
    { sound: hitEgg, label: "hitEgg" }
]

export default class EggsActions extends Component {
    #activeInterval;

    constructor(props) {
        super(props);
        this.state = {
            abilityToRenderLeftUpEgg: true,
            abilityToRenderLeftDownEgg: true,
            abilityToRenderRightUpEgg: true,
            abilityToRenderRightDownEgg: true,
            abilityToRenderLeftUpEgg_Second: true,
            abilityToRenderLeftDownEgg_Second: true,
            abilityToRenderRightUpEgg_Second: true,
            abilityToRenderRightDownEgg_Second: true,
            classnameForLU: 'egg LU1 noneEgg ',
            classnameForLD: 'egg LD1 noneEgg ',
            classnameForRU: 'egg RU1 noneEgg ',
            classnameForRD: 'egg RD1 noneEgg ',
            classnameForLU_Second: 'egg LU1 noneEgg ',
            classnameForLD_Second: 'egg LD1 noneEgg ',
            classnameForRU_Second: 'egg RU1 noneEgg ',
            classnameForRD_Second: 'egg RD1 noneEgg ',
            speedEgg: 5000,
            respawnEgg: 5000,
            wolfPosition: "volk1 active",
            wolfBascetPosition: "volk-hand2 active",
            isGameStarted: false,
            isGameSwitched: false,
            score: 0,
            mistakes: 0,
            loss: 0,
            acceleration: 0,
            timerOn: false,
        };
        this.generateEgg = this.generateEgg.bind(this);
        this.beginA = this.beginA.bind(this);
        this.beginB = this.beginB.bind(this);
        this.renderRandomEgg = this.renderRandomEgg.bind(this);

        this.renderWolf = this.renderWolf.bind(this);
        this.checkPos = this.checkPos.bind(this);
        this.loss = this.loss.bind(this);
        this.time = this.time.bind(this);

    }


    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    /////////////////////////////////////////////
    componentDidMount() {
        document.addEventListener("keydown", this.checkKey);
    }

    componentDidUpdate() {
        if (this.state.loss === 120) {
            setTimeout(() => this.setState({ loss: 0 }), 4000);
        }
    }

    //////////////////////////////////////////////////////
    ///////Проверка свободной позиции для рендеринга яйца
    checkPos() {
        if (this.state.abilityToRenderLeftUpEgg === true || this.state.abilityToRenderLeftUpEgg_Second === true) {
            this.generateEgg("LU", "classnameForLU", "abilityToRenderLeftUpEgg")
        } else if (this.state.abilityToRenderLeftDownEgg === true || this.state.abilityToRenderLeftDownEgg_Second === true) {
            this.generateEgg("LD", "classnameForLD", "abilityToRenderLeftDownEgg")
        } else if (this.state.abilityToRenderRightUpEgg === true || this.state.abilityToRenderRightUpEgg_Second === true) {
            this.generateEgg("RU", "classnameForRU", "abilityToRenderRightUpEgg")
        } else if (this.state.abilityToRenderRightDownEgg === true || this.state.abilityToRenderRightDownEgg_Second === true) {
            this.generateEgg("RD", "classnameForRD", "abilityToRenderRightDownEgg")
        }
    }


    start() {
        this.#activeInterval = setInterval(() => {
            this.renderRandomEgg();
            if (this.state.loss === 120) {
                clearInterval(this.#activeInterval);
            }
        }, this.state.respaunEgg);
    }


    /////////////////////////////////////////////
    ///Функция генерации яиц с определенным интервалом
    beginA() {
        this.reset();
        this.state.speedEgg = 300;
        this.state.respaunEgg = 400;
        this.start();
    }

    // Через setState
    beginB() {
        this.reset();
        this.state.speedEgg = 500;
        this.state.respaunEgg = 500;
        this.start();
    }

    time() {
        this.reset();
        if (this.state.timerOn === false) {
            let date = new Date(),
                hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
                minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
                seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
            this.state.speedEgg = 300;
            this.state.respaunEgg = 300;

            this.setState({ timerOn: true })
            this.setState({ score: [hours, ":", minutes] })
            this.start();


        } else {
            this.state.timerOn = false

            return;
        }
    }


    ///////////////////////////////////////////
    //Функция генерации рандомного числа
    randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }


    reset() {
        clearInterval(this.#activeInterval);
        this.setState({
            score: 0,
            mistakes: 0,
            loss: 0,
            abilityToRenderLeftUpEgg: true,
            abilityToRenderLeftDownEgg: true,
            abilityToRenderRightUpEgg: true,
            abilityToRenderRightDownEgg: true,
            abilityToRenderLeftUpEgg_Second: true,
            abilityToRenderLeftDownEgg_Second: true,
            abilityToRenderRightUpEgg_Second: true,
            abilityToRenderRightDownEgg_Second: true,
            timerOn: false,
            isGameSwitched: true,
            classnameForLU: 'egg LU1 noneEgg ',
            classnameForLD: 'egg LD1 noneEgg',
            classnameForRU: 'egg RU1 noneEgg',
            classnameForRD: 'egg RD1 noneEgg',
            classnameForLU_Second: 'egg LU1 noneEgg ',
            classnameForLD_Second: 'egg LD1 noneEgg',
            classnameForRU_Second: 'egg RU1 noneEgg',
            classnameForRD_Second: 'egg RD1 noneEgg',
        });
    }

    generatePossibleEgg(eggLocation, classnameForEgg, abilityToRender) {
        if (this.state[abilityToRender] === true || this.state[abilityToRender + "_Second"] === true) {
            this.generateEgg(eggLocation, classnameForEgg, abilityToRender)
        } else if (this.state[abilityToRender] === false && this.state[abilityToRender + "_Second"] === false) {
            this.checkPos()
        }
    }

    /////////////////////////////////////////////////
    //Функция рендера случайного яйца
    renderRandomEgg() {
        let num = this.randomInteger(1, 4);

        switch (num) {
            case 1:
                this.generatePossibleEgg("LU", "classnameForLU", "abilityToRenderLeftUpEgg")
                // if (this.state.abilityToRenderLeftUpEgg === true || this.state.abilityToRenderLeftUpEgg_Second === true) {
                //     this.generateEgg("LU", "classnameForLU", "abilityToRenderLeftUpEgg")
                // } else if (this.state.abilityToRenderLeftUpEgg === false && this.state.abilityToRenderLeftUpEgg_Second === false) {
                //     this.checkPos()
                // }
                break;
            case 2:
                this.generatePossibleEgg("LD", "classnameForLD", "abilityToRenderLeftDownEgg")
                // if (this.state.abilityToRenderLeftDownEgg === true || this.state.abilityToRenderLeftDownEgg_Second === true) {
                //     this.generateEgg("LD", "classnameForLD", "abilityToRenderLeftDownEgg")
                // } else if (this.state.abilityToRenderLeftDownEgg === false && this.state.abilityToRenderLeftDownEgg_Second === false) {
                //     this.checkPos()
                // }
                break;
            case 3:
                this.generatePossibleEgg("RU", "classnameForRU", "abilityToRenderRightUpEgg")
                // if (this.state.abilityToRenderRightUpEgg === true || this.state.abilityToRenderRightUpEgg_Second === true) {
                //     this.generateEgg("RU", "classnameForRU", "abilityToRenderRightUpEgg")
                // } else if (this.state.abilityToRenderRightUpEgg === false && this.state.abilityToRenderRightUpEgg_Second === false) {
                //     this.checkPos()
                // }
                break;
            case 4:
                this.generatePossibleEgg("RD", "classnameForRD", "abilityToRenderRightDownEgg")
                // if (this.state.abilityToRenderRightDownEgg === true || this.state.abilityToRenderRightDownEgg_Second === true) {
                //     this.generateEgg("RD", "classnameForRD", "abilityToRenderRightDownEgg")
                // } else if (this.state.abilityToRenderRightDownEgg === false && this.state.abilityToRenderRightDownEgg_Second === false) {
                //     this.checkPos()
                // }
                break;
            default:
                break;
        }
    }


    generateEgg(eggLocation, classnameForEgg, abilityToRender) {
        if (this.state.mistakes !== 3) {



            if (this.state[abilityToRender] === false && this.state[abilityToRender + "_Second"] === true) {
                classnameForEgg += "_Second";
                abilityToRender += "_Second";

            }

            this.moveEgg(classnameForEgg, abilityToRender, eggLocation);
        } else {
            return;
        }
    }

    // НЕ МЕНЯТЬ, кроме название аргументов
    //Функция движения яйца по позициям
    moveEgg(classnameForEgg, abilityToRender, eggLocation) {
        let self = this;
        if (!this.state.isGameStarted) {
            this.setState({
                isGameStarted: true,
                isGameSwitched: false
            });
        }

        if (this.state.mistakes !== 3 && !this.state.isGameSwitched) {
            let timer = setTimeout(function makeEggStep(positionNumber = 1) {
                let currentPositionNumber = positionNumber;

                if (self.state.isGameSwitched) {
                    clearTimeout(timer);
                    return
                }

                if (self.state.mistakes === 3 || currentPositionNumber === 6) {
                    self.setState({ [classnameForEgg]: `egg ${eggLocation}1 noneEgg` });
                    self.setState({ [abilityToRender]: true });
                    clearTimeout(timer);
                    return
                }

                self.setState({ [classnameForEgg]: `egg ${eggLocation}${currentPositionNumber} activeEgg` });

                if (currentPositionNumber === 1) {
                    self.setState({ [abilityToRender]: false });
                }

                if (self.state.timerOn === false) {
                    self.SoundPlay(actEggSound)
                }

                if (currentPositionNumber === 5) {
                    if (self.state.timerOn === true) {
                        setTimeout(() => self.checkScoreOrMistakeInAutoPlay(classnameForEgg, eggLocation), self.state.speedEgg * 0.5)
                    } else {
                        setTimeout(() => self.checkScoreOrMistake(classnameForEgg, eggLocation), self.state.speedEgg * 0.5)
                    }
                }

                timer = setTimeout(makeEggStep, self.state.speedEgg, currentPositionNumber + 1);
            }, this.state.speedEgg);
        } else {
            self.setState({ isGameSwitched: false });
            return;
        }
    }

    //////////////////////////////////////////
    //Проверка успеха или ошибки
    checkScoreOrMistake(classnameForEgg, eggLocation) {
        if (this.state[classnameForEgg] === `egg ${eggLocation}5 activeEgg`) {
            if ((classnameForEgg === "classnameForLU" && this.state.wolfBascetPosition === "volk-hand2 active") || (classnameForEgg === "classnameForLU_Second" && this.state.wolfBascetPosition === "volk-hand2 active")) {
                this.SoundPlay(hitEgg)
                this.setState({ score: this.state.score + 1 })
                this.nextAcceleration()
            } else
                if ((classnameForEgg === "classnameForLD" && this.state.wolfBascetPosition === "volk-hand1 active") || (classnameForEgg === "classnameForLD_Second" && this.state.wolfBascetPosition === "volk-hand1 active")) {
                    this.SoundPlay(hitEgg)
                    this.setState({ score: this.state.score + 1 })
                    this.nextAcceleration()
                } else
                    if ((classnameForEgg === "classnameForRU" && this.state.wolfBascetPosition === "volk-hand4 active") || (classnameForEgg === "classnameForRU_Second" && this.state.wolfBascetPosition === "volk-hand4 active")) {
                        this.SoundPlay(hitEgg)
                        this.setState({ score: this.state.score + 1 })
                        this.nextAcceleration()
                    } else
                        if ((classnameForEgg === "classnameForRD" && this.state.wolfBascetPosition === "volk-hand3 active") || (classnameForEgg === "classnameForRD_Second" && this.state.wolfBascetPosition === "volk-hand3 active")) {
                            this.SoundPlay(hitEgg)
                            this.setState({ score: this.state.score + 1 })
                            this.nextAcceleration()
                        } else {
                            this.loser()
                            this.setState({ mistakes: this.state.mistakes + 1 })
                        }
        }
    }

    checkScoreOrMistakeInAutoPlay(classnameForEgg, eggLocation) {
        if (this.state[classnameForEgg] === `egg ${eggLocation}5 activeEgg`) {
            if (classnameForEgg === "classnameForLU" || classnameForEgg === "classnameForLU_Second") {
                this.setState({ wolfBascetPosition: "volk-hand2 active" })
                this.setState({ wolfPosition: "volk1 active" })

            } else
                if (classnameForEgg === "classnameForLD" || classnameForEgg === "classnameForLD_Second") {
                    this.setState({ wolfBascetPosition: "volk-hand1 active" })
                    this.setState({ wolfPosition: "volk1 active" })
                } else
                    if (classnameForEgg === "classnameForRU" || classnameForEgg === "classnameForRU_Second") {
                        this.setState({ wolfBascetPosition: "volk-hand4 active" })
                        this.setState({ wolfPosition: "volk2 active" })
                    } else
                        if (classnameForEgg === "classnameForRD" || classnameForEgg === "classnameForRD_Second") {
                            this.setState({ wolfBascetPosition: "volk-hand3 active" })
                            this.setState({ wolfPosition: "volk2 active" })
                        }
        }
    }

    nextAcceleration() {
        if (this.state.score !== 0 && this.state.score % 10 === 0) {
            this.setState({ speedEgg: this.state.speedEgg - 15 });
            this.setState({ respaunEgg: this.state.respaunEgg - 50 });
        }
    }

    loser() {
        if (this.state.loss !== 120) {
            this.setState({ loss: this.state.loss + 40 })
        }
    }

    loss(x) {
        let config = {
            width: x,
        }

        return (
            <div className="loss" style={config} />
        )
    }

    ///////////////////////////// 
    //Использование клавиатуры (кнопки w,a,s,d на numpad)
    checkKey = (event) => {
        switch (event.keyCode) {
            case 65:
                this.setState({ wolfPosition: "volk1 active" });
                this.left()
                break;
            case 68:
                this.setState({ wolfPosition: "volk2 active" });
                this.right()
                break;
            case 87:
                this.up()
                break;
            case 83:
                this.down()
                break;
            default:
                break;
        }

    }

    left() {
        if (this.state.wolfBascetPosition === "volk-hand4 active") {
            this.setState({ wolfBascetPosition: "volk-hand2 active" });
        }
        if (this.state.wolfBascetPosition === "volk-hand3 active") {
            this.setState({ wolfBascetPosition: "volk-hand1 active" });
        }

    }

    right() {
        if (this.state.wolfBascetPosition === "volk-hand1 active") {
            this.setState({ wolfBascetPosition: "volk-hand3 active" });
        }
        if (this.state.wolfBascetPosition === "volk-hand2 active") {
            this.setState({ wolfBascetPosition: "volk-hand4 active" });
        }

    }

    up() {
        if (this.state.wolfPosition === "volk1 active") {
            this.setState({ wolfBascetPosition: "volk-hand2 active" });
        }
        if (this.state.wolfPosition === "volk2 active") {
            this.setState({ wolfBascetPosition: "volk-hand4 active" });
        }
    }

    down() {
        if (this.state.wolfPosition === "volk1 active") {
            this.setState({ wolfBascetPosition: "volk-hand1 active" });
        }
        if (this.state.wolfPosition === "volk2 active") {
            this.setState({ wolfBascetPosition: "volk-hand3 active" });
        }
    }

    ///////////////////////////
    //Функция рендера волка при клике на кнопки интерфейса
    renderWolf(buttonNumber) {
        switch (buttonNumber.target.id) {
            case "1":
                this.setState({ wolfPosition: "volk1 active" });
                this.setState({ wolfBascetPosition: "volk-hand2 active" });
                break;
            case "2":
                this.setState({ wolfPosition: "volk1 active" });
                this.setState({ wolfBascetPosition: "volk-hand1 active" });
                break;
            case "3":
                this.setState({ wolfPosition: "volk2 active" });
                this.setState({ wolfBascetPosition: "volk-hand4 active" });
                break;
            case "4":
                this.setState({ wolfPosition: "volk2 active" });
                this.setState({ wolfBascetPosition: "volk-hand3 active" });
                break;
            default:
                break;
        }

    }

    render() {
        Howler.volume(0.1)
        let styleClassFirstEggLU = this.state.classnameForLU;
        let styleClassFirstEggLD = this.state.classnameForLD;
        let styleClassFirstEggRU = this.state.classnameForRU;
        let styleClassFirstEggRD = this.state.classnameForRD;

        let styleClassSecondEggLU = this.state.classnameForLU_Second;
        let styleClassSecondEggLD = this.state.classnameForLD_Second;
        let styleClassSecondEggRU = this.state.classnameForRU_Second;
        let styleClassSecondEggRD = this.state.classnameForRD_Second;

        let wolfPosition = this.state.wolfPosition;
        let wolfBascetPosition = this.state.wolfBascetPosition;
        let wolf = <div className={wolfPosition} />;
        let wolfBascet = <div className={wolfBascetPosition} />

        let score = this.state.score;
        let mistakes = this.state.mistakes;

        return (
            <>
                <div className="wraper">
                    <div className="btn_startA" onClick={this.beginA} />
                    <div className="title_btn_startA">игра А</div>
                    <div className="btn_startB" onClick={this.beginB} />
                    <div className="title_btn_startB">игра Б</div>
                    <div className="btn_time" onClick={this.time} />
                    <div className="title_btn_time">время</div>
                    <div className={styleClassFirstEggLU} />
                    <div className={styleClassFirstEggLD} />
                    <div className={styleClassFirstEggRU} />
                    <div className={styleClassFirstEggRD} />
                    <div className={styleClassSecondEggLU} />
                    <div className={styleClassSecondEggLD} />
                    <div className={styleClassSecondEggRU} />
                    <div className={styleClassSecondEggRD} />

                    <div className="score">
                        {score}
                    </div>

                    {this.loss(this.state.loss)}
                    <EggsNone />
                    {wolf}
                    {wolfBascet}

                    <button id="1" onClick={this.renderWolf} className="btn btn-left-up" />
                    <button id="2" onClick={this.renderWolf} className="btn btn-left-down" />
                    <button id="3" onClick={this.renderWolf} className="btn btn-right-up" />
                    <button id="4" onClick={this.renderWolf} className="btn btn-right-down" />
                    <div className="triangle1" />
                    <div className="triangle2" />
                    <div className="triangle3" />
                    <div className="triangle4" />
                </div>
            </>
        )
    }
}
