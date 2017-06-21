//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
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
        
        //console.log("Lemon= "+lemon);
        //var lemon = (this.state.estado == true) ? false : true;
        this.setState({
            [estado_a_cambiar.StateName]: event.target.checked
        });
        console.log("Se realizo un cambio"); 
        this.setState({value: event.target.value});       
    }
    cambiadordeurl(){//haga algo
        console.log("Se realizo un cambio en el select tag y la nueva variable es: "+this.state.value); 
        if(this.state.Elite == true && this.state.Familiar == true && this.state.Personal == true) {
            console.log("Selecciono : Elite, Familiar y Personal");
        }
        if(this.state.Elite == true && this.state.Familiar == true) {
            console.log("Selecciono : Elite y Familiar");
        }
        if(this.state.Elite == true && this.state.Personal == true) {
            console.log("Selecciono : Elite y Personal");
        }
        if(this.state.Familiar == true && this.state.Personal == true) {
            console.log("Selecciono : Familiar y Personal");
        }
        if(this.state.Elite == true) {
            console.log("Selecciono : Elite");
        }
        if(this.state.Familiar == true) {
            console.log("Selecciono : Familiar");
        }
        if(this.state.Personal == true) {
            console.log("Selecciono : Personal");
        }
        var conparse = JSON.parse(name);
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
    }
    render() {
        if(this.state.value != ''){
            this.cambiadordeurl();
            if(TableCreator != ''){
                return (
                    <div>
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
                );
            }
        }else{
            return (
                <div>
                    <form>
                        <input type="checkbox" checked={ this.state.Elite } value={this.state.Elite} onChange={this.handleChange}  name="Elite"/>Elite<br/>
                        <input type="checkbox" checked={ this.state.Familiar }  value={this.state.Familiar} onChange={this.handleChange} name="Familiar"/>Familiar<br/>
                        <input type="checkbox" checked={ this.state.Personal }  value={this.state.Personal} onChange={this.handleChange} name="Personal"/>Personal<br/>
                        <input type="checkbox" checked={ this.state.Todas }  value={this.state.Todas} onChange={this.handleChange} name="Todas"/>Todas<br/>
                    </form>
                </div>   
            );
        }        
    }
};
ReactDOM.render(<IndexComponent/>, document.getElementById('container'));