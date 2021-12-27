import{name as na,user as us,test} from './laibrary.js';


// console.log(na)
// document.body.innerHTML =na;

// us("Zameer");

// let a = new test();

// instead of using name of all variable we use * to import all variables
// import * as all from './laibrary.js';

// console.log(all.name)
// document.body.innerHTML =all.name;

// all.user("Zameer");

// let a = new all.test();

//default function
//import{default as zamir } from './laibrary.js'
//shortcut
// import zamir from './laibrary.js';
// import {name,user}from './laibrary.js';

// console.log(name);
// console.log(user("zamir"));
// zamir();



//bridge...(aggregate)


import{user} from'./bridge.js';
console.log(user())