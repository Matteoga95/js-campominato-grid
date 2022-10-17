// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


//genero la griglia

//mi definsico il numero di celle che voglio creare
const maxCells = 100;
//genero l'array del numero di celle che mi serve
let cellsNumbers = [];

for (let i = 0; i < (maxCells); i++) {
    cellsNumbers.push(i);
}

//mi definisco il container a cui devo aggiungere le celle
const domContainer = document.querySelector(".container");

//chiamo la funzione che genera le celle
generateField(maxCells, domContainer)



//funzione che aggiunge tante celle quante le passo al parametro, e le aggiunge all'elemento della dom che passo al paranmetro
function generateField(max, domEl) {


    //ciclo i numeri di volte che devo creare la cella
    for (let i = 0; i < max; i++) {

        //per ogni ciclo mi definisco l'elemento
        //il numero da passare all'interno della cella è quello che sta ciclando dell'array
        const cellaEl = generateCellMarkup(i + 1)

        //inserisco l'elemento creato nell'elemento della dom passato a parametro
        domEl.insertAdjacentElement('beforeend', cellaEl)


        //adesso qua aggiungo un listener sulla cella con la function  per sistemare la classe active

        cellaEl.addEventListener("click", function () {
            console.log(this.innerText);

            this.classList.toggle("active")        

         })


       
    }



}

//funzione che genera un elemento cella
//passo alla funzione il numero cehe deve essere visualizzato all'interno della cella
function generateCellMarkup(numb) {

    const cellEl = document.createElement('div');
    cellEl.className = "cell";
    cellEl.innerText = numb
    return cellEl;

}

