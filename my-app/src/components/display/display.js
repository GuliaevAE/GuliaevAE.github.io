import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Eggs from "../eggsActions/eggsAction";
// import Buttons from "../buttons";
import Volk from "../volk";
import "../volk/volk.css";


// const dispatch = useDispatch()

 





class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:"", numh:""
        };
        // this.btnClick = this.btnClick.bind(this);
        this.renderWolf = this.renderWolf.bind(this);
    }

    

    




    renderWolf(i){
        // return <div className={i}/>
        // alert(i.target.id);
        switch (i.target.id) {
            case "1":
                this.setState({num: "volk1 active"});
                this.setState({numh: "volk-hand2 active"});
                break;
            case "2":
                this.setState({num: "volk1 active"});
                this.setState({numh: "volk-hand1 active"});
                break;
            case "3":
                this.setState({num: "volk2 active"});
                this.setState({numh: "volk-hand4 active"});
                break;
            case "4":
                this.setState({num: "volk2 active"});
                this.setState({numh: "volk-hand3 active"});
                break;            
            default:
                break;
        }
        console.log(this.state)

    }

    render(){
        const CounterComponent = () => {
            const counter = useSelector((state) => state.numberPosition)
            // return <div>{counter}</div>
            console.log(counter);
          }

        
         
        let num = this.state.num;
        let numh = this.state.numh;
        let wolk = <div className= {num}/>;
        let wolkHand = <div className = {numh}/>
        
        return(
            <>
                <div className="back">
                <div className="display">
                    <Volk/>
                    {wolk}
                    {wolkHand}
                    <Eggs></Eggs>
                </div>
                
                <button id="1" onClick={CounterComponent} className="btn btn-left-up">LU</button>
                <button id="2" onClick={this.renderWolf} className="btn btn-left-down">LD</button>
                <button id="3" onClick={this.renderWolf} className="btn btn-right-up">RU</button>
                <button id="4" onClick={this.renderWolf} className="btn btn-right-down">RD</button>
                <div className="LOGO"/>
                </div>
            
            </>
        ) 
    }

    

}




export default Display;

