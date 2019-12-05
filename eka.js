const person = {
    name: 'Oskari Kurki',
    age: 16
}

module.exports = person;
class Henkilo {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greeting(){
        console.log('Minun nimeni on ${this.name} ja mina olen ${this.age}')
    }
}

module.exports = Henkilo;