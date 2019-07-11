import React, { Component } from "react";

import Machine from '../../components/Machine';

export default class Main extends Component {
    
    state = {
        machines: [],
    }

    componentDidMount(){
        this.loadMachine();
    }

    loadMachine = () => {
        const response = [
            {nome: 'Maquina 1', status: 'em funcionamento', meta: '2', velocidade: '0,5m/s'},
            {nome: 'Maquina 2', status: 'em funcionamento', meta: '3', velocidade: '0,6 m/s'},
            {nome: 'Maquina 3', status: 'em funcionamento', meta: '4', velocidade: '0,8 m/s'},
            {nome: 'Maquina 4', status: 'em funcionamento', meta: '6', velocidade: '0,75 m/s'},
        ]

        this.setState({ machines : response})
        console.log(response)
    };
    
    render(){
        return (
            <div  className="machine-list">
                {this.state.machines.map (item => (
                    <Machine key={item.meta} data={item}/>
                ))}
            </div>
        )
    }
}