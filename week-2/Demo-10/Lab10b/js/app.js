'use strict';
console.log('app.js connected');
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];
let tableBody = document.getElementById('tableBody');
let usGrabCookieSoldForTheHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function StoreFactory(storeName, minCust, maxCust, averageCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.averageHourlyCookies = [];
  this.averageHourlyCustomer = [];
  StoreFactory.grabAllTheStores.push(this);
  // console.log('what we getting',StoreFactory.grabAllTheStores);
}
StoreFactory.grabAllTheStores = [];

StoreFactory.prototype.randomHourlyCustomer = function(){
  for(let i = 0; i < storeHours.length; i ++){
    this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
  }
};
StoreFactory.prototype.calculateHourlyCookies = function(){
  for(let x = 0; x < storeHours.length; x++){
    this.averageHourlyCookies.push(Math.floor(this.averageCookieSale * this.averageHourlyCustomer[x]) + 1);
  }
};

let seattle = new StoreFactory('Seattle', 2, 5, 6.3);
seattle.randomHourlyCustomer();
seattle.calculateHourlyCookies();
// console.log(seattle.averageHourlyCookies);
let tokyo = new StoreFactory('Tokyo', 3, 24, 1.2);
tokyo.randomHourlyCustomer();
tokyo.calculateHourlyCookies();

let dubai = new StoreFactory('Dubai', 11, 38, 3.7);
dubai.randomHourlyCustomer();
dubai.calculateHourlyCookies();

let paris = new StoreFactory('Paris', 20, 38, 2.3);
paris.randomHourlyCustomer();
paris.calculateHourlyCookies();

let lima = new StoreFactory('Lima', 2, 16, 4.6);
lima.randomHourlyCustomer();
lima.calculateHourlyCookies();


StoreFactory.prototype.createTableHeadRow = function() {
  let tableHeader = document.getElementById('tableHead');
  let firstEmptyCell = document.createElement('th');
  tableHeader.appendChild(firstEmptyCell);
  for(let i = 0; i < storeHours.length; i ++){
    let tableHeaderData = document.createElement('th');
    tableHeaderData.textContent = storeHours[i];
    tableHeader.appendChild(tableHeaderData);
  }
  let totalDataCell = document.createElement('th');
  totalDataCell.textContent = 'Total Cookies Sold';
  tableHeader.appendChild(totalDataCell);
};

StoreFactory.prototype.render = function(){
  for(let x = 0; x < StoreFactory.grabAllTheStores.length; x++){
    let cookieSoldPerStore = 0;
    //Add Store Names
    let tableRow = document.createElement('tr');
    let tableBodyStoreName = document.createElement('td');
    tableBodyStoreName.textContent = StoreFactory.grabAllTheStores[x].storeName;
    // console.log('numbers: ', allInternationalStores[x].averageHourlyCookies[x]);
    tableRow.appendChild(tableBodyStoreName);
    //Now lets add the cookie sales per hour for each store
    for(let j = 0; j < storeHours.length; j++){
      let tableListData = document.createElement('td');
      tableListData.textContent = StoreFactory.grabAllTheStores[x].averageHourlyCookies[j];
      usGrabCookieSoldForTheHour[j] += StoreFactory.grabAllTheStores[x].averageHourlyCookies[j];
      //this is giving us the hourly numbers per store added.
      // console.log('usGrab Cookie ', usGrabCookieSoldForTheHour);
      //add up the cookies total for each day for each store.
      cookieSoldPerStore += StoreFactory.grabAllTheStores[x].averageHourlyCookies[j];
      // console.log('Total cookies sold each hour per store.',cookieSoldPerStore);
      tableRow.appendChild(tableListData);
      tableBody.appendChild(tableRow);
    }
    // console.log('cookie total', cookieSoldPerStore);
    let lastRowCell = document.createElement('td');
    lastRowCell.textContent = cookieSoldPerStore;
    tableRow.appendChild(lastRowCell);
    // console.log('numbers ', cookieSoldPerStore);
  }
  StoreFactory.prototype.renderFooter();
};

StoreFactory.prototype.renderFooter = function(){
  let totalCookieSoldAllStores = 0;
  let totalCookiePerHourRow = document.createElement('tr');
  let totalCookiePerHourDataCell = document.createElement('td');
  totalCookiePerHourDataCell.textContent = 'Hourly Totals';
  totalCookiePerHourRow.appendChild(totalCookiePerHourDataCell);
  tableBody.appendChild(totalCookiePerHourRow);

  for(let i = 0; i < usGrabCookieSoldForTheHour.length; i++){
    let columnTotalCell = document.createElement('td');
    //get each column total then
    columnTotalCell.textContent = usGrabCookieSoldForTheHour[i];
    //total number for columns added as we go.
    totalCookieSoldAllStores += usGrabCookieSoldForTheHour[i];
    totalCookiePerHourRow.appendChild(columnTotalCell);
  }
  // totalCookiePerHourRow.appendChild(totalCookieSoldAllStores);
  let finalTotalCell = document.createElement('td');
  finalTotalCell.textContent = totalCookieSoldAllStores;
  totalCookiePerHourRow.appendChild(finalTotalCell);
  tableBody.appendChild(totalCookiePerHourRow);
  // console.log('totalCookieSoldall stores', totalCookieSoldAllStores);
};



function renderAllInternationStores(){
  tableBody.innerHTML = '';
  StoreFactory.prototype.createTableHeadRow();

  StoreFactory.prototype.render();
  console.log('we here?');




}









function handleMyFormSubmission(event){
  event.preventDefault();
  console.log('Form Submitted!');
  let storeNameInputData = event.target.storeName.value;
  let minCustInputData = parseInt(event.target.minCust.value);
  let maxCustInputData = parseInt(event.target.maxCust.value);
  let avgCookieSoldInputData = parseInt(event.target.avgCookieSold.value);
  // console.log(typeof(storeNameInputData));
  // console.log(typeof(minCustInputData));
  // console.log(typeof(maxCustInputData));
  // console.log(typeof(avgCookieSoldInputData));
  // console.log(avgCookieSoldInputData);
  let newStoreToAdd = new StoreFactory(storeNameInputData, minCustInputData, maxCustInputData, avgCookieSoldInputData);
  newStoreToAdd.randomHourlyCustomer();
  newStoreToAdd.calculateHourlyCookies();
  // console.log('Do we get a new store?', newStoreToAdd);
  formSubmission.reset();
  renderAllInternationStores();

}

//we can use query selector to grab the form element.
let formSubmission = document.getElementById('storeForm');
// console.log('lets look at the html submit element', formSubmission);
//lets add an event listener for our form to gather our input data.
formSubmission.addEventListener('submit', handleMyFormSubmission);


console.log('lets see what we get',StoreFactory.grabAllTheStores);



//Lets run all the stores in the StoreFactory StoreFactory.grabAllTheStores
renderAllInternationStores();
