'use strict';
let products =[
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.jpg',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

const imges = document.getElementById('imges');
const left = document.getElementById('left');
const right = document.getElementById('right');
const mid = document.getElementById('mid');

let theClick =0;
let rightCounter =0;
let liftCounter =0;
let midCounter =0;
let TimeOftraiels =25;

function Productpic ( name ){
  this.productName = name;
  this.productImg = `./img/${name}`;
  this.views = 0;
  this.clicks = 0;
  Productpic.arr.push( this );
}

Productpic.arr = [];

for ( let i = 0; i < products.length; i++ ){
  new Productpic ( products[i] );
}

///////// three imgs render ////////////

function renderimgs() {
  let righbox = randomNumber(0, products.length - 1);
  let leftbox;
  let midbox;
  do {
    midbox = randomNumber(0, products.length - 1);
  } while (righbox === midbox);

  do {
    leftbox = randomNumber(0, products.length - 1);
  } while (leftbox === righbox || leftbox === midbox);

  right.src = Productpic.arr[righbox].productImg;
  mid.src = Productpic.arr[midbox].productImg;
  left.src = Productpic.arr[leftbox].productImg;


  rightCounter = righbox;
  midCounter = midbox;
  liftCounter = leftbox;

  Productpic.arr[righbox].views++;
  Productpic.arr[midbox].views++;
  Productpic.arr[leftbox].views++;
}
renderimgs();


/////////the click function//////

imges.addEventListener('click', Click);

function Click(event) {
  if ((event.target.id === 'right' || event.target.id === 'left' || event.target.id === 'mid') && theClick < TimeOftraiels) {

    if (event.target.id === 'right') {
      Productpic.arr[rightCounter].clicks++;
    }

    if (event.target.id === 'right') {
      Productpic.arr[midCounter].clicks++;
    }

    if (event.target.id === 'left') {
      Productpic.arr[liftCounter].clicks++;
    }
    theClick++;
    renderimgs();
  }
}



 
 







































































function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
