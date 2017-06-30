//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

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

class IndexComponent extends Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: casas
        };

        //declarador de funciones
        this.getCarouselData = this.getCarouselData.bind(this);
    }
    getCarouselData(){
        console.log("entro a getCarouselData "+this.state.value[0].baños);
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
            
            return(<div key={i} className={"item  "+active}>                            
                {/*<img src={"../public/images/"+this.state.value[i].img+".jpg"} className="img-circle image_carousel img-responsive" alt="Cinque Terre"/>
                
                <div className="carousel-caption">
                    <h3>Ultimos proyectos</h3>
                    <p>Plantas {this.state.value[i].pisos} <br/>Habitaciones {this.state.value[i].habitaciones}</p>
                </div>*/}
                <div className="col-xs-4 col-sm-4 col-md-5 col-lg-5">
                    <img src={"../public/images/"+this.state.value[i].img+".jpg"} className="img-circle image_carousel img-responsive pull-right" alt="Cinque Terre"/>
                </div>                
                <div className="col-xs-8 col-sm-8 col-md-7 col-lg-7">
                    <h3>Ultimos proyectos</h3>
                    <p>Plantas {this.state.value[i].pisos} <br/>Habitaciones {this.state.value[i].habitaciones}</p>
                </div>
            </div>);
        }.bind(this));

        return (<div id="myCarousel" className="carousel slide last_projects_height" data-ride="carousel">
                    {/*<!-- Indicators -->*/}
                    <ol className="carousel-indicators">
                        {lista}
                    </ol>

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
    render() {
        let carouselData = (this.state.value != null)? this.getCarouselData() : 'Error al optener datos';
        return (
            <div >
                {/*imagen de cabecera*/}
                <div className="marginTop">
                    <img src={"../public/images/header.jpg"} className="initialImage img-responsive" alt="Responsive image"/>
                </div>
                {/*ultimos proyectos*/}
                {carouselData}
                
            </div>   
        );
    }
};
export default IndexComponent;