import '../css/index.css';
import User from '../js/user';
import Home from '../js/home';

let user = new User('nandi', 'nandi xd', 'tevaleverga@asdasd');
let home = new Home();

home.dialog();

console.log('user=>', user.getHi()); //eslint-disable-line no-console
console.log('user=>', user.email);//eslint-disable-line no-console
