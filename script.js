//complete this code
class Animal 
{
	Constructor(species){
		this.species=species;
	
	}
	get species(){
		return this.species
	}
	makesound(){
		return `The ${species} makes a sound`
	}
}

class Dog extends Animal {
	Constructor(speices){
	super(speices)
}
	bark(){
		return `woof`
	}
}

class Cat extends Animal {
	Constructor(species){
		super(species)
	}
	return `purr`
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
