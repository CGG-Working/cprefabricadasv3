//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

//import text
import {text} from '.././strings/strings'


var casas = [
    {
        id:'1',
        categoria:'elite',
        habitaciones:'4',
        baños:'5',
        pisos:'2',
        tamaño:'100',
        img:'casa1'
    },
    {
        id:'2',
        categoria:'familiar',
        habitaciones:'4',
        baños:'5',
        pisos:'2',
        tamaño:'100',
        img:'casa2'
    },
    {
        id:'3',
        categoria:'elite',
        habitaciones:'4',
        baños:'5',
        pisos:'2',
        tamaño:'100',
        img:'casa3'
    }
];
var serviciosArray = [];
var ventajas = [];


class IndexComponent extends Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            ShowMision: false,
            ShowVision: false,
            ShowWhoWeAre: false,
            textToShow: '',
            titleToShow: '',
            imageToShow: 'casa1.jpg'
        };

        //declarador de funciones
        this.getCarouselData = this.getCarouselData.bind(this);
        this.whoWeAreInteract = this.whoWeAreInteract.bind(this);
        this.closeWhoWeAre = this.closeWhoWeAre.bind(this);
    }
    
    componentWillMount() {
        text.map(function(item, i){
            if(item.section == 'services') serviciosArray.push(item);
            else if(item.section == 'advantage') ventajas.push(item);
        }.bind(this));
    }  
    getCarouselData(){
        let lista = casas.map(function(item,i){
            let active;
            if(i==0) active="active";
            else active="";
            
            return(<li key={i} data-target="#myCarousel" data-slide-to={i} className={""+active}></li>);
        }.bind(this));

        let item = casas.map(function(item,i){
            let active;
            if(i==0) active="active";
            else active="";
            
            return(<div key={i} className={"item  container-fluid "+active}>
                <div className="col-xs-6 col-sm-5 col-md-5 col-lg-6 fullHeight">
                    <div className=" carouselFirstElement carouselElements">
                        <img src={"../public/images/"+item.img+".jpg"} className="img-circle image_carousel img-responsive pull-right" alt="Cinque Terre"/>
                    </div>                    
                </div>
                <div className="col-xs-6 col-sm-7 col-md-7 col-lg-6 fullHeight">
                    <div className=" carouselSecondElement carouselElements">
                        <h3>Ultimos proyectos</h3>
                        <p>Plantas {item.pisos} <br/>Habitaciones {item.habitaciones}</p>
                    </div>
                </div>
            </div>);
        }.bind(this));

        return (<div id="myCarousel" className="carousel slide last_projects_height" data-ride="carousel">
                    {/*<!-- Indicators -->*/}
                    {/*<ol className="carousel-indicators">
                        {lista}
                    </ol>*/}

                    {/*<!-- Wrapper for slides -->*/}
                    <div className="carousel-inner last_projects_height background">
                        {item}
                    </div>

                    {/*<!-- Left and right controls -->*/}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>);
    }
    whoWeAreInteract(data){ 
        text.map(function(item, i){
            if(item.section == 'whoweare'){
                if(item.title == data){
                    this.setState({
                        titleToShow:item.title,
                        textToShow:item.description
                    });
                }
            }            
        }.bind(this));
        if(data=='Mision'){
            if(this.state.ShowMision == true) this.setState({ShowMision:false});
            else this.setState({ShowMision:true, imageToShow:'casa1.jpg'});
        }
        else if(data=='Vision'){
            if(this.state.ShowVision == true) this.setState({ShowVision:false});
            else this.setState({ShowVision:true, imageToShow:'casa2.jpg'});
        }
        else{
            if(this.state.ShowWhoWeAre == true) this.setState({ShowWhoWeAre:false});
            else this.setState({ShowWhoWeAre:true, imageToShow:'casa3.jpg'});
        }
        //to stop scrolling when the popup is open
        document.body.style.overflow = 'hidden';
    }
    closeWhoWeAre(){
        if(this.state.ShowMision == true) this.setState({ShowMision:false});
        else if(this.state.ShowVision == true)this.setState({ShowVision:false});
        else this.setState({ShowWhoWeAre:false});
        //to enable scrolling when the popup is open
        document.body.style.overflow = 'auto';
    }
    render() {
        let carouselData = (casas != null)? this.getCarouselData() : 'Error al optener datos';
        let overflowy = (this.state.ShowMision != false || this.state.ShowVision != false || this.state.ShowWhoWeAre != false)? 'overflowNone':'overflowAuto';
        let ShowWhoWeAre = (this.state.ShowMision != false || this.state.ShowVision != false || this.state.ShowWhoWeAre != false)? 'showElement':'hideElement';

        let header_image = (<div className="marginTopPositionRelative">
            <div className="textOverImage">
                <div className="text-center headerTitle">CAPREVALLE</div>
                <p className="text-center">CASAS PREFABRICADAS DEL VALLE</p>
            </div>
            <img src={"../public/images/header.jpg"} className="initialImage img-responsive" alt="Responsive image"/>
        </div>);

        let text = (<div className={ShowWhoWeAre+' popUpContainer'}>
            <div className="backgroundPopUp" onClick={this.closeWhoWeAre}></div>
            <div className="whoWeAreContainerCard">
                <div className="text-right">
                    <span className="glyphicon glyphicon-remove  verticalCenterSpan" aria-hidden="true" onClick={this.closeWhoWeAre}></span>
                </div>
                <h1 className="text-center">{this.state.titleToShow}</h1>
                <hr className="symbol"/>
                <div className="container-fluid MarginBottom10px">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <img className="cardImg img-responsive centerInsideGrid" src={"../public/images/"+this.state.imageToShow} alt="Avatar"/>                    
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 ">
                        <p className="justify popupText">{this.state.textToShow}</p>
                    </div>
                </div>                
            </div>
        </div>);

        let who_we_are = (<div className="sectionContainer ">
            <div className="title">
                <h2 className="text-center">¿Quienes Somos?</h2>
            </div>
            <hr className="hra"/>
            <div className="container-fluid">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                    <img src={"../public/images/mision.png"} onClick={this.whoWeAreInteract.bind(this, 'Mision')} className="img-responsive quienesSomos centerInsideGrid hover" alt="Responsive image"/>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <img src={"../public/images/question3.png"} onClick={this.whoWeAreInteract.bind(this, 'Quienes Somos')} className="img-responsive quienesSomos centerInsideGrid hover" alt="Responsive image"/>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <img src={"../public/images/vision.png"} onClick={this.whoWeAreInteract.bind(this, 'Vision')} className="img-responsive quienesSomos centerInsideGrid hover" alt="Responsive image"/>
                </div>
            </div>                
        </div>);

        let video = (<div className="sectionContainer ">
            <div className="title">
                <h2 className="text-center">¿Como creamos tu casa?</h2>
            </div>
            <hr className="hra"/>
            <div className="iframeContainer">
                <iframe id="player" type="text/html"  src="https://www.youtube.com/embed/G3smRI6iI4E" frameBorder="0"></iframe>
            </div>
        </div>);

        let servicesCards = serviciosArray.map(function(item, i){
                return(<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 cardPadding10px" key={i}>
                    <div className="card centerInsideGrid" >
                        <img className="cardImg" src={"../public/images/"+item.img+".jpg"} alt="Avatar"/>
                        <div className="cardInfoContainer">
                            <h5><b>{item.titulo}</b></h5> 
                            <p className="justify">{item.descripcion}</p> 
                        </div>
                    </div>
                </div>);
        }.bind(this));
        
        let services =  (<div className="container-fluid sectionContainer servicesContainer">
            <div className="title">
                <h2 className="text-center">SERVICIOS</h2>
            </div>
            <hr className="hra"/>
            {servicesCards}
        </div>);

        let advantageContent = ventajas.map(function(item, i){
            return (<div key={i}>
                <div className={"col-xs-12 col-sm-3 col-md-3 col-lg-3 "+item.pull}>
                    <img className="img-circle ventajaImage img-responsive centerInsideGrid" src={"../public/images/"+item.img+".jpg"} alt="Avatar"/>
                </div>
                <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 positionRelative ventajaHeight">
                    <div className="centerVertically">
                        <h4>{item.titulo}</h4>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><hr className="hrAdvantage"/></div>
                
            </div>);
        }.bind(this));

        let advantage = (<div className="container-fluid sectionContainer ">
            <div className="title">
                <h2 className="text-center">VENTAJAS</h2>
            </div>
            <hr className="hra"/>
            <div className="maxWidth800 advantageContainer">                
                {advantageContent}
            </div>            
        </div>);

        return (
            <div >
                {/*imagen de cabecera*/}
                {header_image}
                {/*ultimos proyectos*/}
                {carouselData}                
                {/*servicios*/}
                {services}
                {/*quienes somos*/}
                {who_we_are}
                {text}
                {/*demostracion video*/}
                {video}
                {/*ventajas*/}
                {advantage}


                {/*sketchfab
                <div className="sectionContainer">
                    <div className="title">
                        <h2 className="text-center">Modelos 3D</h2>
                    </div>
                    <hr className="hra"/>
                    <div className="sketchfab-embed-wrapper">
                        <iframe className="maxWidth100" width="640" height="480" src="https://sketchfab.com/models/bc8d9a9d26d44de799781513d084d5d1/embed" frameBorder="0" allowFullScreen></iframe>                        
                        <p className="style3">
                            <a href="https://sketchfab.com/models/bc8d9a9d26d44de799781513d084d5d1?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" className="style4">Casa Prefabricada2</a>
                            by <a href="https://sketchfab.com/galvan?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" className="style1">galvan</a>
                            on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" className="style2">Sketchfab</a>
                        </p>
                    </div>
                </div>*/}
                
            </div>
        );
    }
};
export default IndexComponent;