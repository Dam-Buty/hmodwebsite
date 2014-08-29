
(function() {
	var app = angular.module("store", ["ngSanitize"]);
	
	app.controller("StoreController", [ "$http", function($http) {		
		this.livres = [{
		    id: "hmod_001",
			titre: "Caucasus",
			auteur: "Tiéphaine G. Szuter",
			prix: 1.99,
			description: "<p>Caucasus est un texte inquiétant signé Tiéphaine G Szuter :'Lorsqu'une expédition aussi mystérieuse que précipitée est organisée pour explorer les abimes de la Krubera-Voronja, une des grottes les plus profondes du monde, les scientifiques participants à tous russophones à se posent des questions.</p><p>Qu'y a-t-il au plus profond de ces souterrains qui ait pu piquer la curiosité du gouvernement russe ? Ce n'est que quand le chef de l'expédition, un certain Dragan Dmitrov, leur annonce qu'ils sont venus cartographier une cité ancienne enterrée là depuis des millénaires qu'ils comprennent que cette expédition pourrait bien changer leur vie à tout jamais</p>"
		}, {
		    id: "hmod_002",
			titre: "La maison du fond des bayous",
			auteur: "Tanguy Mandias",
			prix: 0.99,
			description: "<p>Ce mois-ci, c'est deux histoires pour le prix d'une ! Dans la plus pure tradition des séances de cinéma Double Feature.</p><p><b>La maison du fond des bayous</b> : une bande de gamins téméraires décident de braver l'interdiction de leurs parents et de percer le mystère de l'étrange maison qui dort au fond des bayous. Mais tout le monde sait que la curiosité est un vilain défaut</p><p><b>Ozymandias</b> : embrumé par l'alcool et le chagrin, on serait prêt à tout pour faire revenir la femme que l'on aime. Même à pactiser avec un étrange magicien venu des colonies.</p><p>Deux histoires d'horreur dans la plus pure tradition des magazines pulp des 50's. Un combo terrifique à souhait !</p>"
		}];
		
		this.current = 0;
		
		this.getCouv = function() {
			return "assets/" + this.livres[this.current].id + "_couv.jpg";
		};
		
		this.getAuteur = function() {
			return "assets/" + this.livres[this.current].id + "_auteur.jpg";
		};
		
		this.getCurrent = function() {
			return this.livres[this.current];
		};
		
		this.next = function() {
			var current = this.current + 1;
			
			if (this.livres[current] === undefined) {
			    current = 0;
			}
			
			this.current = current;
		};
	}]);
	
})();
