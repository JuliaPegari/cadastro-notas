import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = { 
      notas:novoArrayNotas
    }
    this.setState(novoEstado) //Faz com o que os cardes apareçam dinamicamente na tela
  }

  deletarNota(index){
    let arrayNotas  = this.state.notas //Pegando o array com as notas
    arrayNotas.splice(index,1) //Deletar a nota
    this.setState({notas:arrayNotas})
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas deletarNota = {this.deletarNota.bind(this)} notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;