# js-tdd-intro

On crée d'abord un package.json, sans prendre la peine de le personnaliser :
npm init -y

Voici comment on installe Mocha en tant que dépendance de test avec NPM :
npm install mocha

On va maintenant personnaliser le package.json. Sous la clé scripts, on va remplacer la valeur associée à la clé test :
"test": "mocha"

Cela nous permettra de lancer les tests avec "npm test", une fois qu'on aura restructuré le fichier de tests.
Au lieu de disposer toutes les assertions à la suite des autres,
on va hiérarchiser la suite de tests, en écrivant trois cas distincts 
(cas général, cas limites avec chaîne de 0 ou 1 caractère),
plus un pour tester que capitalizeFirst est une fonction prenant un argument.

quest03 - Squelette du rectangle :
// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {

  }

  getArea() {

  }

  getPerimeter() {

  }
}

module.exports = Rectangle;

