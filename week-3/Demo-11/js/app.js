'use strict';
console.log('app.js is connected..');

let rounds = 0;
let dynamicRound = 5;

function SpaceShipMallProductFactory(productName, imagePath){
  this.productName = productName;
  this.imagePath = imagePath;
  this.timesProductImageShown = 0;
  this.timesClickedOn = 0;
  SpaceShipMallProductFactory.allProductsArray.push(this);
}
SpaceShipMallProductFactory.allProductsArray = [];

new SpaceShipMallProductFactory('Dragon','/images/assets/dragon.jpg');
new SpaceShipMallProductFactory('Tauntaun','/images/assets/tauntaun.jpg');
new SpaceShipMallProductFactory('Unicorn','/images/assets/unicorn.jpg');
new SpaceShipMallProductFactory('Bag','/images/assets/bag.jpg');
new SpaceShipMallProductFactory('Banana','/images/assets/banana.jpg');
new SpaceShipMallProductFactory('Bathroom','/images/assets/bathroom.jpg');
new SpaceShipMallProductFactory('Boots','/images/assets/boots.jpg');
new SpaceShipMallProductFactory('Breakfast','/images/assets/breakfast.jpg');
new SpaceShipMallProductFactory('BubbleGum','/images/assets/bubblegum.jpg');
new SpaceShipMallProductFactory('Chair','/images/assets/chair.jpg');
new SpaceShipMallProductFactory('Cthulhu','/images/assets/cthulhu.jpg');
new SpaceShipMallProductFactory('Dog Duck','/images/assets/dog-duck.jpg');
new SpaceShipMallProductFactory('Pen','/images/assets/pen.jpg');
new SpaceShipMallProductFactory('Pet Sweep','/images/assets/pet-sweep.jpg');
new SpaceShipMallProductFactory('Scissors','/images/assets/scissors.jpg');
new SpaceShipMallProductFactory('Shark','/images/assets/shark.jpg');
new SpaceShipMallProductFactory('Sweep','/images/assets/sweep.png');
new SpaceShipMallProductFactory('Usb','/images/assets/usb.gif');
new SpaceShipMallProductFactory('Water Can','/images/assets/water-can.jpg');
new SpaceShipMallProductFactory('Wine Glass','/images/assets/wine-glass.jpg');
// for(let x = 0; x < 3; x++){
//   SpaceShipMallProductFactory.allProductsArray[x].timesProductImageShown++;
// }

SpaceShipMallProductFactory.prototype.randomImageGenerator = function(imageArray){
  let randomImageIndex = Math.floor(Math.random() * imageArray.length);
  let newImagePath = SpaceShipMallProductFactory.allProductsArray[randomImageIndex];
  return newImagePath;
};

SpaceShipMallProductFactory.prototype.randomImageGenerator(SpaceShipMallProductFactory.allProductsArray);


function runGenerateNewRound() {
  let getNextImage1 = SpaceShipMallProductFactory.prototype.randomImageGenerator(SpaceShipMallProductFactory.allProductsArray);
  let firstImage = document.getElementById('leftImage');
  firstImage.src = getNextImage1.imagePath;
  getNextImage1.timesProductImageShown++;

  let getNextImage2 = SpaceShipMallProductFactory.prototype.randomImageGenerator(SpaceShipMallProductFactory.allProductsArray);
  let secondImage = document.getElementById('middleImage');
  secondImage.src = getNextImage2.imagePath;
  getNextImage2.timesProductImageShown++;

  let getNextImage3 = SpaceShipMallProductFactory.prototype.randomImageGenerator(SpaceShipMallProductFactory.allProductsArray);
  let thirdImage = document.getElementById('rightImage');
  thirdImage.src = getNextImage3.imagePath;
  getNextImage3.timesProductImageShown++;

}

function resultListOfVotes(){
  let resultsElement = document.getElementById('displayListResults');
  console.log('results element?',resultsElement);
  for(let i = 0; i <= SpaceShipMallProductFactory.allProductsArray.length-1; i++){
    let listItemElement = document.createElement('li');
    listItemElement.textContent = `${SpaceShipMallProductFactory.allProductsArray[i].productName} had ${SpaceShipMallProductFactory.allProductsArray[i].timesClickedOn} votes, and was seen ${SpaceShipMallProductFactory.allProductsArray[i].timesProductImageShown} times.`;
    resultsElement.append(listItemElement);
  }
  disableNextButton('button');
}

function disableNextButton(buttonId) {
  console.log('hererssseeee', buttonId);
  document.getElementById(buttonId).disabled = 'true';
}

let productImages = document.querySelectorAll('#imageSection img');

for(let i = 0; i < productImages.length; i++){
  productImages[i].addEventListener('click', function(){

    rounds++;
    // console.log('rounds ',rounds);
    if(rounds <= dynamicRound){
      let url = new URL(productImages[i].src);
      let relativePath = url.toString().substring(url.origin.length);
      // console.log('1. relative path changing?', relativePath);

      for(let z = 0; z < SpaceShipMallProductFactory.allProductsArray.length; z++){
        if(relativePath === SpaceShipMallProductFactory.allProductsArray[z].imagePath){
          SpaceShipMallProductFactory.allProductsArray[z].timesClickedOn++;
        }
      }//close for loop
      runGenerateNewRound();
    } else {
      // console.log('hey',productImages[i]);
      productImages[i].removeEventListener('click', function(){
        console.log('we have stopped voting and will render data eventually.');
      });
    }
  });// close add event listener
}

