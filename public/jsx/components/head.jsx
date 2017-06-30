//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

class HeadComponent extends React.Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: '',
            Menu_State: 'Hide',
            Menu_Width: 'Menu_Width_Close'
        };

        //declarador de funciones
        this.Menu_Open_Close = this.Menu_Open_Close.bind(this);
    }
    Menu_Open_Close(event){
        console.log("Quieres abrir el menu");
        if(this.state.Menu_State == "Hide"){
            this.setState({
                Menu_State: "Show",
                Menu_Width: 'Menu_Width_Open'
            });
        }else{
            this.setState({
                Menu_State: "Hide",
                Menu_Width: 'Menu_Width_Close'
            });
        }        
    }
    render() {
        return (
            <div>
                <div className="Nav Nav_Color">
                    <div  className="row">
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 Nav_Part1">
                            <img src="../public/images/Logo.png" alt="Logo" className="Logo_Image"/>
                        </div>
                        <div className="col-xs-6 col-sm-7 col-md-8 col-lg-9 Nav_Part2"></div>
                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-1 Nav_Part3">
                            <div className="verticalCenterSpanContainer">
                                <span className="glyphicon glyphicon-menu-hamburger Hamburger_Color verticalCenterSpan" aria-hidden="true" value={this.state.Menu_State} onClick={this.Menu_Open_Close}></span>
                            </div>
                        </div>
                        <div className={"Menu_Background "+this.state.Menu_State+"_Element"} value={this.state.Menu_State} onClick={this.Menu_Open_Close}></div>
                        <div className={"Menu_Element "+this.state.Menu_Width}>
                            <span className="glyphicon glyphicon-remove Menu_Remove_Icon" value={this.state.Menu_State} onClick={this.Menu_Open_Close}></span>
                        </div>
                    </div>
                </div>
            </div>   
        );              
    }
};
//ReactDOM.render(<HeadComponent/>, document.getElementById('head'));
export default HeadComponent;