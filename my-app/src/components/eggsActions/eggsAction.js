import React, { Component } from "react";
import Eggs from "../eggs";
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
            countLU: 1,
            countLD: 1,
            countRU: 1,
            countRD: 1,
            countLU1: 1,
            countLD1: 1,
            countRU1: 1,
            countRD1: 1,
            LU: 'egg LU1 noneEgg ',
            LD: 'egg LD1 noneEgg',
            RU: 'egg RU1 noneEgg',
            RD: 'egg RD1 noneEgg',
            LU1: 'egg LU1 noneEgg',
            LD1: 'egg LD1 noneEgg',
            RU1: 'egg RU1 noneEgg',
            RD1: 'egg RD1 noneEgg',
        };
        this.start1 = this.start1.bind(this);
        this.start11 = this.start11.bind(this);
        this.start2 = this.start2.bind(this);
        this.start3 = this.start3.bind(this);
        this.start4 = this.start4.bind(this);
        this.nashalo = this.nashalo.bind(this);
    }

    componentDid() { }
    componentDidUpdate() {

        // if(this.state.posLU===true && this.state.countLU===0){

        //     this.start1()
        // }




        // if (this.state.posLD === true && this.state.countLD === 0) {
        //     this.start2()
        // }
        // if (this.state.posRU === true && this.state.countRU === 0) {
        //     this.start3()
        // }
        // if (this.state.posRD === true && this.state.countRD === 0) {
        //     this.start4()
        // }

    }

    nashalo() {
        let num = Math.floor(Math.random() * 4) + 1;
        console.log(num)
        if (this.state.posLU === false) {

            this.start11()
        }

        if (this.state.posLD === false) {

            this.start22()
        }

        if (this.state.posRU === false) {

            this.start33()
        }

        if (this.state.posRD === false) {

            this.start44()
        }
        switch (num) {
            case 1:
                this.start1();

                break;
            case 2:
                this.start2();
                break;
            case 3:
                this.start3();
                break;
            case 4:
                this.start4();
                break;
            default:
                break;
        }
    }





    start1() {
        console.log("start1")
        // console.log(this.state)
        this.setState({ LU: 'egg LU1 activeEgg' })
        this.setState({ posLU: false })
        setTimeout(() => this.setState({ LU: 'egg LU2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countLU: this.state.countLU + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LU: 'egg LU3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countLU: this.state.countLU + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LU: 'egg LU4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countLU: this.state.countLU + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LU: 'egg LU5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countLU: this.state.countLU + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LU: 'egg LU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posLU: true }), 4500)
        setTimeout(() => this.setState({ countLU: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }


    start11() {
        console.log("start11")
        // console.log(this.state)
        this.setState({ LU1: 'egg LU1 activeEgg' })
        this.setState({ posLU1: false })
        setTimeout(() => this.setState({ LU1: 'egg LU2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countLU1: this.state.countLU1 + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LU1: 'egg LU3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countLU1: this.state.countLU1 + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LU1: 'egg LU4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countLU1: this.state.countLU1 + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LU1: 'egg LU5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countLU1: this.state.countLU1 + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LU1: 'egg LU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posLU1: true }), 4500)
        setTimeout(() => this.setState({ countLU1: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }

















    start2() {
        console.log("start2")
        // console.log(this.state)
        this.setState({ LD: 'egg LD1 activeEgg' })
        this.setState({ posLD: false })
        setTimeout(() => this.setState({ LD: 'egg LD2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countLD: this.state.countLD + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LD: 'egg LD3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countLD: this.state.countLD + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LD: 'egg LD4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countLD: this.state.countLD + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LD: 'egg LD5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countLD: this.state.countLD + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LD: 'egg LD1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posLD: true }), 4500)
        setTimeout(() => this.setState({ countLD: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)
    }


    start22() {
        console.log("start22")
        // console.log(this.state)
        this.setState({ LD1: 'egg LD1 activeEgg' })
        this.setState({ posLD1: false })
        setTimeout(() => this.setState({ LD1: 'egg LD2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countLD1: this.state.countLD1 + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LD1: 'egg LD3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countLD1: this.state.countLD1 + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LD1: 'egg LD4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countLD1: this.state.countLD1 + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LD1: 'egg LD5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countLD1: this.state.countLD1 + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LD1: 'egg LD1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posLD1: true }), 4500)
        setTimeout(() => this.setState({ countLD1: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)
    }

    start3() {
        console.log("start3")
        // console.log(this.state)
        this.setState({ RU: 'egg RU1 activeEgg' })
        this.setState({ posRU: false })
        setTimeout(() => this.setState({ RU: 'egg RU2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countRU: this.state.countRU + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ RU: 'egg RU3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countRU: this.state.countRU + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ RU: 'egg RU4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countRU: this.state.countRU + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ RU: 'egg RU5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countRU: this.state.countRU + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ RU: 'egg RU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posRU: true }), 4500)
        setTimeout(() => this.setState({ countRU: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }


    start33() {
        console.log("start33")
        // console.log(this.state)
        this.setState({ RU1: 'egg RU1 activeEgg' })
        this.setState({ posRU1: false })
        setTimeout(() => this.setState({ RU1: 'egg RU2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countRU1: this.state.countRU1 + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ RU1: 'egg RU3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countRU1: this.state.countRU1 + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ RU1: 'egg RU4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countRU1: this.state.countRU1 + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ RU1: 'egg RU5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countRU1: this.state.countRU1 + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ RU1: 'egg RU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posRU1: true }), 4500)
        setTimeout(() => this.setState({ countRU1: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }





    start4() {
        console.log("start4")
        // console.log(this.state)
        this.setState({ RD: 'egg RD1 activeEgg' })
        this.setState({ posRD: false })
        setTimeout(() => this.setState({ RD: 'egg RD2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countRD: this.state.countRD + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ RD: 'egg RD3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countRD: this.state.countRD + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ RD: 'egg RD4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countRD: this.state.countRD + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ RD: 'egg RD5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countRD: this.state.countRD + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ RD: 'egg LU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posRD: true }), 4500)
        setTimeout(() => this.setState({ countRD: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }



    start44() {
        console.log("start44")
        // console.log(this.state)
        this.setState({ RD1: 'egg RD1 activeEgg' })
        setTimeout(() => this.setState({ posRD1: false }), 1000)
        setTimeout(() => this.setState({ RD1: 'egg RD2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ countRD1: this.state.countRD1 + 1 }), 1000)
        // setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ RD1: 'egg RD3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ countRD1: this.state.countRD1 + 1 }), 2000)
        // setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ RD1: 'egg RD4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ countRD1: this.state.countRD1 + 1 }), 3000)
        // setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ RD1: 'egg RD5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ countRD1: this.state.countRD1 + 1 }), 4000)
        // setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ RD1: 'egg LU1 noneEgg' }), 4500)
        setTimeout(() => this.setState({ posRD1: true }), 4500)
        setTimeout(() => this.setState({ countRD1: 0 }), 4500)
        // setTimeout(() => console.log(this.state), 4500)


    }






    render() {
        let num = 1;
        let classname1 = this.state.LU;
        let classname2 = this.state.LD;
        let classname3 = this.state.RU;
        let classname4 = this.state.RD;

        let classname11 = this.state.LU1;
        let classname22 = this.state.LD1;
        let classname33 = this.state.RU1;
        let classname44 = this.state.RD1;


        return (
            <>
                <div className="wraper">
                    <div className="btn_start" onClick={this.nashalo} />
                    <div className={classname1} />
                    <div className={classname2} />
                    <div className={classname3} />
                    <div className={classname4} />
                    <div className={classname11} />
                    <div className={classname22} />
                    <div className={classname33} />
                    <div className={classname44} />

                    <Eggs />
                </div>
            </>
        )
    }
}
















