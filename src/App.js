import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[],
      categorias:[]
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

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {
      ...this.state,
      categorias: novoArrayCategorias
    };
    this.setState(novoEstado);
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
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>
        <ListaDeNotas deletarNota = {this.deletarNota.bind(this)} notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

export default App;