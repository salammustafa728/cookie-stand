'use strict';


let loca ={
  loc1: 'seattle',
  loc2: 'Tokyo',
  loc3: 'Dubai',
  loc4: 'Paris',
  loc5: 'Lima',
};
const bodyEle = document.getElementById('bodySalAttributes');

const h1Element = document.createElement('h1');
h1Element.textContent = 'Salamon-Cookies For Pat';
bodyEle.appendChild(h1Element);



let seattle = {
  minCus: 23,
  maxCus: 65,
  avgCook: 6.3,

  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },
  avgCookieCustomerH: function(){
    return Math.floor(this.numberCustomer(this.minCus,this.maxCus)*this.avgCook);
  },
  element: function(){
    const h2Ele = document.createElement('h2');
    h2Ele.textContent = `${loca.loc1} .`;
    bodyEle.appendChild(h2Ele);

    const ulElement = document.createElement('ul');
    bodyEle.appendChild(ulElement);
    let total = 0;
    for(let i=0;i<this.hours.length;i++){
      const liEle = document.createElement('li');
      liEle.textContent = this.hours[i]+' : '+ this.avgCookieCustomerH()+' Cookies';
      total= total+this.avgCookieCustomerH();
      ulElement.appendChild(liEle);
     
    }
    const liele = document.createElement('li');
    liele.textContent = 'total '+total+' Cookies';
    ulElement.appendChild(liele);
  },

};
seattle.element();
seattle.avgCookieCustomerH();
seattle.numberCustomer(seattle.minCus,seattle.maxCus);
console.log(seattle.total);

console.log(seattle);




let Tokyo = {
  minCus: 3,
  maxCus: 24,
  avgCook: 1.2,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },
  avgCookieCustomerH: function(){

    return Math.floor(this.numberCustomer(this.minCus,this.maxCus)*this.avgCook);
  },

  element2: function(){
    const h2Ele2 = document.createElement('h2');
    h2Ele2.textContent = `${loca.loc2} .`;
    bodyEle.appendChild(h2Ele2);
    let total = 0;
    const ulElement = document.createElement('ul');
    bodyEle.appendChild(ulElement);

    for(let i=0;i<this.hours.length;i++){
      const liEle = document.createElement('li');
      liEle.textContent = this.hours[i]+' : '+ this.avgCookieCustomerH()+' Cookies';
      total= total+this.avgCookieCustomerH();
      ulElement.appendChild(liEle);
    }
    const liele = document.createElement('li');
    liele.textContent = 'total '+total+' Cookies';
    ulElement.appendChild(liele);
  },
};
Tokyo.element2();
Tokyo.avgCookieCustomerH();
Tokyo.numberCustomer(Tokyo.minCus,Tokyo.maxCus);
console.log(Tokyo);


// }

let Dubai = {
  minCus: 11,
  maxCus: 38,
  avgCook: 3.7,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },
  avgCookieCustomerH: function(){
    return Math.floor(this.numberCustomer(this.minCus,this.maxCus)*this.avgCook);
  },
  element3: function(){
    const h2Ele2 = document.createElement('h2');
    h2Ele2.textContent = `${loca.loc3} .`;
    bodyEle.appendChild(h2Ele2);
    let total = 0;
    const ulElement = document.createElement('ul');
    bodyEle.appendChild(ulElement);

    for(let i=0;i<this.hours.length;i++){
      const liEle = document.createElement('li');
      liEle.textContent = this.hours[i]+' : '+ this.avgCookieCustomerH()+' Cookies';
      total= total+this.avgCookieCustomerH();
      ulElement.appendChild(liEle);
    }
    const liele = document.createElement('li');
    liele.textContent = 'total '+total+' Cookies';
    ulElement.appendChild(liele);
  },
};
Dubai.element3();
Dubai.avgCookieCustomerH();
Dubai.numberCustomer(Dubai.minCus,Dubai.maxCus);
console.log(Dubai);


let Paris = {
  minCus: 20,
  maxCus: 38,
  avgCook: 2.3,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },
  avgCookieCustomerH: function(){
    return Math.floor(this.numberCustomer(this.minCus,this.maxCus)*this.avgCook);
  },
  element4: function(){
    const h2Ele2 = document.createElement('h2');
    h2Ele2.textContent = `${loca.loc4} .`;
    bodyEle.appendChild(h2Ele2);
    let total = 0;
    const ulElement = document.createElement('ul');
    bodyEle.appendChild(ulElement);

    for(let i=0;i<this.hours.length;i++){
      const liEle = document.createElement('li');
      liEle.textContent = this.hours[i]+' : '+ this.avgCookieCustomerH()+' Cookies';
      total= total+this.avgCookieCustomerH();
      ulElement.appendChild(liEle);
    }
    const liele = document.createElement('li');
    liele.textContent = 'total '+total+' Cookies';
    ulElement.appendChild(liele);
  },
};
Paris.element4();
Paris.avgCookieCustomerH();
Paris.numberCustomer(Paris.minCus,Paris.maxCus);
console.log(Paris);



let Lima = {
  minCus: 2,
  maxCus: 16,
  avgCook: 4.6,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberCustomer: function(minCus,maxCus){
    minCus = Math.ceil(minCus);
    maxCus = Math.floor(maxCus);
    return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
  },
  avgCookieCustomerH: function(){
    return Math.floor(this.numberCustomer(this.minCus,this.maxCus)*this.avgCook);
  },

  element5: function(){
    const h2Ele2 = document.createElement('h2');
    h2Ele2.textContent = `${loca.loc5} .`;
    bodyEle.appendChild(h2Ele2);
    let total = 0;
    const ulElement = document.createElement('ul');
    bodyEle.appendChild(ulElement);

    for(let i=0;i<this.hours.length;i++){
      const liEle = document.createElement('li');
      liEle.textContent = this.hours[i]+' : '+ this.avgCookieCustomerH()+' Cookies';
      total= total+this.avgCookieCustomerH();
      ulElement.appendChild(liEle);
    }
    const liele = document.createElement('li');
    liele.textContent = 'total '+total+' Cookies';
    ulElement.appendChild(liele);
  },
};
Lima.element5();
Lima.avgCookieCustomerH();
Lima.numberCustomer(Lima.minCus,Lima.maxCus);
console.log(Lima);

