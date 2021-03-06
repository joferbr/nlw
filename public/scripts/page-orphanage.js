const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollwheelZoom: false,
  zoomControl: false,
};

// Get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// Create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
// ao inves de {icon: icon} quando o nome da propriedade e variavel são os mesmos

L.marker([lat, lng], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  /* console.log("cliquei no botao") */
  const button = event.currentTarget;
  console.log(button.children);

  /* Remover todas as classes .active */
  const buttons = document.querySelectorAll(".images button");
  // console.log(buttons) para testar
  // buttons.forEach((button) => { button.classList.remove("active") }) alternativa ao codigo abaixo
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  /* selecionar a imagem clicada */
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  /* atualizar o container de imagem */
  imageContainer.src = image.src;

  /* adicionar a classe .active para este botao */
  button.classList.add("active");
}
