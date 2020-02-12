import React, { Component } from 'react';


class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            tipo: '',
            preco: ''
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);

    }


    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render() {
        const { nome, tipo, preco } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        
                        <input
                            className="validate"
                            placeholder="Nome"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        
                        <input
                            className="validate"
                            placeholder="Tipo"
                            id="tipo"
                            type="text"
                            name="tipo"
                            value={tipo}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        
                        <input
                            className="validate"
                            placeholder='Preço'
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>

                <button onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2#a5d6a7 green lighten-3" type="button">Salvar
                </button>
            </form>
        );
    }
}
export default Formulario