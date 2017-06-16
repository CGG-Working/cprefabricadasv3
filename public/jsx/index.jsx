//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
class IndexComponent extends React.Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: ''
        };

        //declarador de funciones
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {//el cambio no lo hace de inmediato
        this.setState({value: event.target.value});
        console.log("Se realizo un cambio en el select tag y la nueva variable es: "+this.state.value);        
    }
    cambiadordeurl(){
        window.location.href = "http://localhost:8080/index?FirstName="+this.state.value;
    }
    render() {
        if(this.state.value != ''){
            this.cambiadordeurl();
        }        
        //var str = "The ran in SPAIN stays manly in the plan";
        if(name.match(/[^a-zA-Z0-9 /s]+/)){
            console.log("Encontro simbolo(s)");
            var conparse = JSON.parse(name);
            var TableCreator = conparse.map(function(item,i){
                return  <tr key={i}>
                    <td>{conparse[i].house}</td>
                    <td>{conparse[i].address}</td>
                    <td>{conparse[i].email}</td>
                    </tr>
            }.bind(this));
            return (
                <div>
                    <h1>this was built using react</h1>  
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=" ">Eilja</option>
                        <option value="buitrera">buitrera</option>
                        <option value="montaña">montaña</option>
                    </select>
                    <table className="table">
                        <thead>
                            <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableCreator}
                        </tbody>
                    </table>
                </div>   
            );
        }else{
            console.log("no encontro simbolos");
            return (
                <div>
                    <h1>this was built using react</h1>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=" ">Eilja</option>
                        <option value="buitrera">buitrera</option>
                        <option value="montaña">montaña</option>
                    </select>
                </div>   
            );
        }
    }
};
ReactDOM.render(<IndexComponent/>, document.getElementById('container'));