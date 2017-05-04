function pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + ' y soy de color: '+ this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}
const Pikachu = new pokemon('Pikachu', 'amarillo', '100')
const Charmander = new pokemon('Charmander', 'rojo', '20')

Pikachu.atacar(Charmander)


document.write(Charmander.nombre + " " + Charmander.color + " " + Charmander.vida + " " + " - " );
document.write(Pikachu.nombre + " " + Pikachu.color + " "+ Pikachu.vida + " ");

