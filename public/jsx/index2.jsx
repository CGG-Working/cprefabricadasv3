//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import HeadComponent from './head';
var TableCreator = '';
class IndexComponent extends React.Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: '',
            Elite: false,
            Familiar: false,
            Personal: false,
            Todas: false
        };

        //declarador de funciones
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {//el cambio no lo hace de inmediato
        var estado_a_cambiar = {};
        estado_a_cambiar = {
            StateName:event.target.name
        };
        this.setState({
            [estado_a_cambiar.StateName]: event.target.checked,
            value: event.target.value
        });
         
    }
    cambiadordeurl(){//haga algo
        var conparse = JSON.parse(name);
        var estados_activos = [""];//vacia el array cada ves que se hace render
        if(this.state.Todas == true){            
            estados_activos.push("Todas");
            TableCreator = conparse.map(function(item,i){
                        return  <div className="col-md-6" key={i}>
                                    <img src={"../public/images/"+conparse[i].imageName+".jpg"} alt="Smiley face" height="200" width="200"/>                 
                                    <div>Categoria: {conparse[i].Categoria}</div>
                                    <div># habitaciones: {conparse[i].No_habitaciones}</div>
                                    <div># Baños: {conparse[i].No_baños}</div>
                                    <div># Pisos: {conparse[i].No_pisos}</div>
                                    <div>Tamaño (m): {conparse[i].Tamaño}</div>
                                </div>
            }.bind(this));
        }else{            
            if(this.state.Elite == true){
                estados_activos.push("Elite");
            }
            if(this.state.Personal == true){
                estados_activos.push("Personal");
            }
            if(this.state.Familiar == true){
                estados_activos.push("Familiar");
            }
            console.log(estados_activos);
            TableCreator = conparse.map(function(item,i){
                for(var j = 0; j < estados_activos.length; j++){
                    if(conparse[i].Categoria == estados_activos[j]){
                        return  <div className="col-md-6" key={i}>
                                    <img src={"../public/images/"+conparse[i].imageName+".jpg"} alt="Smiley face" height="200" width="200"/>                 
                                    <div>Categoria: {conparse[i].Categoria}</div>
                                    <div># habitaciones: {conparse[i].No_habitaciones}</div>
                                    <div># Baños: {conparse[i].No_baños}</div>
                                    <div># Pisos: {conparse[i].No_pisos}</div>
                                    <div>Tamaño (m): {conparse[i].Tamaño}</div>
                                </div>
                    }
                }
            }.bind(this));
        }
    }
    renderizador(){}
    render() {
        if(this.state.value != ''){
            this.cambiadordeurl();
            if(TableCreator != ''){
                return (
                    <div>
                        <HeadComponent/>
                        <div className="Body_Top_Limit">
                            <div className="Background_Image">
                                <img src="../public/images/IndexImage.jpg" alt="Fondo" width="100%" height="100%"/>
                            </div>
                            <h3>Por favor selecciona alguna categoria index2</h3>
                            <form>
                                <input type="checkbox" checked={ this.state.Elite } value={this.state.Elite} onChange={this.handleChange}  name="Elite"/>Elite<br/>
                                <input type="checkbox" checked={ this.state.Familiar }  value={this.state.Familiar} onChange={this.handleChange} name="Familiar"/>Familiar<br/>
                                <input type="checkbox" checked={ this.state.Personal }  value={this.state.Personal} onChange={this.handleChange} name="Personal"/>Personal<br/>
                                <input type="checkbox" checked={ this.state.Todas }  value={this.state.Todas} onChange={this.handleChange} name="Todas"/>Todas<br/>
                            </form>
                            <div  className="row">
                                {TableCreator}
                            </div>
                        </div>
                    </div>
                );
            }
        }else{
            return (
                <div>
                    
                    <HeadComponent/>
                    <div className="Body_Top_Limit">
                        <h3>Por favor selecciona alguna categoria index2</h3>
                        <form>
                            <input type="checkbox" checked={ this.state.Elite } value={this.state.Elite} onChange={this.handleChange}  name="Elite"/>Elite<br/>
                            <input type="checkbox" checked={ this.state.Familiar }  value={this.state.Familiar} onChange={this.handleChange} name="Familiar"/>Familiar<br/>
                            <input type="checkbox" checked={ this.state.Personal }  value={this.state.Personal} onChange={this.handleChange} name="Personal"/>Personal<br/>
                            <input type="checkbox" checked={ this.state.Todas }  value={this.state.Todas} onChange={this.handleChange} name="Todas"/>Todas<br/>
                        </form>
                    </div>
                </div>   
            );
        }        
    }
};
ReactDOM.render(<IndexComponent/>, document.getElementById('container'));