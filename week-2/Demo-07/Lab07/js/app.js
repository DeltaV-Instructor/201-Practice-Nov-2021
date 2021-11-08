'use strict';
console.log('app.js connected');
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];


function StoreFactory(storeName, minCust, maxCust, averageCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.averageHourlyCookies = [];
  this.averageHourlyCustomer = [];
}

StoreFactory.prototype.randomHourlyCustomer = function(){
  for(let i = 0; i < storeHours.length; i ++){
    this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
  }
};

StoreFactory.prototype.calculateHourlyCookies = function(){
  for(let x = 0; x < storeHours.length; x++){
    this.averageHourlyCookies.push(Math.floor(this.averageCookieSale * this.averageHourlyCustomer[x]));
  }
};

let seattle = new StoreFactory('Seattle', 23, 65, 6.3);
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

// let allInternationalStores = [seattle];

let allInternationalStores = [seattle,tokyo,dubai,paris,lima];
console.log('all stores' , allInternationalStores);

StoreFactory.prototype.createTableHeadRow = function() {
  let tableHeader = document.getElementById('tableHead');
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
  

  let tableBody = document.getElementById('tableBody');
  for(let x = 0; x < allInternationalStores.length; x++){
    let cookieSoldPerStore = 0;
    let tableRow = document.createElement('tr');
    let tableBodyStoreName = document.createElement('td');
    tableBodyStoreName.textContent = allInternationalStores[x].storeName;
    tableRow.appendChild(tableBodyStoreName);
    for(let j = 0; j < storeHours.length; j++){
      let tableListData = document.createElement('td');
      tableListData.textContent = allInternationalStores[x].averageHourlyCookies[j];
      //add up the cookies total
      cookieSoldPerStore += allInternationalStores[x].averageHourlyCookies[j];
      console.log('Total cookies sold each hour per store.',cookieSoldPerStore);
      // //adds numbers to row
      tableRow.appendChild(tableListData);
      tableBody.appendChild(tableRow);
    }
    console.log('cookie total', cookieSoldPerStore);
    let lastRowCell = document.createElement('td');
    lastRowCell.textContent = cookieSoldPerStore;
    tableRow.appendChild(lastRowCell);
    // console.log('numbers ', cookieSoldPerStore);
  }
};



// StoreFactory.prototype.renderFooter = function(){
//   let tableFooter = document.getElementById('tableFooter');
// }
 






StoreFactory.prototype.createTableHeadRow();
StoreFactory.prototype.render();
// StoreFactory.prototype.renderFooter();
