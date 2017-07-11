//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

class ContactUsComponent extends Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            showContactUs: false
        };

        //declarador de funciones
        this.closePopUp = this.closePopUp.bind(this);
    }
    closePopUp(){
        this.props.closePopUp(false);
        this.setState({showContactUs:false});
        //to enable scrolling when the popup is open
        document.body.style.overflow = 'auto';
    }    

    render() {
        let showPopUp = (this.props.showPopUp == true )? 'showElement' : 'hideElement';

        let form = (<form className="form-horizontal" action="/action_page.php">
            <div className="form-group">
                <label className="control-label col-sm-2"  htmlFor="name">Name</label>
                <div className="col-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-question-sign"></i></span>
                        <input type="text" className="form-control" id="name" placeholder="Jane Doe" name="name"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2"  htmlFor="email">Email</label>
                <div className="col-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input type="email" className="form-control" id="email" placeholder="jane.doe@example.com" name="email"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="phone">Telefono</label>
                <div className="col-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>
                        <input type="tel" className="form-control" id="phone" placeholder="Ingrese Numero de telefono" name="phone"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="message">Mensaje</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" className="form-control" id="message" rows="5"></textarea>
                </div>                                
            </div>
            <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </div>
        </form>);

        let info = (<div>
            <p>Pais: colombia</p>
            <p>Ciudad: cali</p>
            <p>Telefono: 123234234</p>
            <p>Whatsapp: 3185212447</p>
            <p>Direccion: carrera 95 #45-135</p>
            <p>Email: caprevalle@hotmail.com</p>
        </div>);

        let map = (<div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3982.829824338429!2d-76.5471499!3d3.3916915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a158f2349301%3A0xbdf02ca55f192d69!2sCra.+73+%233C-44%2C+Cali%2C+Valle+del+Cauca!5e0!3m2!1sen!2sco!4v1499540782796" 
                width="600" 
                height="450" 
                frameBorder="0" 
                className="map" 
                allowFullScreen>
            </iframe>
        </div>);

        let contactusPopUp = (<div className={showPopUp+' popUpContainer'}>
            <div className="backgroundPopUp" onClick={this.closePopUp}></div>
            <div className="popUpContainerCard">
                <div className="text-right">
                    <span className="glyphicon glyphicon-remove  verticalCenterSpan" aria-hidden="true" onClick={this.closePopUp}></span>
                </div>
                <h2 className="text-center">CONTACTENOS</h2>
                <hr className="symbol"/>
                <div className="container-fluid MarginBottom10px">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        {form}
                    </div>
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        {info}
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        {map}
                    </div>
                </div>                
            </div>
        </div>);

        return (
            <div>
                {contactusPopUp}               
            </div>
        );
    }
};
export default ContactUsComponent;