let params = new URLSearchParams(document.location.search)
let petId = params.get("petId");

const getPetInfo = async(id) => {
    let response = await fetch(`https://myfirebase-25g-default-rtdb.firebaseio.com/pets/${id}.json`)
    let data = await response.json()
    return data
}


const printCard = async() => {
    let petInfo = await getPetInfo(petId)
    console.log(petInfo);
    let html = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${petInfo.picture} class="img-fluid rounded-start" style="height:100%" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${petInfo.species} ${petInfo.breed}</h5>
          <p class="card-text">Origin: ${petInfo.origin}</p>
          <button class="btn btn-primary" id="backButton">Regresar</button>
        </div>
      </div>
    </div>
    </div>`
    
    let divFather = document.getElementById('cardWrapper')
    divFather.innerHTML = html

    let backButton = document.getElementById("backButton")
    backButton.addEventListener('click', (event) => {
    window.location.replace("./index.html");
})
}

printCard()


