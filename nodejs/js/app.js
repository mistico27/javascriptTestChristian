const BASE_URL = `https://myfirebase-25g-default-rtdb.firebaseio.com`;

let petObject = {};
let petId = null;

const savePet = async (pet, petId) => {
    if (petId) {
        let response = await fetch(`${BASE_URL}/pets/${petId}/.json`, {
            method: "PUT",
            body: JSON.stringify(pet),
        });
        let data = await response.json();
        return data
    } else {
        let response = await fetch(`${BASE_URL}/pets/.json`, {
            method: "POST",
            body: JSON.stringify(pet),
        });
        let data = await response.json();
        return data;
    }
};

document.getElementById("save-pet").addEventListener("click", async (event) => {
    event.preventDefault();
    document.querySelectorAll("#pet-form input").forEach((item) => {
        petObject[item.name] = item.value
    })
    let response = await savePet(petObject, petId);
    if (response) {
        printAllPets("pet-list");
    }
    petId = null;
    cleanForm()
});

const cleanForm = () => {
    let inputs = document.querySelectorAll("#pet-form input");
    inputs.forEach ( item => item.value = "")
}

const createPetCard = (petData, petKey) => {
  let { species, breed, origin, picture } = petData;
  let cardCol = document.createElement("div");
  cardCol.classList.add("col");

  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("pet-card", "card", "mb-3");

  let cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");

  let imageCol = document.createElement("div");
  imageCol.classList.add("col-md-4");

  let cardPicture = document.createElement("img");
  cardPicture.classList.add("card-picture");
  cardPicture.setAttribute("src", picture);

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
  let cardTitleText = document.createTextNode(`${species} ${breed}`);
  cardTitle.append(cardTitleText);

  let cardYear = document.createElement("p");
  cardYear.classList.add("card-text");
  let yearText = document.createTextNode(origin);
  cardYear.append(yearText);

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add(
    "d-flex",
    "justify-content-between",
    "flex-column",
    "flex-md-row",
    "gap-3"
  );

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  let deleteText = document.createTextNode("Borrar");
  deleteButton.append(deleteText);
  deleteButton.addEventListener("click", () => {
    deletePet(petKey);
  });

  let modifiedButton = document.createElement("button");
  modifiedButton.classList.add("btn", "btn-primary");
  let modifiedText = document.createTextNode("Modificar");
  modifiedButton.append(modifiedText);
  modifiedButton.addEventListener("click", () => {
  modifiedPet(petKey);
  });

  let detailButton = document.createElement("button");
  detailButton.classList.add("btn", "btn-warning");
  let detailText = document.createTextNode("Detalle");
  detailButton.append(detailText);
  detailButton.addEventListener("click", () => {
  window.location.replace(`./detailedView.html?petId=${petKey}`);
  });

  buttonWrapper.append(deleteButton, modifiedButton, detailButton);

  cardBody.append(cardTitle, cardYear, buttonWrapper);

  contentCol.append(cardBody);

  imageCol.append(cardPicture);

  cardRow.append(imageCol, contentCol);

  cardWrapper.append(cardRow);

  cardCol.append(cardWrapper);

  return cardCol;
};

const getAllPets = async () => {
  let response = await fetch(`${BASE_URL}/pets/.json`);
  let data = await response.json();
  return data;
};

const printAllPets = async (listId) => {
  let pets = await getAllPets();
  console.log(pets);
  let listWrapper = document.getElementById(listId);
  while (listWrapper.firstChild) {
    listWrapper.removeChild(listWrapper.firstChild);
  }
  for (key in pets) {
    let petData = pets[key];
    let card = createPetCard(petData, key);
    listWrapper.appendChild(card);
  }
};

printAllPets("pet-list");

const deletePet = async (petKey) => {
  let response = await fetch(`${BASE_URL}/pets/${petKey}/.json`, {
    method: "DELETE",
  });
  let data = await response.json();
  printAllPets("pet-list");
};

const modifiedPet = async (petKey) => {
    petId = petKey;
    let newResponse = await fetch(`${BASE_URL}/pets/${petKey}/.json`);
    let dataNew = await newResponse.json();

    let listInput = document.querySelectorAll("form input")
    listInput.forEach(item => {
        item.value = dataNew[item.name]
    })
};
