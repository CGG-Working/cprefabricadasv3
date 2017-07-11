//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

//import contact us
import ContactUsComponent from '.././components/contactUs';

class FooterComponent extends Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            showContactUs: false
        };

        //declarador de funciones
        this.redirect = this.redirect.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
    }
    redirect(destiny){
        if(destiny == 'facebook')
        window.location = "https://www.facebook.com/caprevalle/";
        else if( destiny == 'instagram')
        window.location = "https://www.google.com.co/?gfe_rd=cr&ei=kz9gWaPSCY7Q8Aed2ISIDA";
        else if( destiny == 'youtube')
        window.location = "https://www.youtube.com/channel/UC2eQsgrRhzYDq2R092E-Oww?view_as=subscriber";
        else if( destiny == 'gallery')
        window.location = "/house";//pendiente para la galeria de arturo
        else if( destiny == 'contactus'){
            this.setState({showContactUs:true});
            //to enable scrolling when the popup is open
            document.body.style.overflow = 'hidden';
        }
    }
    closePopUp(value){
        this.setState({showContactUs:value});
    }
    

    render() {
        let popup = (this.state.showContactUs == true)? true : false;

        return (
            <div>
                {/*contactusPopUp*/}
                <ContactUsComponent showPopUp={popup} closePopUp={this.closePopUp}/>
                
                <div className="container-fluid noPadding">
                    {/*footer*/}
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 footerHeight noPadding hover" onClick={this.redirect.bind(this, 'gallery')}>
                        <img src={"../public/images/header.jpg"} className="img-responsive footerImgGallery blur" alt="Cinque Terre"/>
                        <div className="blur"></div>
                        <div className="textOverImage">
                            <div className="text-center">GALERIA DE IMAGENES</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 footerHeight noPadding">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 footerHeight2 facebook hover" onClick={this.redirect.bind(this, 'facebook')}>
                            <div className="textOverImage">
                                <div className="text-center">facebook</div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 footerHeight2 youtube hover" onClick={this.redirect.bind(this, 'youtube')}>
                            <div className="textOverImage">
                                <div className="text-center">youtube</div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 footerHeight2 instagram hover" onClick={this.redirect.bind(this, 'instagram')}>
                            <div className="textOverImage">
                                <div className="text-center">instagram</div>
                            </div>
                        </div>                    
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footerHeight2 contactenos hover" onClick={this.redirect.bind(this, 'contactus')}>
                            <div className="textOverImage">
                                <div className="text-center">CONTACTENOS</div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
};
export default FooterComponent;