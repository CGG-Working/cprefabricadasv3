//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

//import contact us
import ContactUsComponent from '.././components/contactUs';

class HeadComponent extends React.Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: '',
            Menu_State: 'Hide',
            Menu_Width: 'Menu_Width_Close',
            showContactUs: false
        };

        //declarador de funciones
        this.Menu_Open_Close = this.Menu_Open_Close.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToGallery = this.goToGallery.bind(this);
        this.goToContactUs = this.goToContactUs.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
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
    goToHome(event){
        //go to home
        window.location.href = "/";
    }
    goToGallery(event){
        //go to gallery
        window.location = "/house";//pendiente para la galeria de arturo
    }
    goToContactUs(event){
        console.log("Quieres abrir el menu");
        this.setState({
            Menu_State: "Hide",
            Menu_Width: 'Menu_Width_Close',
            showContactUs:true            
        });
        //to enable scrolling when the popup is open
        document.body.style.overflow = 'hidden';
    }
    closePopUp(value){
        console.log("Quieres abrir el menu");
        this.setState({
            showContactUs:value            
        });
    }
    render() {
        let popup = (this.state.showContactUs == true)? true : false;

        let menuItems = (<div className="MarginTop20px">
            <a className="hover" onClick={(event) =>{this.goToHome(event)}}>Inicio</a>
            <hr className="style14"/>
            <a className="hover" onClick={(event) =>{this.goToGallery(event)}}>Galeria</a>
            <hr className="style14"/>
            <a className="hover" onClick={(event) =>{this.goToContactUs(event)}}>Contactenos</a>
            <hr className="style14"/>
        </div>);

        return (
            <div>
                {/*contactusPopUp*/}
                <ContactUsComponent showPopUp={popup} closePopUp={this.closePopUp}/>

                <div className="Nav Nav_Color">
                    <div  className="row">
                        <div className="col-xs-5 col-sm-5 col-md-4 col-lg-4 Nav_Part1">
                            <img src="../public/images/logotest2.png" alt="Logo" className="Logo_Image hover img-responsive" onClick={(event) =>{this.goToHome(event)}}/>
                        </div>
                        <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7 Nav_Part2"></div>
                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-1 Nav_Part3">
                            <div className="verticalCenterSpanContainer">
                                <span className="glyphicon glyphicon-menu-hamburger closeMenuIconColor Hamburger_Color verticalCenterSpan" aria-hidden="true" value={this.state.Menu_State} onClick={this.Menu_Open_Close}></span>
                            </div>
                        </div>
                        <div className={"Menu_Background "+this.state.Menu_State+"_Element"} value={this.state.Menu_State} onClick={this.Menu_Open_Close}></div>
                        <div className={"Menu_Element "+this.state.Menu_Width}>
                            <div className="closeIconContainer">
                                <span className="glyphicon glyphicon-remove closeMenuIconColor Menu_Remove_Icon  pull-left" value={this.state.Menu_State} onClick={this.Menu_Open_Close}></span>
                            </div>
                            {menuItems}
                        </div>
                    </div>
                </div>
            </div>   
        );              
    }
};
//ReactDOM.render(<HeadComponent/>, document.getElementById('head'));
export default HeadComponent;