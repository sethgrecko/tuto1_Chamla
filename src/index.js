import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
/*
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/
class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "gaetan Berchtold" },
      { id: 2, nom: "gaetan Ber 2" },
      { id: 3, nom: "gaetan 3" }
    ],
    compteur: 0
  };

  handleClick = () => {
    const clientsDuplicated = this.state.clients.slice();
    clientsDuplicated.push({ id: 4, nom: "Popof duchmol" });
    console.log(clientsDuplicated);

    this.setState({ clients: clientsDuplicated });
  };

  handleClick2 = () => {
    const clientsDuplicated = this.state.clients.slice();
    clientsDuplicated.pop();
    console.log(clientsDuplicated);

    this.setState({ clients: clientsDuplicated });
  };

  //Methode render pour le rendu dans la vue
  render() {
    // liste des variables simples
    const title = "liste des clients";
    const subtitle = <h2> listes de client</h2>;

    // Variable recupérant le state defini plus haut
    //version flechée
    const list = this.state.clients.map(objet => (
      <li>
        {objet.nom} <button>X</button>
      </li>
    ));
    // ou comme à l'origine
    /*const list = this.state.clients.map(function(objet)
      {
        return <li>{objet.nom} <button>X</button></li>
      }
    )
    */

    //rendu
    return (
      <div>
        <h1>{title}</h1>
        Compteur: {this.state.compteur}
        <br />
        <br />
        <button onClick={this.handleClick}>Incrémenter le compteur</button>
        <button onClick={this.handleClick2}>Décrémenter le compteur</button>
        {subtitle}
        {list}
        <br />
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
