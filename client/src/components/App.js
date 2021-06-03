import React from "react";
import '../styles/style_formulaire.css'
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };

      render() {
        return (
          <div className="App">
            <body>
              <main>
              <h1>MONOPOLY</h1>
		            <form className="load-game" action="#">
                  <span>Encienne partie</span><br/>
                  <label htmlFor="id_game">Entrer l'id de la partie : </label>
                  <input type="text" name="id_game" id="id_game" required="required"/>
                  <br/>
                  <label htmlFor="id_game">votre pseudo : </label>
                  <input type="text" name="id_game" id="id_game" required="required" placeholder="votre pseudo"/>
                  <br/>
                  <button  type="submit required">Jouer</button>
		            </form>
              </main>

              <hr/>
              <form className="new-game" action="#">
                  <label htmlFor="name_player">nouvelle partie :</label>
                    <br/>
                  <input type="text" name="name_player" id="name_player" placeholder="votre pseudo" required="required"/>
                    <br/>
                  <select name="color" id="color-p" required="required">
                    <option value="">--choisi une couleur</option>
                    <option value="red">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="red"></circle>rouge
                      </svg>
                    </option>
                    <option value="blue">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="blue"></circle>bleu
                      </svg>
                      </option>
                    <option value="green">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="green"></circle>vert
                      </svg>
                    </option>
                    <option value="orange">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="orange"></circle>orange
                      </svg>
                    </option>
                    <option value="white">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="white"></circle>blanc
                      </svg>
                    </option>
                    <option value="yellow">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="yellow"></circle>jaune
                      </svg>
                    </option>
                    <option value="brown">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="brown"></circle>marron
                      </svg>

                    </option>
                    <option value="pink">
                      <svg  width="12" height="12">
                        <circle cx="6" cy="6" r="6" fill="pink"></circle>rose
                      </svg>
                    </option>
                  </select>
                    <br/>
                  <button type="submit">Commencer</button>
		            </form>
            </body>
          </div>
        );
      }
}