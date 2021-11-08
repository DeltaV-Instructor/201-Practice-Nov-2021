'use strict';
console.log('app.js connected');
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

let seattle = {
  storeName: 'Seattle',
  minCust: 23,
  maxCust:  65,
  avgCookieSale:  6.3,
  averageHourlyCustomer: [],
  averageHourlyCookies: [],
  randomHourlyCustomer: function(){
    for(let i = 0; i < storeHours.length; i ++){
      this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
    }
  },
  calculateHourlyCookies: function(){
    for(let x = 0; x < storeHours.length; x++){
      this.averageHourlyCookies.push(Math.floor(this.avgCookieSale * this.averageHourlyCustomer[x]));
    }
  }
};
seattle.randomHourlyCustomer();
seattle.calculateHourlyCookies();

let tokyo = {
  storeName: 'Tokyo',
  minCust: 3,
  maxCust: 24 ,
  avgCookieSale: 1.2,
  averageHourlyCustomer: [],
  averageHourlyCookies: [],
  randomHourlyCustomer: function(){
    for(let i = 0; i < storeHours.length; i ++){
      this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
    }
  },
  calculateHourlyCookies: function(){
    for(let x = 0; x < storeHours.length; x++){
      this.averageHourlyCookies.push(Math.floor(this.avgCookieSale * this.averageHourlyCustomer[x]));
    }
  }
};
tokyo.randomHourlyCustomer();
tokyo.calculateHourlyCookies();



let dubai = {
  storeName: 'Dubai',
  minCust:  11,
  maxCust:  38 ,
  avgCookieSale: 3.7,
  averageHourlyCustomer: [],
  averageHourlyCookies: [],
  randomHourlyCustomer: function(){
    for(let i = 0; i < storeHours.length; i ++){
      this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
    }
  },
  calculateHourlyCookies: function(){
    for(let x = 0; x < storeHours.length; x++){
      this.averageHourlyCookies.push(Math.floor(this.avgCookieSale * this.averageHourlyCustomer[x]));
    }
  }
};

dubai.randomHourlyCustomer();
dubai.calculateHourlyCookies();


let paris = {
  storeName: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  averageHourlyCustomer: [],
  averageHourlyCookies: [],
  randomHourlyCustomer: function(){
    for(let i = 0; i < storeHours.length; i ++){
      this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
    }
  },
  calculateHourlyCookies: function(){
    for(let x = 0; x < storeHours.length; x++){
      this.averageHourlyCookies.push(Math.floor(this.avgCookieSale * this.averageHourlyCustomer[x]));
    }
  }
};

paris.randomHourlyCustomer();
paris.calculateHourlyCookies();

let lima = {
  storeName: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale:  4.6,
  averageHourlyCustomer: [],
  averageHourlyCookies: [],
  randomHourlyCustomer: function(){
    for(let i = 0; i < storeHours.length; i ++){
      this.averageHourlyCustomer.push(Math.ceil(Math.floor(Math.random() * (this.minCust * this.maxCust))));
    }
  },
  calculateHourlyCookies: function(){
    for(let x = 0; x < storeHours.length; x++){
      this.averageHourlyCookies.push(Math.floor(this.avgCookieSale * this.averageHourlyCustomer[x]));
    }
  }
};

lima.randomHourlyCustomer();
lima.calculateHourlyCookies();

let allInternationalStores = [seattle,tokyo,dubai,paris,lima];
let storeName;
let addListItemDataForStoreHour;
let listElement = document.getElementById('storeList');

for(let x = 0; x < allInternationalStores.length; x++){
  storeName = document.createElement('li');
  storeName.setAttribute('class', 'storeLi');
  storeName.textContent = allInternationalStores[x].storeName;
  listElement.appendChild(storeName);
  for(let j = 0; j < storeHours.length; j++){
    addListItemDataForStoreHour = document.createElement('li');
    addListItemDataForStoreHour.setAttribute('class', 'storeLi');
    addListItemDataForStoreHour.textContent = `${storeHours[j]} : ${allInternationalStores[x].averageHourlyCookies[j]} cookies.`;
    listElement.appendChild(addListItemDataForStoreHour);
  }
}





