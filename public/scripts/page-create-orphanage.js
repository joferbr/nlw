// Create map
const map = L.map("mapid").setView([-19.7416068, -47.8934006], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove marker
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // console.log('esta funcionando') testar no inspector
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  //console.log(event)
  //console.log(event.currentTarget)
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // retirar a classe .active dos botões
  // forma mais enxuta
  /* document.querySelectorAll('.button-select button')
  .forEach( button => button.classList.remove('active')) */

  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // colocar a class .active nesse botão clicado
  const input = document.querySelector('[name="open_on_weekends"]');
  //console.log(input)

  // verificar se sim ou não
  input.value = button.dataset.value;
}
/*
function validate(event) {

  // Validar se lat e lng estão preenchidos
  const needsLatAndLng = true

  if(needsLatAndLng) {
    event.preventDefault()
    alert('Selecione a localização no mapa')
  }
  
}*/
