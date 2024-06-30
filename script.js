let button = document.querySelector(".add-btn");
let expnsbox = document.querySelector(".expense-box");
let sr = document.querySelector(".sr");
let date1 = document.querySelector(".date");
let desc = document.querySelector(".item");
let amt = document.querySelector(".amt");
let totamt = document.querySelector(".totamt");
let date = new Date();
let currdate = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
let form = document.querySelector("form");
const data = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
})

button.addEventListener("click",() => {
    event.preventDefault();
    let added = document.createElement("div");
    added.className = "added";
    let srno1 = document.createElement("h3");
    let date2 = document.createElement("h3");
    let desc1 = document.createElement("h3");
    let amt1 = document.createElement("h3");
    let srno = localStorage.setItem("Serial no.",sr.value);
    let Date = localStorage.setItem("Date",currdate);
    let descpription = localStorage.setItem("Description",desc.value);
    let amount = localStorage.setItem("Amount",amt.value);
    let srnoin = localStorage.getItem("Serial no.");
    let Datein = localStorage.getItem("Date");
    let descpriptionin = localStorage.getItem("Description");
    let amountin = localStorage.getItem("Amount");
    srno1.innerHTML = srnoin;
    date2.innerHTML = Datein;
    desc1.innerHTML = descpriptionin;
    amt1.innerHTML = amountin;
    data.push(srnoin);
    data.push(Datein);
    data.push(descpriptionin);
    data.push(amountin);
    added.append(srno1,date2,desc1,amt1);
    expnsbox.append(added);
    console.log(expnsbox);
    console.log(amt.value);
    totamt.innerText = parseInt(totamt.innerText) + parseInt(amt.value);
})
window.addEventListener('beforeunload',(event) => {
  event.preventDefault();
})