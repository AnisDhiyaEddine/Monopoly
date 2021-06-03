# Monopoly

-------
## Groupe 
-------

<p>Ce projet est un jeu de société multi-joueures enligne qui supporte le jeu en temps réel et la garde de l'état des parties, il est fait en Javascript (React, Node, MonogoDB, Express, Socket.io)</p>

- ### la répartition des rôles
  <p>Pour répartir les taches on a décomposé le projet en plusieurs composants séparé chaqu'un développe sa partie séparement des autres après on a fait un travail d'intégration</p>
    <p>Kamélia TERKMANI: Conception de la logique du jeu tout en suivant les règles du monopoly, pour vérifier sa partie du travail </p>

  ```bash
  git clone https://github.com/AnisDhiyaEddine/Monopoly.git
  cd client/src
  cat logique.js
  ```
    <p>Lamine CHELAGHA: Intégration de la logique du Kamélia et le code d'Ismaine dans des composants React, plus les intéractions avec le backend. </p>

  ```bash
  git clone https://github.com/AnisDhiyaEddine/Monopoly.git
  cd client/src
  ```
    <p>Ismaine MESSAOUD: Création des maquettes HTML5/CSS3 pour le projet </p>

  ```bash
  # le code de Ismaine est intégré dans celui de Lamine
  git clone https://github.com/AnisDhiyaEddine/Monopoly.git
  cd client/src
  ```
    <p>Anisdhiyaeddine Boudiaf: Conception du serveur express "REST-API" qui supporte le temps réel, création des modèles de base de données et la structure générale du projet. </p>

  ```bash
  git clone https://github.com/AnisDhiyaEddine/Monopoly.git
  cd server
  ```
- ### les difficultés rencontrées par le groupe
    - Des difficultés d’orientation
    - Des problèmes pour identifier toutes les actions à mener
    - Le manque de temps

- ### les solutions trouvées
    - Des difficultés d’orientation: La lecture des articles et la recherche dans le web pour bien s'orienter
    - Des problèmes pour identifier toutes les actions à mener: séparation des taches et chaqu'un essaye de créer son propre liste TODO.
  
-------
## Individuel
-------
- ### Kamélia TERKMANI
    * Taches:
        - Diagramme des classes et définition de chaque classe avec ses attributs et méthodes.
        - Implémentation des méthodes en Javascript.
    * Difficultés: 
        - Apprentissage du javascript en une dizaine de jours afin de faire la conception et permettre au membre de l'équipe d'avancer sur le projet.
    * Réflexions: 
        - mettre les types des cartes comme énumération (chance, caisse communauté et sortie prison).
redefinition de calculer loyer dans chaque classe (gare, compagnie et terrain) au lieu de faire trois methodes dans la classe monopoly.
- ### Ismaine MESSAOUD
    * Réalisation:
        - Une UI constitué d’une page qui contient le plateau de jeu , d’une page pour débuter une nouvelle partie ou de charger une partie si elle est existante et pour comme tout jeu une page (en plus)  pour nous communiquer leurs impressions sur le jeu 
    * Difficultés: 
        - L’accord de tout le membre du groupe sur l’apparence du jeu.
        - Se mettre au niveau des membres du groupe sur la compréhension da la longue JavaScript et de son apprentissage.
        - se mettre à jour sur toutes nouveautés par rapport a HTML5 ou de CSS.  
- ### Anisdhiyaeddine BOUDIAF
    * Taches:
        - mettre en place les environnement de développement pour le serveur et le client.
        - Création des modèles de base de données.
        - Mettre en place une API-Rest et un serveurs socket.io.
    * Difficultés: 
        - Des difficulté pour implémenter le système de communication entre le serveurs et le client.
    * Réflexions: 
        - utilisation d'une architecture basé sur les événements "Event based architecture" pour gérer les communicatons.
- ### LAMINE CHELAGHA
    * Taches:
        - Intégration de l'API dans le front.
        - Conversion du code HTML5/CSS3 en code JSX supporté par REACT.
        - Réflexions sur le gestion des données dans le projet avec React "state et props" et avec Redux store.
        - les requette Async avec React et axios.
    * Difficultés: 
        - Apprentissage du javascript et du React.
    * Réflexions: 
        - utilisation du Axios et reduxThunk pour faire des requêtes asynchrone.
    -----
