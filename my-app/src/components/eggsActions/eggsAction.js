import React, { Component } from "react";
import Eggs from "../eggs";
import "../eggsActions/eggsActions.css";



export default class EggsActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countLU: 1,
            LU: 'egg LU1 activeEgg',
            LD: 'egg LD1 activeEgg',
            RU: 'egg RU1 activeEgg',
            RD: 'egg RD1 activeEgg',
        };
        this.start1 = this.start1.bind(this);
        this.start2 = this.start2.bind(this);
    }

    componentDid() { }
    componentDidUpdate() {

    }


    start1() {
        
        console.log(this.state)

        setTimeout(() => this.setState({ LU: 'egg LU2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ start: this.state.countLU + 1 }), 1000)
        setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LU: 'egg LU3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ start: this.state.countLU + 1 }), 2000)
        setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LU: 'egg LU4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ start: this.state.countLU + 1 }), 3000)
        setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LU: 'egg LU5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ start: this.state.countLU + 1 }), 4000)
        setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LU: 'egg LU1 ' }), 4500)
        setTimeout(() => this.setState({ countLU: 1 }), 4500)
        setTimeout(() => console.log(this.state), 4500)
    }

    start2() {
        
        console.log(this.state)

        setTimeout(() => this.setState({ LD: 'egg LD2 activeEgg' }), 1000)
        setTimeout(() => this.setState({ start: this.state.start + 1 }), 1000)
        setTimeout(() => console.log(this.state), 1000)


        setTimeout(() => this.setState({ LD: 'egg LD3 activeEgg' }), 2000)
        setTimeout(() => this.setState({ start: this.state.start + 1 }), 2000)
        setTimeout(() => console.log(this.state), 2000)

        setTimeout(() => this.setState({ LD: 'egg LD4 activeEgg' }), 3000)
        setTimeout(() => this.setState({ start: this.state.start + 1 }), 3000)
        setTimeout(() => console.log(this.state), 3000)

        setTimeout(() => this.setState({ LD: 'egg LD5 activeEgg' }), 4000)
        setTimeout(() => this.setState({ start: this.state.start + 1 }), 4000)
        setTimeout(() => console.log(this.state), 4000)

        setTimeout(() => this.setState({ LD: 'egg LD1 ' }), 4500)
        setTimeout(() => this.setState({ start: 1 }), 4500)
        setTimeout(() => console.log(this.state), 4500)
    }

    render() {
        let classname = '';

        
        let num =1;

        console.log(num)
switch (num) {
    case 1:
        classname = this.state.LU;
        
        break;
    case 2:
        classname = this.state.LD;
        
        break;
    case 3:
        classname = this.state.RU;
        break;
    case 4:
        classname = this.state.RD;
        break;

    default:
        break;
}


return (
    <>
        <div className="wraper">
            <div className="egg" onClick={this.start1} />
            <div className={classname} />
            <Eggs />
        </div>
    </>
)
    }
}
















