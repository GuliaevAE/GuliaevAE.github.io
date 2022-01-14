import React, { Component } from "react";
import EggsNone from "../eggs";
import "../eggsActions/eggsActions.css";


export default class EggsActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posLU: true,
            posLD: true,
            posRU: true,
            posRD: true,
            posLU1: true,
            posLD1: true,
            posRU1: true,
            posRD1: true,
            LU: 'egg LU1 noneEgg ',
            LD: 'egg LD1 noneEgg',
            RU: 'egg RU1 noneEgg',
            RD: 'egg RD1 noneEgg',
            LU1: 'egg LU1 noneEgg',
            LD1: 'egg LD1 noneEgg',
            RU1: 'egg RU1 noneEgg',
            RD1: 'egg RD1 noneEgg',
            speedEgg: 1000,
            respaunEgg: 1000,
            num: "volk1 active", numh: "volk-hand2 active",
            score: 0,
            mistakes: 0

        };
        this.start1 = this.start1.bind(this);
        this.start11 = this.start11.bind(this);
        this.start2 = this.start2.bind(this);
        this.start3 = this.start3.bind(this);
        this.start4 = this.start4.bind(this);
        this.beginA = this.beginA.bind(this);
        this.beginB = this.beginB.bind(this);
        this.auto = this.auto.bind(this);
        this.renderWolf = this.renderWolf.bind(this);
    }

    /////////////////////////////////////////////
    componentDidMount() {
        document.addEventListener("keydown", this.checkKey);
    }

    /////////////////////////////////////////////////
    //Функция рендера случайного яйца 
    auto() {
        let num = this.randomInteger(1,4);
        console.log(num)

        switch (num) {
            case 1:
                if (this.state.posLU === false) {
                    if (this.state.posLU === false && this.state.posLU1 === false) {
                        if (this.state.posLU === false && this.state.posLU1 === false && this.state.LD === false) {
                            this.start11("LD", "posLD")
                        } else {
                            console.log("Переход на старт2")
                            this.start1("LD", "posLD")
                        }
                    } else { this.start11("LU", "posLU") }
                } else { this.start1("LU", "posLU") }

                break;
            case 2:
                if (this.state.posLD === false) {
                    if (this.state.posLD === false && this.state.posLD1 === false) {
                        if (this.state.posLD === false && this.state.posLD1 === false && this.state.posRU === false) {
                            this.start11("RU", "posRU")
                        } else {
                            console.log("Переход на старт3")
                            this.start1("RU", "posRU")
                        }
                    } else { this.start11("LD", "posLD") }
                } else { this.start1("LD", "posLD") }
                break;
            case 3:
                if (this.state.posRU === false) {
                    if (this.state.posRU === false && this.state.posRU1 === false) {
                        if (this.state.posRU === false && this.state.posRU1 === false && this.state.posRD === false) {
                            this.start11("RD", "posRD")
                        } else {
                            console.log("Переход на старт4")
                            this.start1("RD", "posRD")
                        }
                    } else { this.start11("RU", "posRU") }
                } else { this.start1("RU", "posRU") }
                break;
            case 4:
                if (this.state.posRD === false) {
                    if (this.state.posRD === false && this.state.posRD1 === false) {
                        if (this.state.posRD === false && this.state.posRD1 === false && this.state.posLU === false) {
                            this.start11("LU", "posLU")
                        } else {
                            console.log("Переход на старт1")
                            this.start1("LU", "posLU")
                        }
                    } else { this.start11("RD", "posRD") }
                } else { this.start1("RD", "posRD") }
                break;
            default:
                break;
        }
    }

    /////////////////////////////////////////////
    ///Функция генерации яиц с определенным интервалом

    beginA() {
        this.state.speedEgg = 1000;
        this.state.respaunEgg = 1000;
        console.log(this.state.speedEgg)
        console.log(this.state.respaunEgg)
        setInterval(() => this.auto(), this.state.respaunEgg)
    }



    beginB() {
        this.state.speedEgg = 700;
        this.state.respaunEgg = 700;
        console.log(this.state.speedEgg)
        console.log(this.state.respaunEgg)
        setInterval(() => this.auto(), this.state.respaunEgg)
    }

    ///////////////////////////////////////////
    //Функция генерации рандомного числа
    randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    //////////////////////////////////////////
    //Функции движения яиц

    start1(i, pos) {
        console.log("start1")
        this.setState({ [i]: `egg ${i}1 activeEgg` })
        this.setState({ [pos]: false })
        setTimeout(() => this.setState({ [i]: `egg ${i}2 activeEgg` }), this.state.speedEgg)
        setTimeout(() => this.setState({ [i]: `egg ${i}3 activeEgg` }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ [i]: `egg ${i}4 activeEgg` }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ [i]: `egg ${i}5 activeEgg` }), this.state.speedEgg * 4)
        const verify = () => {
            if (this.state.LU === "egg LU5 activeEgg" && this.state.num === "volk1 active" && this.state.numh === "volk-hand2 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
        setTimeout(() => this.setState({ [i]: `egg ${i}1 noneEgg` }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ [pos]: true }), this.state.speedEgg * 4.5)
    }


    start11(i, pos) {
        let x = i+1;
        let y = pos+1;
        console.log(x)
        console.log("start11")
        this.setState({ [x]: `egg ${i}1 activeEgg` })
        this.setState({ [y]: false })
        setTimeout(() => this.setState({ [x]: `egg ${i}2 activeEgg` }), this.state.speedEgg)
        setTimeout(() => this.setState({ [x]: `egg ${i}3 activeEgg` }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ [x]: `egg ${i}4 activeEgg` }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ [x]: `egg ${i}5 activeEgg` }), this.state.speedEgg * 4)
        const verify = () => {
            if (this.state.LU === "egg LU5 activeEgg" && this.state.num === "volk1 active" && this.state.numh === "volk-hand2 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
        setTimeout(() => this.setState({ [x]: `egg ${i}1 noneEgg` }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ [y]: true }), this.state.speedEgg * 4.5)
    }


    // start11() {
    //     console.log("start11")
    //     this.setState({ LU1: 'egg LU1 activeEgg' })
    //     this.setState({ posLU1: false })
    //     setTimeout(() => this.setState({ LU1: 'egg LU2 activeEgg' }), this.state.speedEgg)
    //     setTimeout(() => this.setState({ LU1: 'egg LU3 activeEgg' }), this.state.speedEgg * 2)
    //     setTimeout(() => this.setState({ LU1: 'egg LU4 activeEgg' }), this.state.speedEgg * 3)
    //     setTimeout(() => this.setState({ LU1: 'egg LU5 activeEgg' }), this.state.speedEgg * 4)
    //     setTimeout(() => this.setState({ LU1: 'egg LU1 noneEgg' }), this.state.speedEgg * 4.5)
    //     setTimeout(() => this.setState({ posLU1: true }), this.state.speedEgg * 4.5)

    //     const verify = () => {
    //         if (this.state.LU1 === "egg LU5 activeEgg" && this.state.num === "volk1 active" && this.state.numh === "volk-hand2 active") {
    //             this.setState({ score: this.state.score + 1 })
    //         } else {
    //             this.setState({ mistakes: this.state.mistakes + 1 })
    //         }
    //     }
    //     setTimeout(() => verify(), this.state.speedEgg * 4.1)
    // }

    start2() {
        console.log("start2")
        this.setState({ LD: 'egg LD1 activeEgg' })
        this.setState({ posLD: false })
        setTimeout(() => this.setState({ LD: 'egg LD2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ LD: 'egg LD3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ LD: 'egg LD4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ LD: 'egg LD5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ LD: 'egg LD1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posLD: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.LD === "egg LD5 activeEgg" && this.state.num === "volk1 active" && this.state.numh === "volk-hand1 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
    }


    start22() {
        console.log("start22")
        this.setState({ LD1: 'egg LD1 activeEgg' })
        this.setState({ posLD1: false })
        setTimeout(() => this.setState({ LD1: 'egg LD2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ LD1: 'egg LD3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ LD1: 'egg LD4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ LD1: 'egg LD5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ LD1: 'egg LD1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posLD1: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.LD1 === "egg LD5 activeEgg" && this.state.num === "volk1 active" && this.state.numh === "volk-hand1 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
    }

    start3() {
        console.log("start3")
        this.setState({ RU: 'egg RU1 activeEgg' })
        this.setState({ posRU: false })
        setTimeout(() => this.setState({ RU: 'egg RU2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ RU: 'egg RU3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ RU: 'egg RU4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ RU: 'egg RU5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ RU: 'egg RU1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posRU: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.RU === "egg RU5 activeEgg" && this.state.num === "volk2 active" && this.state.numh === "volk-hand4 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
    }


    start33() {
        console.log("start33")
        this.setState({ RU1: 'egg RU1 activeEgg' })
        this.setState({ posRU1: false })
        setTimeout(() => this.setState({ RU1: 'egg RU2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ RU1: 'egg RU3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ RU1: 'egg RU4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ RU1: 'egg RU5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ RU1: 'egg RU1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posRU1: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.RU1 === "egg RU5 activeEgg" && this.state.num === "volk2 active" && this.state.numh === "volk-hand4 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
    }


    start4() {
        console.log("start4")
        this.setState({ RD: 'egg RD1 activeEgg' })
        this.setState({ posRD: false })
        setTimeout(() => this.setState({ RD: 'egg RD2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ RD: 'egg RD3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ RD: 'egg RD4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ RD: 'egg RD5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ RD: 'egg LU1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posRD: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.RD === "egg RD5 activeEgg" && this.state.num === "volk2 active" && this.state.numh === "volk-hand3 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)
    }

    start44() {
        console.log("start44")
        this.setState({ RD1: 'egg RD1 activeEgg' })
        this.setState({ posRD1: false })
        setTimeout(() => this.setState({ posRD1: false }), 1000)
        setTimeout(() => this.setState({ RD1: 'egg RD2 activeEgg' }), this.state.speedEgg)
        setTimeout(() => this.setState({ RD1: 'egg RD3 activeEgg' }), this.state.speedEgg * 2)
        setTimeout(() => this.setState({ RD1: 'egg RD4 activeEgg' }), this.state.speedEgg * 3)
        setTimeout(() => this.setState({ RD1: 'egg RD5 activeEgg' }), this.state.speedEgg * 4)
        setTimeout(() => this.setState({ RD1: 'egg LU1 noneEgg' }), this.state.speedEgg * 4.5)
        setTimeout(() => this.setState({ posRD1: true }), this.state.speedEgg * 4.5)

        const verify = () => {
            if (this.state.RD1 === "egg RD5 activeEgg" && this.state.num === "volk2 active" && this.state.numh === "volk-hand3 active") {
                this.setState({ score: this.state.score + 1 })
            } else {
                this.setState({ mistakes: this.state.mistakes + 1 })
            }
        }
        setTimeout(() => verify(), this.state.speedEgg * 4.1)

    }


    ///////////////////////////// 
    //Использование клавиатуры (кнопки 2,4,6,8 на numpad)

    checkKey = (event) => {
        switch (event.keyCode) {
            case 65:
                this.setState({ num: "volk1 active" });
                this.left()
                break;
            case 68:
                this.setState({ num: "volk2 active" });
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
        if (this.state.numh === "volk-hand4 active") {
            this.setState({ numh: "volk-hand2 active" });
        }
        if (this.state.numh === "volk-hand3 active") {
            this.setState({ numh: "volk-hand1 active" });
        }

    }

    right() {
        if (this.state.numh === "volk-hand1 active") {
            this.setState({ numh: "volk-hand3 active" });
        }
        if (this.state.numh === "volk-hand2 active") {
            this.setState({ numh: "volk-hand4 active" });
        }

    }

    up() {
        if (this.state.num === "volk1 active") {
            this.setState({ numh: "volk-hand2 active" });
        }
        if (this.state.num === "volk2 active") {
            this.setState({ numh: "volk-hand4 active" });
        }
    }

    down() {
        if (this.state.num === "volk1 active") {
            this.setState({ numh: "volk-hand1 active" });
        }
        if (this.state.num === "volk2 active") {
            this.setState({ numh: "volk-hand3 active" });
        }
    }







    // createEgg(posX, posY){
       
        
    //     let className = this.state.LU;
    //     this.setState({ LU1: 'egg LU1 activeEgg' })
    //     setTimeout(() => this.setState({ LU: 'egg LU2 activeEgg' }), this.state.speedEgg)
    //     setTimeout(() => this.setState({ LU: 'egg LU3 activeEgg' }), this.state.speedEgg * 2)
    //     setTimeout(() => this.setState({ LU: 'egg LU4 activeEgg' }), this.state.speedEgg * 3)
    //     setTimeout(() => this.setState({ LU: 'egg LU5 activeEgg' }), this.state.speedEgg * 4)
    //     setTimeout(() => this.setState({ LU: 'egg LU1 noneEgg' }), this.state.speedEgg * 4.5)

    //     return(
    //         <div  className={className}/>
    //     )
    
    // }
    












    ///////////////////////////
    //Функция рендера волка при клике на кнопки интерфейса
    renderWolf(i) {
        switch (i.target.id) {
            case "1":
                this.setState({ num: "volk1 active" });
                this.setState({ numh: "volk-hand2 active" });
                break;
            case "2":
                this.setState({ num: "volk1 active" });
                this.setState({ numh: "volk-hand1 active" });
                break;
            case "3":
                this.setState({ num: "volk2 active" });
                this.setState({ numh: "volk-hand4 active" });
                break;
            case "4":
                this.setState({ num: "volk2 active" });
                this.setState({ numh: "volk-hand3 active" });
                break;
            default:
                break;
        }
        console.log(this.state)
    }

    render() {

        let classname1 = this.state.LU;
        let classname2 = this.state.LD;
        let classname3 = this.state.RU;
        let classname4 = this.state.RD;

        let classname11 = this.state.LU1;
        let classname22 = this.state.LD1;
        let classname33 = this.state.RU1;
        let classname44 = this.state.RD1;

        let num = this.state.num;
        let numh = this.state.numh;
        let wolk = <div className={num} />;
        let wolkHand = <div className={numh} />

        let score = this.state.score;
        let mistakes = this.state.mistakes;

        return (
            <>
                <div className="wraper">
                    <div className="btn_startA" onClick={this.beginA} />
                    <div className="title_btn_startA">игра А</div>
                    <div className="btn_startB" onClick={this.beginB} />
                    <div className="title_btn_startB">игра Б</div>
                    <div className={classname1} />
                    <div className={classname2} />
                    <div className={classname3} />
                    <div className={classname4} />
                    <div className={classname11} />
                    <div className={classname22} />
                    <div className={classname33} />
                    <div className={classname44} />

                    <div className="score">
                        {score}
                    </div>

                    <div className="mistakes">
                        {mistakes}
                    </div>


                    {/* {this.createEgg(50, 50)} */}



                    <EggsNone />
                    {wolk}
                    {wolkHand}

                    <button id="1" onClick={this.renderWolf} className="btn btn-left-up"/>
                    <button id="2" onClick={this.renderWolf} className="btn btn-left-down"/>
                    <button id="3" onClick={this.renderWolf} className="btn btn-right-up"/>
                    <button id="4" onClick={this.renderWolf} className="btn btn-right-down"/>
                </div>
            </>
        )
    }
}









// createEgg(posX, posY){
//     const styleConfig={
//         display:'block',
//         position: 'absolute',
//         left: posX,
//         top: posY
//     }

//     return(
//         <div className="egg"/>
//     )

// }























