'use strict';
console.log('app.js is connected..');


//Global Variables to set rounds of voting
let rounds = 0;
let dynamicRound = 25;
//Hold views in array to check for duplicates
let randomImgArrayManager = [];


//Constructor function to create our products so we can vote and track our results
function SpaceShipMallProductFactory(productName, imagePath){
  this.productName = productName;
  this.imagePath = imagePath;
  this.timesProductImageShown = 0;
  this.timesClickedOn = 0;
  SpaceShipMallProductFactory.allProductsArray.push(this);
}
//Store our products so that we can 'use' the product objects.
SpaceShipMallProductFactory.allProductsArray = [];
//Lets call the constructor function and make some product objects
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

//Generate a random index and return that product from the all products array.
SpaceShipMallProductFactory.prototype.randomImageGenerator = function(imageArray){
  let randomImageIndex = Math.floor(Math.random() * imageArray.length);
  let newImagePath = SpaceShipMallProductFactory.allProductsArray[randomImageIndex];
  return newImagePath;
};
//Call the random image generator for images
function getNewImage(){
  return SpaceShipMallProductFactory.prototype.randomImageGenerator(SpaceShipMallProductFactory.allProductsArray);
}

function runGenerateNewRound() {
  let getNextImage1 = getNewImage();
  while(randomImgArrayManager.includes(getNextImage1)){
    getNextImage1 = getNewImage();
    console.log('matching objects 1 new image should be:');
    console.log('1. in the while is now this image: ', getNextImage1);
  }
  randomImgArrayManager.push(getNextImage1);
  let firstImage = document.getElementById('leftImage');
  firstImage.src = getNextImage1.imagePath;
  getNextImage1.timesProductImageShown++;

  let getNextImage2 = getNewImage();
  while(randomImgArrayManager.includes(getNextImage2)){
    getNextImage2 = getNewImage();
    console.log('matching objects for 22 new image should be:');
    console.log('2. in the while is now this image: ', getNextImage2);

  }
  randomImgArrayManager.push(getNextImage2);
  let secondImage = document.getElementById('middleImage');
  secondImage.src = getNextImage2.imagePath;
  getNextImage2.timesProductImageShown++;

  let getNextImage3 = getNewImage();
  while(randomImgArrayManager.includes(getNextImage3)){
    getNextImage3 = getNewImage();
    console.log('matching objects for 333 new image should be: ');
    console.log('3. in the while Still now this image: ', getNextImage3);
  }
  randomImgArrayManager.push(getNextImage3);
  let thirdImage = document.getElementById('rightImage');
  thirdImage.src = getNextImage3.imagePath;
  getNextImage3.timesProductImageShown++;

  //Need to refactor.
  if(randomImgArrayManager.length >= 10){
    //this does not work for previous
    randomImgArrayManager = [];
    console.log('array length ',randomImgArrayManager.length);
  }
}
// Run the list of Voting Results on button click on main page
function resultListOfVotes(){
  let resultsElement = document.getElementById('displayListResults');
  // console.log('results element?',resultsElement);
  for(let i = 0; i <= SpaceShipMallProductFactory.allProductsArray.length-1; i++){
    let listItemElement = document.createElement('li');
    listItemElement.textContent = `${SpaceShipMallProductFactory.allProductsArray[i].productName} had ${SpaceShipMallProductFactory.allProductsArray[i].timesClickedOn} votes, and was seen ${SpaceShipMallProductFactory.allProductsArray[i].timesProductImageShown} times.`;
    resultsElement.append(listItemElement);
  }
  disableNextButton('button');
}
function disableNextButton(buttonId) {
  // console.log('herersseeee', buttonId);
  document.getElementById(buttonId).disabled = 'true';
}



function renderImageVotingRounds(){
  let productImages = document.querySelectorAll('#imageSection img');
  for(let i = 0; i < productImages.length; i++){
    productImages[i].addEventListener('click', function(){
      rounds++;
      let url = new URL(productImages[i].src);
      let relativePath = url.toString().substring(url.origin.length);
      for(let z = 0; z < SpaceShipMallProductFactory.allProductsArray.length; z++){
        if(relativePath === SpaceShipMallProductFactory.allProductsArray[z].imagePath){
          SpaceShipMallProductFactory.allProductsArray[z].timesClickedOn++;
        }
      }
      if(rounds >= dynamicRound){
        console.log('poop');
        getChartData();
      }
      runGenerateNewRound();
    });// close add event listener
  }
}





function getChartData() {
  let productLabel = [];
  let voteCount = [];
  let productShown = [];

  for(let i = 0; i < SpaceShipMallProductFactory.allProductsArray.length; i ++){
    productLabel[i] = SpaceShipMallProductFactory.allProductsArray[i].productName;
    voteCount[i] = SpaceShipMallProductFactory.allProductsArray[i].timesClickedOn;
    productShown[i] = SpaceShipMallProductFactory.allProductsArray[i].timesProductImageShown;
  }
  // console.log(productShown);

  let chartData = [productLabel, voteCount, productShown];

  showChartNow(chartData);
}




function showChartNow(chartData) {
  console.log(chartData);

  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartData[0],
      datasets: [{
        label: '# of Votes',
        data: chartData[1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      },
      {
        label: '# of times Shown',
        backgroundColor: ['rgba(29, 180, 54, 0.733)'],
        data: chartData[2]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



// datasets: [
//   {
//     label: 'Vote Count',
//     backgroundColor: 'rgb(200,0,0,0.6)',
//     data: voteCounts
//   },
//   {
//     label:'Show Count',
//     backgroundColor: 'rgb(0,0,200,0.4)',
//     data: showCounts
//   },
//   {
//     label: 'Vote %',
//     data: votePercentage
//   }
// ]
// },



renderImageVotingRounds();
