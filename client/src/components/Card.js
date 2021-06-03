import React from "react";
import '../styles/style.css';
import '../styles/styleNAV.css';


export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };

      render() {
        return (
          <div className="Card">
             	<body>
		<div class="sidebarre">
			<div id="mySidenav" class="sidenav">
  				<a href="index.html">New Game</a>
  				<a href="index.html">Load Game</a>
  				<a href="rate_us.html">Rate The Work</a>
			</div>
			<span style={ {"font-size":"30px","cursor":"pointer" }} onclick="openNav()">&#9776;Menu</span>
		</div>
			 <div class="tableau">
				<div class="board">
					<div class="centre">
						<div class="communaute-case">
							<h2 class="label">caisse de Communauté</h2>
							<div class="case"><i class="dessin dessin-chest"><img alt="img" src="image/chest.png" /></i></div>
						</div>
						<h1 class="titre">MONOPOLY</h1>
						<div class="chance-case">
							<h2 class="label">Chance</h2>
							<div class="case"><i class="dessin dessin-qh"><img alt="img" src="image/fqa_blue.png" /></i>
						</div>
						</div>
						<div class="dice" title="role dice">
							<div class="dice1"><img alt="img" src="image/dice1.png" /></div>
							<div class="dice2"><img alt="img" src="image/dice6.png" /></div>
						</div>
						<div class="game-log-consol"></div>
					</div>
					<div class="espace coin allez">
						<div class="contient">
							<div class="instructions">Recevez 200$ chaque fois que vous passez ici</div>
							<div class="allez-mot">allez</div>
						</div>
						<div class="fleche-gauche"><img alt="img" src="image/fleche.png" /></div>
					</div>
					<div class="ligne ligne-horizontal ligne-bas">
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-blue"></div>
								<div class="nom">avenue de la république</div>
								<div class="prix">120$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-blue"></div>
								<div class="nom">rue de courcelles</div>
								<div class="prix">100$</div>
							</div>
						</div>
						<div class="espace chance">
							<div class="contient">
								<div class="nom">chance</div>
								<i class="dessin dessin-question-marque"><img alt="img" src="image/fqa_pink.png" /></i>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-blue"></div>
								<div class="nom">rue de vaugirard</div>
								<div class="prix">100$</div>
							</div>
						</div>
						<div class="espace gare">
							<div class="contient">
								<div class="nom nom-long">gare montparnasse</div>
								<i class="dessin train-dessin"><img alt="img" src="image/train.png" /></i>
								<div class="prix">200$</div>
							</div>
						</div>
						<div class="espace tax tax-debut">
							<div class="contient">
								<div class="nom nom-long">impôts sur le revenu</div>
								<div class="dessin diamond"></div>
								<div class="instructions">payer 200$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-brown"></div>
								<div class="nom">rue lecourbe</div>
								<div class="prix">60$</div>
							</div>
						</div>
						<div class="espace communaute-caisse">
							<div class="contient">
								<div class="nom nom-long">caisse de communauté</div>
								<i class="dessin dessin-carre"><img alt="img" src="image/chest.png" /></i>
								<div class="instructions">lisez les instructions</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-brown"></div>
								<div class="nom nom-long">boulevard de belleville</div>
								<div class="prix">60$</div>
							</div>
						</div>
					</div>

					<div class="espace coin prison">
						<div class="je">simple</div>
						<div class="dessin">
							<div class="contient">
								<dir class="nom">en</dir>
								<div class="fenetre">
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
									<i class="prisonnier"><img alt="img" src="image/emoji.png" /></i>
								</div>
								<div class="nom">prison</div>
							</div>
						</div>
						<div class="seulement">visite</div>
					</div>
					<div class="ligne ligne-vertical ligne-gauche">

						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-orange"></div>
								<div class="nom">place pigalle</div>
								<div class="prix">200$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-orange"></div>
								<div class="nom nom-long">boulevard saint-michel</div>
								<div class="prix">180$</div>
							</div>
						</div>
						<div class="espace communaute-caisse">
							<div class="contient">
								<div class="nom nom-long">caisse de communauté</div>
								<i class="dessin dessin-carre"><img alt="img" src="image/chest.png" /></i>
								<div class="instructions">lisez les instructions</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-orange"></div>
								<div class="nom">Avenue mozart</div>
								<div class="prix">180$</div>
							</div>
						</div>
						<div class="espace gare">
							<div class="contient">
								<div class="nom nom-long">gare de lyon</div>
								<i class="dessin train-dessin"><img alt="img" src="image/train.png" /></i>
								<div class="prix">200$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-viole"></div>
								<div class="nom">rue de paradis</div>
								<div class="prix">160$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-viole"></div>
								<div class="nom">avenue de neuilly</div>
								<div class="prix">140$</div>
							</div>
						</div>
						<div class="espace utilite electric">
							<div class="contient">
								<div class="nom nom-long">compagnie d'éléctricité</div>
								<i class="dessin dessin-lampe"><img alt="img" src="image/light.png" /></i>
								<div class="prix">150$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-viole"></div>
								<div class="nom nom-long">boulevard de la villette</div>
								<div class="prix">140$</div>
							</div>
						</div>
					</div>

					<div class="espace coin parking">
						<div class="contient">
							<div class="nom">parking</div>
							<i class="dessin dessin-voiture"><img alt="img" src="image/car.png" /></i>
							<dir class="nom">gratuit</dir>
						</div>
					</div>

					
					<div class="ligne ligne-horizontal ligne-haut">

						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-rouge"></div>
								<div class="nom">avenue matignon</div>
								<div class="prix">220$</div>
							</div>
						</div>
						<div class="espace chance">
							<div class="contient">
								<div class="nom">chance</div>
								<i class="dessin dessin-question-marque bleu"><img alt="img" src="image/fqa_blue.png" /></i>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-rouge"></div>
								<div class="nom nom-long">boulevard malesherbes</div>
								<div class="prix">220$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-rouge"></div>
								<div class="nom nom-long">avenue henri-martin</div>
								<div class="prix">240$</div>
							</div>
						</div>
						<div class="espace gare">
							<div class="contient">
								<div class="nom nom-long">gare du nord</div>
								<i class="dessin train-dessin"><img alt="img" src="image/train.png" /></i>
								<div class="prix">200$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-jaune"></div>
								<div class="nom nom-long">faubourg saint-honoré</div>
								<div class="prix">260$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-jaune"></div>
								<div class="nom nom-long">place de la bource</div>
								<div class="prix">260$</div>
							</div>
						</div>
						<div class="espace utilite eau">
							<div class="contient">
								<div class="nom nom-long">compagnie des eaux</div>
								<i class="dessin goute-eau"><img alt="img" src="image/aqua.png" /></i>
								<div class="prix">150$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-jaune"></div>
								<div class="nom">rue la fayette</div>
								<div class="prix">280$</div>
							</div>
						</div>
					</div>

					<div class="espace coin allez-en-prison">
						<div class="contient">
							<div class="nom">allez en</div>
							<i class="dessin dessin-marteau"><img alt="img" src="image/police.png" /></i>
							<dir class="nom">prison</dir>
						</div>
					</div>
					<div class="ligne ligne-vertical ligne-droite">

						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-vert"></div>
								<div class="nom">avenue de breteuil</div>
								<div class="prix">300$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-vert"></div>
								<div class="nom">avenue foch</div>
								<div class="prix">300$</div>
							</div>
						</div>
						<div class="espace communaute-caisse">
							<div class="contient">
								<div class="nom nom-long">caisse de communauté</div>
								<i class="dessin dessin-carre"><img alt="img" src="image/chest.png" /></i>
								<div class="instructions">lisez les instructions</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-vert"></div>
								<div class="nom nom-long">boulevard des capucines</div>
								<div class="prix">320$</div>
							</div>
						</div>
						<div class="espace gare">
							<div class="contient">
								<div class="nom nom-long">gare saint-lazare</div>
								<i class="dessin train-dessin"><img alt="img" src="image/train.png" /></i>
								<div class="prix">200$</div>
							</div>
						</div>
						<div class="espace chance">
							<div class="contient">
								<div class="nom">chance</div>
								<i class="dessin dessin-question-marque"><img alt="img" src="image/fqa_orange.png" /></i>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-bleuf"></div>
								<div class="nom nom-long">avenue des champs-élysées</div>
								<div class="prix">350$</div>
							</div>
						</div>
						<div class="espace tax tax-de-luxe">
							<div class="contient">
								<div class="nom nom-long">taxe de luxe</div>
								<i class="dessin diamond-luxe"></i>
								<div class="prix">payez 100$</div>
							</div>
						</div>
						<div class="espace proprieter">
							<div class="contient">
								<div class="bar-colore ligne-bleuf"></div>
								<div class="nom">rue de la paix</div>
								<div class="prix">400$</div>
							</div>
						</div>

					</div>

				</div>
			</div>
			<div class="player-monopoly"> </div>
			<template class="player-monopoly-dynamic">
				<div class="player-panel" data-ui="player">
					<span class="player-color"></span>
					<span class="player-name"></span>
					<span class="playe-money"></span>
					<div class="player-properties"></div>
				</div>
			</template>
	</body>
          </div>
        );
      }
}