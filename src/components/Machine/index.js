import React, { Component } from "react";
import "./styles.css";

export default class Machine extends Component {
    
    render(){

        return(

            <div className="machine-list">  
              <article className="maquinas">
                <h4>máquina:</h4>  
                <h2>{this.props.data.nome}</h2>
                <h4>meta:</h4>
                <strong>{this.props.data.meta}</strong>
                <h4>status:</h4>
                <strong>{this.props.data.status}</strong>
                <h4>velocidade:</h4>
                <strong>{this.props.data.velocidade}</strong>
              </article>  
            </div>
        ) 
    }
}