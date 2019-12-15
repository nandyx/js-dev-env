import '../css/index.css';
import User from '../js/user';
import Home from '../js/home';
import Contact from '../js/contact';

let user = new User('nandi', 'nandi xd', 'tevaleverga@asdasd');
let home = new Home();
let contact = new Contact('Lesly', 'de Legorreta');


console.log('user=>', user.getHi()); //eslint-disable-line no-console
console.log('user=>', user.email);//eslint-disable-line no-console
console.log(contact.getFullName());
