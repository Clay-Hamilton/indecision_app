

const add = (a,b) => a+b;


const user = {
    name: "Clay",
    cities: ["NYC", "Claremont"],
    printPlacesLived() {

        return this.cities.map( (city) => this.name + " has lived in " + city + "!");

        // option 3:
        // return this.cities.map( (city) => {
        //     return this.name + " has lived in " + city + "!";
        // });

        //option 2:
        // const cityMessages = this.cities.map( (city) => {
        //     return this.name + " has lived in " + city + "!";
        // });

        // console.log(this.name);
        // console.log(this.cities);


        // return cityMessages;


        //option 1:
        // this.cities.forEach( (city) => {
        //     console.log(this.name + " has lived in " + city)
        // });

    }
};

console.log(user.printPlacesLived());

//challenge:

const multiplier = {
    numbers: [2, 4, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map( (num) => num*this.multiplyBy );
    } 
};

console.log(multiplier.multiply());