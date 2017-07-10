//var React = require('react');
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
var conparse = JSON.parse(name);
var TableCreator = '';
let popup = '';
let estados_activos = [""];
let casas_activas = [];
class HouseComponent extends React.Component{
    constructor(props) {
        super(props);
        //declarador de estados
        this.state = {
            value: '',
            Elite: false,
            Familiar: false,
            Personal: false,
            Todas: true,
            showPopUp: false,            
            TYPE: '',
            item:[]
        };

        //declarador de funciones
        this.handleChange = this.handleChange.bind(this);
        this.OpenGalery = this.OpenGalery.bind(this);
        this.ChangeGalery = this.ChangeGalery.bind(this);
        this.closeWhoWeAre = this.closeWhoWeAre.bind(this);
        this.PopUpMaker = this.PopUpMaker.bind(this);
        this.PopUpContentMaker = this.PopUpContentMaker.bind(this);
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
    OpenGalery(Id, Type){
        for(let t = 0; t < casas_activas.length; t++){
            
            if(casas_activas[t].ID == Id){
                if(Type == "3D" && casas_activas[t].sketchfab_embed != null){
                    if(this.state.showPopUp == false)
                    this.setState({
                        showPopUp:true,
                        item:casas_activas[t],
                        TYPE: Type
                    });
                }
                if(Type == "Gallery"){
                    if(this.state.showPopUp == false)
                    this.setState({
                        showPopUp:true,
                        item:casas_activas[t],
                        TYPE: Type
                    });
                }
            }
        }            
    }
    ChangeGalery(BackOrNext){
        //popup='';
        for(let t = 0; t < casas_activas.length; t++){
            if(casas_activas[t].ID == this.state.item.ID){
                if(BackOrNext == "Right"){
                    if(t == (casas_activas.length)-1){
                        console.log("No existen mas casas hacia la derecha");
                    }else{
                        this.setState({
                            item:casas_activas[t+1],
                            TYPE: this.state.TYPE
                        });
                    }
                }else{
                    if(t == 0){
                        console.log("No existen mas casas hacia la izquierda");
                    }else{
                        this.setState({
                            item:casas_activas[t-1],
                            TYPE: this.state.TYPE
                        });
                    }
                }
            }
        } 
    }
    PopUpMaker(){
        let PopUpContent = this.PopUpContentMaker();
        let showPopUp = (this.state.showPopUp == true)? 'showElement':'hideElement';
        popup = (
            <div>
                <div className={showPopUp+' Popup_Background'} onClick={this.closeWhoWeAre}></div>
                <div className={showPopUp+' PopUp'}>
                    <div className="POPUP_TOTAL_CONTENT">
                        <div className="text-right Remove_Span">
                            <span className="glyphicon glyphicon-remove  verticalCenterSpan" aria-hidden="true" onClick={this.closeWhoWeAre}></span>
                        </div>
                        {PopUpContent}
                    </div>
                </div>
            </div>
        );
    }
    PopUpContentMaker(){
        if(this.state.TYPE=="Gallery"){
            
            return  <div>
                        <div className="container Carrousel_Container img-responsive">
                            <div id="myCarousel" className="carousel slide width_height_auto" data-ride="carousel">
                                
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner width_height_auto">
                                    <div className="item active width_height_auto">
                                        <img src={"../public/images/"+this.state.item.imageName+".jpg"} alt="Los Angeles" className="height_100 Carrousel_Image img-responsive"/>
                                    </div>
                                    <div className="item width_height_auto">
                                        <img src={"../public/images/Tamaño1.jpg"} alt="Los Angeles" className="height_100 Carrousel_Image img-responsive"/>
                                    </div>
                                    <div className="item width_height_auto">
                                        <img src={"../public/images/Tamaño2.jpg"} alt="Los Angeles" className="height_100 Carrousel_Image img-responsive"/>
                                    </div>
                                </div>
                                
                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="row House_Content_POPUP Shadow_Box">
                            <h3>Informaciòn</h3>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div><span className="Sub_Title">Categoria</span>: {this.state.item.Categoria}</div>
                                <div><span className="Sub_Title"># Habitaciones</span>: {this.state.item.No_habitaciones}</div>
                                <div><span className="Sub_Title"># Baños</span>: {this.state.item.No_baños}</div>                                
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div><span className="Sub_Title"># Pisos</span>: {this.state.item.No_pisos}</div>
                                <div><span className="Sub_Title">Tamaño (m)</span>: {this.state.item.Tamaño}</div>
                            </div>
                        </div>
                        <div className="row House_Content_POPUP paddin_top_30">
                            
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-chevron-left  verticalCenterSpan" aria-hidden="true" onClick={this.ChangeGalery.bind(this, "Left")}></span>                                
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <h4>Next House</h4>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-chevron-right  verticalCenterSpan" aria-hidden="true" onClick={this.ChangeGalery.bind(this, "Right")}></span>
                            </div>
                        </div>
                    </div>;
        }
        if(this.state.TYPE=="3D")
        {
            return  <div>
                        <div className="title">
                            <h2 className="text-center">Modelo 3D</h2>
                        </div>
                        <div className="sketchfab-embed-wrapper">
                            <iframe className="maxWidth100" width="640" height="480" src={this.state.item.sketchfab_embed} frameBorder="0" allowFullScreen></iframe>                        
                            <p className="style3">
                                <a href={this.state.item.sketchfab_web} target="_blank" className="style4">Casa Prefabricada2 </a>
                                by <a href="https://sketchfab.com/galvan?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" className="style1">galvan </a>
                                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" className="style2">Sketchfab</a>
                            </p>
                        </div>
                    </div>;
            }
    }
    Buscador(){//verifica que selecciono en la busqueda y procede a mostrar el resultado de dicha busqueda
        estados_activos = [""];//vacia el array cada ves que se hace render
        if(this.state.Todas == true){   
            casas_activas=[];         
            estados_activos.push("Todas");
            TableCreator = conparse.map(function(item,i){
                let Option3D = "LinkOff";
                if(conparse[i].sketchfab_embed != null){
                    Option3D = "Link";
                }
                        casas_activas.push(item);
                        return  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 House_Content" key={i}>
                                    <div className="House_Inferior_Content">
                                        <img className="House_Image img-responsive" src={"../public/images/"+conparse[i].imageName+".jpg"} alt="Smiley face"/>                 
                                        <div  className="row Padding_Top">
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <div><span className="Sub_Title">Categoria</span>: {conparse[i].Categoria}</div>
                                                <div><span className="Sub_Title"># Habitaciones</span>: {conparse[i].No_habitaciones}</div>
                                                <div><span className="Sub_Title"># Baños</span>: {conparse[i].No_baños}</div>
                                                <div><span className="Sub_Title"># Pisos</span>: {conparse[i].No_pisos}</div>
                                                <div><span className="Sub_Title">Tamaño (m)</span>: {conparse[i].Tamaño}</div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 House_Info">
                                                <div className="Sub_Title">OTRAS OPCIONES:</div>
                                                <div className="Link" onClick={this.OpenGalery.bind(this, conparse[i].ID, "Gallery")} name="Galeria">Galeria de imagenes</div>
                                                <div className={Option3D} onClick={this.OpenGalery.bind(this, conparse[i].ID, "3D")}>Modelo 3D</div>
                                                <div className="LinkOff">Recorrido 360º</div>
                                                <div className="LinkOff">Recorrido cardboard</div>
                                            </div>
                                        </div>
                                    </div>
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
            if(estados_activos.length <= 1){
                console.log("No seleccionaste");
                TableCreator = new function(){
                    return(
                        <div>
                            <img className="House_Image img-responsive" src="../public/images/Arrow_Up.png"/>
                            <h2 className="Text_Center">¡Por favor selecciona una categoria!</h2>                            
                        </div>
                    );
                }
            }else{
                casas_activas=[];
                console.log(estados_activos);
                TableCreator = conparse.map(function(item,i){
                    for(var j = 0; j < estados_activos.length; j++){
                        if(conparse[i].Categoria == estados_activos[j]){
                            casas_activas.push(item);
                            let Option3D = "LinkOff";
                            if(conparse[i].sketchfab_embed != null){
                                Option3D = "Link";
                            }
                            return  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 House_Content" key={i}>
                                        <div className="House_Inferior_Content">
                                            <img className="House_Image img-responsive" src={"../public/images/"+conparse[i].imageName+".jpg"} alt="Smiley face"/>                 
                                            <div  className="row Padding_Top">
                                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div><span className="Sub_Title">Categoria</span>: {conparse[i].Categoria}</div>
                                                    <div><span className="Sub_Title"># Habitaciones</span>: {conparse[i].No_habitaciones}</div>
                                                    <div><span className="Sub_Title"># Baños</span>: {conparse[i].No_baños}</div>
                                                    <div><span className="Sub_Title"># Pisos</span>: {conparse[i].No_pisos}</div>
                                                    <div><span className="Sub_Title">Tamaño (m)</span>: {conparse[i].Tamaño}</div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 House_Info">
                                                <div className="Sub_Title">OTRAS OPCIONES:</div>
                                                <div className="Link" onClick={this.OpenGalery.bind(this, conparse[i].ID, "Gallery")} name="Galeria">Galeria de imagenes</div>
                                                <div className={Option3D} onClick={this.OpenGalery.bind(this, conparse[i].ID, "3D")}>Modelo 3D</div>
                                                <div className="LinkOff">Recorrido 360º</div>
                                                <div className="LinkOff">Recorrido cardboard</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        }
                    }
                }.bind(this));
            }
        }
    }
    closeWhoWeAre(data){
        if(this.state.showPopUp == true) {
            this.setState({showPopUp:false});
        }
    }
    render() {
        this.Buscador();
        //aca iva el popup
        popup = "";
        if(this.state.TYPE!=''){
            this.PopUpMaker();
        }
        return (
            <div>
                <div className="Body_Top_Limit">
                    <h3 className="Title">Repertorio de nuestras casas prefabricadas</h3>
                    <hr/>
                    <h3 className="Note_Correption">Categorias:</h3>
                    <form>
                        <label className="Hover_Mouse House_Menu"><input type="checkbox" checked={ this.state.Elite } value={this.state.Elite} onChange={this.handleChange}  name="Elite"/>Elite<br/></label>
                        <label className="Hover_Mouse House_Menu"><input type="checkbox" checked={ this.state.Familiar }  value={this.state.Familiar} onChange={this.handleChange} name="Familiar"/>Familiar<br/></label>
                        <label className="Hover_Mouse House_Menu"><input type="checkbox" checked={ this.state.Personal }  value={this.state.Personal} onChange={this.handleChange} name="Personal"/>Personal<br/></label>
                        <label className="Hover_Mouse House_Menu"><input type="checkbox" checked={ this.state.Todas }  value={this.state.Todas} onChange={this.handleChange} name="Todas"/>Todas<br/></label>
                    </form>
                    <hr/>
                    <div  className="row">
                        {TableCreator}
                    </div>
                </div>
                {popup}
            </div>   
        );        
    }
};
export default HouseComponent;