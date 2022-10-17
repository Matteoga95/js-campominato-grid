// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


//genero la griglia

//mi definsico il numero di celle che voglio creare
const maxCells = 100
//genero l'array del numero di celle che mi serve
let cellsNumbers =[]

for (let i = 1; i< (maxCells + 1) ;i++){
    cellsNumbers.push(i)
}



//funzione che genera un elemento cella
function generateCellMarkup() {

    const cellEl = document.createElement('div')
    cellEl.className = "cell";

    return cellEl

}

