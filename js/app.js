'use strict';

const bodyEle = document.getElementById('bodySalAttributes');
const h1E = document.getElementById('wlecomMsg');

const h1Element = document.createElement('h1');
h1Element.textContent = 'Salamon-Cookies For Pat';
h1E.appendChild(h1Element);

let hours=['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];

const tableCOOK = document.getElementById('tableCookie');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i=0;i<hours.length;i++){
  const tdEle = document.createElement('td');
  tdEle.textContent = `${hours[i]}`;
  tableCOOK.appendChild(tdEle);
}

function Seattle(minCusm,maxCus,AvgCus){
  this.name='seattle';
  this.minCusm=minCusm;
  this.maxCus=maxCus;
  this.AvgCus=AvgCus;
  this.cookiePerH=[];
  this.CustomerPerH=[];
  this.AvgCutmConsuming = 0;
  this.customerper =0;

  this.render=function(){

    const tableElement = document.createElement('table');
    bodyEle.appendChild(tableElement);

    const trHead = document.createElement('th');
    tableCOOK.appendChild(trHead);
    const trElement = document.createElement('tr');
    tableCOOK.appendChild(trElement);

    let total = 0;
    for(let i=0;i<hours.length-1;i++){
      let cookiei=Math.ceil(getRandomIntInclusive(this.minCusm,this.maxCus)*AvgCus);
      this.cookiePerH.push(cookiei);
      if(this.cookiePerH[0]){
        this.cookiePerH[0]='seattle';
      }
      const tdEle = document.createElement('td');
      tdEle.textContent = `${this.cookiePerH[i]}`;
      total=total + cookiei;
      trElement.appendChild(tdEle);
    }
    const tdT = document.createElement('td');
    tdT.textContent=total;
    trElement.appendChild(tdT);
  };

}

let seattle = new Seattle(23,65,6.3);
seattle.render();
console.log(seattle);

function Tokyo(minCusm,maxCus,AvgCus){
  this.name='Tokyo';
  this.minCusm=minCusm;
  this.maxCus=maxCus;
  this.AvgCus=AvgCus;
  this.cookiePerH=[];
  this.CustomerPerH=[];
  this.AvgCutmConsuming = 0;
  this.customerper =0;

  this.render=function(){

    const tableElement = document.createElement('table');
    bodyEle.appendChild(tableElement);

    const trHead = document.createElement('th');
    tableCOOK.appendChild(trHead);
    const trElement = document.createElement('tr');
    tableCOOK.appendChild(trElement);

    let total = 0;
    for(let i=0;i<hours.length-1;i++){
      let cookiei=Math.ceil(getRandomIntInclusive(this.minCusm,this.maxCus)*AvgCus);
      this.cookiePerH.push(cookiei);
      if(this.cookiePerH[0]){
        this.cookiePerH[0]='Tokyo';
      }
      const tdEle = document.createElement('td');
      tdEle.textContent = `${this.cookiePerH[i]}`;
      total=total + cookiei;
      trElement.appendChild(tdEle);

    }
    const tdT = document.createElement('td');
    tdT.textContent=total;
    trElement.appendChild(tdT);
  };

}
let tokyo = new Tokyo(3,24,1.2);
tokyo.render();

function Dubai(minCusm,maxCus,AvgCus){
  this.name='Dubai';
  this.minCusm=minCusm;
  this.maxCus=maxCus;
  this.AvgCus=AvgCus;
  this.cookiePerH=[];
  this.CustomerPerH=[];
  this.AvgCutmConsuming = 0;
  this.customerper =0;

  this.render=function(){

    const tableElement = document.createElement('table');
    bodyEle.appendChild(tableElement);

    const trHead = document.createElement('th');
    tableCOOK.appendChild(trHead);
    const trElement = document.createElement('tr');
    tableCOOK.appendChild(trElement);

    let total = 0;
    for(let i=0;i<hours.length-1;i++){
      let cookiei=Math.ceil(getRandomIntInclusive(this.minCusm,this.maxCus)*AvgCus);
      this.cookiePerH.push(cookiei);
      if(this.cookiePerH[0]){
        this.cookiePerH[0]='Dubai';
      }
      const tdEle = document.createElement('td');
      tdEle.textContent = `${this.cookiePerH[i]}`;
      total=total + cookiei;
      trElement.appendChild(tdEle);
    }
    const tdT = document.createElement('td');
    tdT.textContent=total;
    trElement.appendChild(tdT);
  };

}
let dubai = new Dubai(3,24,1.2);
dubai.render();


