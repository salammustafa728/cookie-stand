'use strict';

const bodyEle = document.getElementById('bodySalAttributes');
const h1E = document.getElementById('wlecomMsg');

const h1Element = document.createElement('h1');
h1Element.textContent = 'Salamon-Cookies For Pat';
h1E.appendChild(h1Element);

let hours=['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let seattle = {
  name:'seattle',
  minCus: 23,
  maxCus: 65,
  avgCook: 6.3,
  cookiePerH:[],
  element: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent=this.name;
    bodyEle.appendChild(h2Ele);

    let ul =document.createElement('ul');
    bodyEle.appendChild(ul);
    let tot=0;
    for (let i = 0; i < hours.length; i++){
      let cookie = Math.ceil(getRandomIntInclusive(this.minCus,this.maxCus)*this.avgCook);
      this.cookiePerH.push(cookie);
      tot+=cookie;
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}:${this.cookiePerH[i]} cookies`;
      ul.appendChild(liElement);
      // console.log(this.cookiePerH[i]);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `Total:${tot} cookies`;
    ul.appendChild(liElement);
  },

};

seattle.element();




let Tokyo = {
  mame:'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCook: 1.2,
  cookiePerH:[],
  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },

  element2: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent=this.mame;
    bodyEle.appendChild(h2Ele);

    let ul =document.createElement('ul');
    bodyEle.appendChild(ul);
    let tot=0;
    for (let i = 0; i < hours.length; i++){
      let cookie = Math.ceil(getRandomIntInclusive(this.minCus,this.maxCus)*this.avgCook);
      this.cookiePerH.push(cookie);
      tot+=cookie;
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}:${this.cookiePerH[i]} cookies`;
      ul.appendChild(liElement);
      // console.log(this.cookiePerH[i]);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `Total:${tot} cookies`;
    ul.appendChild(liElement);
  },
};

Tokyo.element2();


let Dubai = {
  name:'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCook: 3.7,
  cookiePerH:[],

  element3: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent=this.name;
    bodyEle.appendChild(h2Ele);

    let ul =document.createElement('ul');
    bodyEle.appendChild(ul);
    let tot=0;
    for (let i = 0; i < hours.length; i++){
      let cookie = Math.ceil(getRandomIntInclusive(this.minCus,this.maxCus)*this.avgCook);
      this.cookiePerH.push(cookie);
      tot+=cookie;
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}:${this.cookiePerH[i]} cookies`;
      ul.appendChild(liElement);
      // console.log(this.cookiePerH[i]);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `Total:${tot} cookies`;
    ul.appendChild(liElement);
  },
};
Dubai.element3();


let Paris = {
  name:'Paris',
  minCus: 20,
  maxCus: 38,
  avgCook: 2.3,
  cookiePerH:[],

  element4: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent=this.name;
    bodyEle.appendChild(h2Ele);

    let ul =document.createElement('ul');
    bodyEle.appendChild(ul);
    let tot=0;
    for (let i = 0; i < hours.length; i++){
      let cookie = Math.ceil(getRandomIntInclusive(this.minCus,this.maxCus)*this.avgCook);
      this.cookiePerH.push(cookie);
      tot+=cookie;
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}:${this.cookiePerH[i]} cookies`;
      ul.appendChild(liElement);
      // console.log(this.cookiePerH[i]);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `Total:${tot} cookies`;
    ul.appendChild(liElement);
  },
};
Paris.element4();

let Lima = {
  name:'Lima',
  minCus: 2,
  maxCus: 16,
  avgCook: 4.6,
  cookiePerH:[],

  element5: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent=this.name;
    bodyEle.appendChild(h2Ele);

    let ul =document.createElement('ul');
    bodyEle.appendChild(ul);
    let tot=0;
    for (let i = 0; i < hours.length; i++){
      let cookie = Math.ceil(getRandomIntInclusive(this.minCus,this.maxCus)*this.avgCook);
      this.cookiePerH.push(cookie);
      tot+=cookie;
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}:${this.cookiePerH[i]} cookies`;
      ul.appendChild(liElement);
      // console.log(this.cookiePerH[i]);
    }
    let liElement = document.createElement('li');
    liElement.textContent = `Total:${tot} cookies`;
    ul.appendChild(liElement);
  },
};
Lima.element5();
