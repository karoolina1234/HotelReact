import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './tabela';
import Formulario from './Formulario';
import Header from './Header';


class App extends Component {

  state = {
    quartos: [
      {
        nome: 'Quarto de luxo',
        tipo: 'Suite',
        preco: '1000'
      },
      {
        nome: 'Quarto comum',
        tipo: 'comum',
        preco: '99'
      },
      {
        nome: 'Quarto de pobre',
        tipo: 'pobre',
        preco: '150'
      },

    ],
  }

  removeQuarto = index => {

    const { quartos: quartos } = this.state;

    this.setState({
      quartos: quartos.filter((quarto, posAtual) => {
        return posAtual !== index;
      }),
    })

  }

  escutadorDeSubmit = quarto => {
    this.setState({ quartos: [...this.state.quartos, quarto] });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela quartos={this.state.quartos} removeQuarto={this.removeQuarto} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
