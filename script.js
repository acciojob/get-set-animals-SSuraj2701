//complete this code
class Animal 
{
	Constructor(species){
		this._species=species;
	
	}
	get species(){
		return this._species;
	}
	makesound(){
		return `The ${this._species} makes a sound`
	}
}

class Dog extends Animal {
	constructor(speices){
	super(speices)
}
	bark(){
		return `woof`
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
	return `purr`
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
