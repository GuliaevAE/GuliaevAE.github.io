
const confirm = document.querySelector("#confirm").addEventListener("click", conf );
const reset = document.querySelector("#reset").addEventListener("click", rest );
const delet = document.querySelector("#delete").addEventListener("click", deletItem );
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
const list = document.querySelector("#text");


function conf(){
  localStorage.setItem(input1.value, input2.value);
  alert(`Данные добавлены: ${input1.value} - ${input2.value}.`);
  list.innerHTML += `<b>${input1.value}: ${input2.value}</b>`;
  input1.value = "";
  input2.value = "";
}



function deletItem(){
  localStorage.removeItem(input1.value);
  alert(`Данные с ключем ${input1.value}`)
  window.location.reload();
  
}


function rest(){
    localStorage.clear();
    list.innerHTML = ``;
    alert("Данные удалены");
}

let state = [];

function List(){
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    state = `${key}: ${localStorage.getItem(key)}`;
    document.getElementById('text').innerHTML += `<b>${key}: ${localStorage.getItem(key)}</b>`;
  }
    
}



List();





