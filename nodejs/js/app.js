///primero pondremos el endpoint
const BASE_URL ='https://caballeroszodiaco-bb6c6-default-rtdb.firebaseio.com';
//crear el objeto de caballeros y el id
let knightObject={};
let knoghts=[];
let knightId =null;

///funcionalidades

///Save and Edit
const saveKnight= async (knight,knightId)=>{
  if(knightId){
    let response = await fetch(`${BASE_URL}/${knightId}/.json`,{
      method:'PUT',
      body:JSON.stringify(knight),
    });
    let data= await response.json();
    return data;
  }else{
    let response =await fetch(`${BASE_URL}/.json`,{
      method:'POST',
      body:JSON.stringify(knight),
    });
    let data= await response.json();
    return data;
  }
};

///Mandar llamar el metodo
document.getElementById('save-knight').addEventListener("click",async(event)=>{
  event.preventDefault();
  document.querySelectorAll('#zodiac-form input').forEach((item)=>{
    knightObject[item.name]=item.value;
  });
  let response = await saveKnight(knightObject,knightId);
  if(response){
    printAllKnights('caballeros-list');
  }
knightId=null;
cleanForm();

});

const cleanForm =()=>{
  let inputs=document.querySelectorAll('#zodiac-form input');
  inputs.forEach(item =>item.value="")
}



///create card

const createKnightCard=(KnightData,knightkey)=>{
  let {nombre,orden,picture,signo,tecnica}=KnightData;
  let cardcol=document.createElement("div");
  cardcol.classList.add("col");

  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("knight-card","card","mb-3");
  
  let cardRow = document.createElement("div");
  cardRow.classList.add("row","g-0");

  let imageCol = document.createElement("div");
  imageCol.classList.add("col-md-6");

  let cardPicture =document.createElement("img");
  cardPicture.classList.add("card-picture");
  cardPicture.setAttribute("src",picture);

  let contentCol = document.createElement("div");
  contentCol.classList.add("col-md-4");

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "h-100",
    "d-flex",
    "flex-column",
    "justify-content-between"
  );

  
let cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
let cardTitleText = document.createTextNode(`Orden: caballero de ${orden}`);
cardTitle.append(cardTitleText);


let cardKnightName =document.createElement("p");
cardKnightName.classList.add("card-text");
let knightName = document.createTextNode(`Nombre: ${nombre}`);
cardKnightName.append(knightName);


let cardKnightsignno =document.createElement("p");
cardKnightsignno.classList.add("card-text");
let knightSigno = document.createTextNode(`Signo: ${signo}`);
cardKnightsignno.append(knightSigno);


let cardKnightTecnica =document.createElement("p");
cardKnightTecnica.classList.add("card-textII");
let knightThecnic = document.createTextNode(`Tecnica :${tecnica} `);
cardKnightTecnica.append(knightThecnic);

let buttonWrapper =document.createElement("div");
buttonWrapper.classList.add(
  "d-flex",
  "justify-content-between",
  "flex-column",
  "flex-md-row",
  "gap-3"
);

let deleteButton =document.createElement("button");
deleteButton.classList.add("btn","btn-danger");
let deleteText =document.createTextNode("borrar");
deleteButton.append(deleteText);
deleteButton.addEventListener("click",()=>{
    deleteKnight(knightkey);
});

let modifiedButton =document.createElement("button");
modifiedButton.classList.add("btn","btn-primary");
let modifiedText =document.createTextNode("Modificar");
modifiedButton.append(modifiedText);
modifiedButton.addEventListener("click",()=>{
modifiedKnight(knightkey);

});

///aqui va el detalle
let detailButton = document.createElement("button");
detailButton.classList.add("btn","btn-warning");
let ViewDetailText =document.createTextNode("Detalle");
detailButton.append(ViewDetailText);

detailButton.addEventListener("click",()=>{
  window.location.replace('./detailedView.html');
  
  });


////////////////////
buttonWrapper.append(deleteButton,modifiedButton,detailButton);
cardBody.append(cardTitle,cardKnightName,cardKnightTecnica,buttonWrapper);
contentCol.append(cardBody);
imageCol.append(cardPicture);
cardRow.append(imageCol,contentCol);
cardWrapper.append(cardRow);
cardcol.append(cardWrapper);
return cardcol;

};


const getAllKnights =async ()=>{
  let response= await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  return data;
};



const printAllKnights =async (listId)=>{
   knoghts =await getAllKnights();
  let listWrapper =document.getElementById(listId);
  while(listWrapper.firstChild){
    listWrapper.removeChild(listWrapper.firstChild);
  }
  for (key in knoghts ){
    let knoghtData = knoghts[key];
    let card=createKnightCard(knoghtData,key);
    listWrapper.appendChild(card);
  }

};

printAllKnights("caballeros-list");


const deleteKnight =async (knightkey) =>{
  let response =await fetch(`${BASE_URL}/${knightkey}/.json`,{
    method:"DELETE",
  });
  let data =await response.json();
  printAllKnights("caballeros-list");

};


const modifiedKnight =async(knightkey)=>{
  knightId=knightkey;
  let newResponse = await fetch(`${BASE_URL}/${knightId}/.json`);
  let newData = await newResponse.json();
  let listInput =document.querySelectorAll("form input");
  listInput.forEach(item=>{
    item.value=newData[item.name];
  });

};
///search knight
const KnightSearchInput =document.querySelector("[data-search]");



KnightSearchInput.addEventListener("input",(e)=>{
  const value = e.target.value.toLowerCase();
  let knoghtData =null;
  for (key in knoghts ){
     knoghtData = knoghts[key];
  }


});






