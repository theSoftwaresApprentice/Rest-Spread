// Same keys and values
function createInstructor(firstName, lastName){
    return {firstName, lastName};
}

//Computed Property Names
const favoriteNumber = 42;
const instructor = {
    firstName: 'Colt', [favoriteNumber]:"That is my favorite!"
}

// Obj methods
const instructor = {
    firstName: "Colt",
    sayHi(){return "Hi!"},
    sayBye(){return this.firstName + " says bye!"}
}

// createAnimal 
const createAnimal = (animal, expression, sound){{
    animal, [expression](){
        return sound;
    }
}}