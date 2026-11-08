// 1. La lista delle foto
const immagini = [
  "immagini/montagna1.jpg",
  "immagini/montagna2.jpg",
  "immagini/montagna3.jpg",
  "immagini/montagna4.jpg",
  "immagini/montagna5.jpg"
];

// 2. Partiamo dalla prima foto (indice 0)
let indiceCorrente = 0;

// 3. Colleghiamo gli elementi dal nostro HTML
const imgElemento = document.getElementById("foto-galleria");
const descrizioni = document.querySelectorAll(".testo-descrizione p"); 
const btnPrecedente = document.getElementById("btn-precedente");
const btnSuccessivo = document.getElementById("btn-successivo");

// Funzione per aggiornare sia l'immagine che la descrizione
function aggiornaGalleria() {
  
  imgElemento.src = immagini[indiceCorrente];
  
  // Rimuovi la classe 'attiva' da tutte le descrizioni e assegnala solo a quella corrente
  descrizioni.forEach((desc, indice) => {
    if (indice === indiceCorrente) {
      desc.classList.add("attiva");
    } else {
      desc.classList.remove("attiva");
    }
  });
}

// 4. Quando clicchi sul pulsante "Successivo"
btnSuccessivo.addEventListener("click", function() {
  indiceCorrente++;
  if (indiceCorrente >= immagini.length) {
    indiceCorrente = 0;
  }
  aggiornaGalleria();
});

// 5. Quando clicchi sul pulsante "Precedente"
btnPrecedente.addEventListener("click", function() {
  indiceCorrente--;
  if (indiceCorrente < 0) {
    indiceCorrente = immagini.length - 1;
  }
  aggiornaGalleria();
});