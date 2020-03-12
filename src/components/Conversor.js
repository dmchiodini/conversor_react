import React, { Component } from "react";
import './Conversor.css';

export default class Conversor extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
            moedaA: "",
            moedaB: "",
        }

        this.converter = this.converter.bind(this);
    }

    converter(){

        let de_para = `${this.state.moedaA.substring(3,0)}_${this.state.moedaB.substring(3,0)}`;
        let url = `http://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${de_para}&compact=y`

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para].val;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2);
            this.setState({moedaB_valor})
        })
    }

    renderListaMoedas(moedas) {
        return moedas.map(moeda => <option>{moeda}</option>);
    }

    render() {
        return (
                <div className="conversor">
                    <h2 className="label">Selecione a Moeda</h2>
                    <div className="moedas">
                        <div className="de">
                            <h5>De</h5>
                            <select onClick={(event)=>{this.setState({moedaA:event.target.value})}}>{this.renderListaMoedas(this.props.moedaA)}</select>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">{this.state.moedaA.substring(6, 0)}</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Insira o valor" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}} aria-label="Usuário" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        
                        <div className="para">
                            <h5>Para</h5> 
                            <select onClick={(event)=>{this.setState({moedaB:event.target.value})}}>{this.renderListaMoedas(this.props.moedaB)}</select>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">{this.state.moedaB.substring(6, 0)}</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.moedaB_valor} aria-label="Usuário" aria-describedby="basic-addon1" />
                            </div>
                        </div>                              
                    </div>

                        <div nameClass="botao">
                            <input className="btn btn-primary btn-lg" type="button" value="Converter" onClick={this.converter} />
                        </div> 
                </div>
            )
        }
}