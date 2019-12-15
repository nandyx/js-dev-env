export default class Contact{

    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    getFullName(){
        return `${this.name} ${this.lastname}`;
    }
}