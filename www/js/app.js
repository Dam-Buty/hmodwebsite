
(function() {
	var app = angular.module("store", []);
	
	app.controller("StoreController", [ "$http", function($http) {		
		this.livres = [{
			titre: "Caucasus",
			auteur: "Thiephaine Bidule",
			prix: 1.99,
			description: "Caucasus est un texte inqui�tant sign� Ti�phaine G Szuter :\n\n�Lorsqu�une exp�dition aussi myst�rieuse que pr�cipit�e est organis�e pour explorer les abimes de la Krubera-Voronja, une des grottes les plus profondes du monde, les scientifiques participants � tous russophones � se posent des questions.</p><p>Qu�y a-t-il au plus profond de ces souterrains qui ait pu piquer la curiosit� du gouvernement russe ? Ce n�est que quand le chef de l�exp�dition, un certain Dragan Dmitrov, leur annonce qu�ils sont venus cartographier une cit� ancienne enterr�e l� depuis des mill�naires qu�ils comprennent que cette exp�dition pourrait bien changer leur vie � tout jamais��</p>",
			images: {
				couv: "1_couv.jpg",
				auteur: "1_auteur.jpg"
			}
		}, {
			titre: "La maison du fond des bayous",
			auteur: "Tanguy Mandias",
			prix: 0.99,
			description: "<p>Ce mois-ci, c�est deux histoires pour le prix d�une ! Dans la plus pure tradition des s�ances de cin�ma Double Feature.</p><p><b>La maison du fond des bayous</b> : une bande de gamins t�m�raires d�cident de braver l�interdiction de leurs parents et de percer le myst�re de l��trange maison qui dort au fond des bayous. Mais tout le monde sait que la curiosit� est un vilain d�faut�</p><p><b>Ozymandias</b> : embrum� par l�alcool et le chagrin, on serait pr�t � tout pour faire revenir la femme que l�on aime. M�me � pactiser avec un �trange magicien venu des colonies.</p><p>Deux histoires d�horreur dans la plus pure tradition des magazines pulp des 50's. Un combo terrifique � souhait !</p>",
			images: {
				couv: "2_couv.jpg",
				auteur: "2_auteur.jpg"
			}
		}];
		
		this.current = 0;
		
		this.getCouv = function() {
			return "assets/" + this.livres[this.current].id + "_couv.jpg";
		};
		
		this.getCurrent = function() {
			return this.livres[this.current];
		};
		
		this.next = function() {
			this.current++;
		};
	}]);
	
})();