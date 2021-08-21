const CANVAS_HEIGHT = 600;

const CANVAS_WIDTH = 400;

const SPACE_BAR = 32;

// Keys for Position
const POS1 = 49;
const POS2 = 50;
const POS3 = 51;
const POS4 = 52;
const POS5 = 53;

// Keys for Soldiers
const WARRIOR1 = 54;
const WARRIOR2 = 55;
const WARRIOR3 = 56;
const WARRIOR4 = 57;
const WARRIOR5 = 58;

let bgImage;

let theViking;
let andre;
let filipe;
let tower;
let cross;

// HTML Elements
let player1Resources = document.getElementById("player1Resources");
let player1Position = document.getElementById("player1Position");

let tower1health = document.getElementById("tower1health");
let tower2health = document.getElementById("tower2health");
let tower3health = document.getElementById("tower3health");
let tower4health = document.getElementById("tower4health");
let tower5health = document.getElementById("tower5health");

let tower1label = document.getElementById("tower1label");
let tower2label = document.getElementById("tower2label");
let tower3label = document.getElementById("tower3label");
let tower4label = document.getElementById("tower4label");
let tower5label = document.getElementById("tower5label");

let tower1health2 = document.getElementById("tower1health2");
let tower2health2 = document.getElementById("tower2health2");
let tower3health2 = document.getElementById("tower3health2");
let tower4health2 = document.getElementById("tower4health2");
let tower5health2 = document.getElementById("tower5health2");

let tower1label2 = document.getElementById("tower1label2");
let tower2label2 = document.getElementById("tower2label2");
let tower3label2 = document.getElementById("tower3label2");
let tower4label2 = document.getElementById("tower4label2");
let tower5label2 = document.getElementById("tower5label2");
