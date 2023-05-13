const table = document.getElementById('table');
const modal = document.getElementById('modal');


table.addEventListener('click',(evento)=>{
evento.stopPropagation();
console.log(evento.target.parentElement.parentElement.child);

});