function Paris(minCusm,maxCus,AvgCus){
  this.name='Paris';
  this.minCusm=minCusm;
  this.maxCus=maxCus;
  this.AvgCus=AvgCus;
  this.cookiePerH=[];
  this.CustomerPerH=[];
  this.AvgCutmConsuming = 0;
  this.customerper =0;

  this.render=function(){

    const tableElement = document.createElement('table');
    bodyEle.appendChild(tableElement);

    const trHead = document.createElement('th');
    tableCOOK.appendChild(trHead);
    const trElement = document.createElement('tr');
    tableCOOK.appendChild(trElement);

    let total = 0;
    for(let i=0;i<hours.length-1;i++){
      let cookiei=Math.ceil(getRandomIntInclusive(this.minCusm,this.maxCus)*AvgCus);
      this.cookiePerH.push(cookiei);
      if(this.cookiePerH[0]){
        this.cookiePerH[0]='Paris';
      }
      const tdEle = document.createElement('td');
      tdEle.textContent = `${this.cookiePerH[i]}`;
      total=total + cookiei;
      trElement.appendChild(tdEle);
    }
    const tdT = document.createElement('td');
    tdT.textContent=total;
    trElement.appendChild(tdT);
  };

}
let paris = new Paris(3,24,1.2);
paris.render();

function Lima(minCusm,maxCus,AvgCus){
  this.name='Lima';
  this.minCusm=minCusm;
  this.maxCus=maxCus;
  this.AvgCus=AvgCus;
  this.cookiePerH=[];
  this.CustomerPerH=[];
  this.AvgCutmConsuming = 0;
  this.customerper =0;

  this.render=function(){

    const tableElement = document.createElement('table');
    bodyEle.appendChild(tableElement);

    const trHead = document.createElement('th');
    tableCOOK.appendChild(trHead);
    const trElement = document.createElement('tr');
    tableCOOK.appendChild(trElement);

    let total = 0;
    for(let i=0;i<hours.length-1;i++){
      let cookiei=Math.ceil(getRandomIntInclusive(this.minCusm,this.maxCus)*AvgCus);
      this.cookiePerH.push(cookiei);
      if(this.cookiePerH[0]){
        this.cookiePerH[0]='Lima';
      }
      const tdEle = document.createElement('td');
      tdEle.textContent = `${this.cookiePerH[i]}`;
      total=total + cookiei;
      trElement.appendChild(tdEle);
    }
    const tdT = document.createElement('td');
    tdT.textContent=total;
    trElement.appendChild(tdT);
  };

}
let lima = new Lima(3,24,1.2);
lima.render();

let to=[];
let tt=0;
let t;
for(let i =1;i<hours.length-1;i++){
  if(to[0]){
    to='';
  }
  t = seattle.cookiePerH[i] + tokyo.cookiePerH[i]+ dubai.cookiePerH[i] + paris.cookiePerH[i] +lima.cookiePerH[i];
  tt = tt + t;
  to[i]=tt;
  const trEle = document.createElement('tr');
  tableCOOK.appendChild(trEle);
  const tfEle = document.createElement('tr');
  tfEle.textContent=`${to[i]}`;
  
  tableCOOK.appendChild(tfEle);
}


  let TotalTotal = tt + seattle.cookiePerH[17]+tokyo.cookiePerH[17]+dubai.cookiePerH[17]+paris.cookiePerH[17]+lima.cookiePerH[17];
  console.log(TotalTotal);
  

