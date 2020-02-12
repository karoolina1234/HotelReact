import React, { Component } from 'react';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Nome do quarto</th>
            <th>Tipo</th>
            <th>Preco</th>
            <th>Remover</th>
          </tr>
        </thead>
    );
}

const TableBody = props =>{
    
    const linhas = props.quartos.map((linha, index)=>{
       return( 
       <tr key={index}>
            <td>{linha.nome}</td>
            <td>{linha.tipo}</td>
            <td>{linha.preco}</td>
            <td><button onClick={ () => props.removeQuarto(index)} className="waves-effect waves-light #a5d6a7 green lighten-3 btn">Remover</button></td>
        </tr>
       );
    });

    return(
        <tbody>
          {linhas}
        </tbody>
    );
}


class Tabela extends Component{
    

    render(){
        const { quartos, removeQuarto} = this.props;
        
        return(
        <table className="centered highlight">
        <TableHead />
        <TableBody quartos={quartos} removeQuarto = { removeQuarto }/>
        </table>
        );
    }

}
export default Tabela;