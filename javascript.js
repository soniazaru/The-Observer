console.log('funziono')

// chiamo i due div
let divGiornoEl = document.getElementById('giorno');
let divOraEl = document.getElementById('ora');

setInterval(function(){

    // data e ora all'interno della navbar
    let giorno = new Date();
    
    // sostituisce la data
    divGiornoEl.innerHTML = giorno.toLocaleDateString();
    //console.log(giorno.toLocaleDateString())

    // sostituisce l'ora
    divOraEl.innerHTML = giorno.toLocaleTimeString();
    //console.log(giorno.toLocaleTimeString())

}, 1000);

let ricerca = function(query) {

    //chiamo tutte le notizie all'interno della pagina
    let notizie = document.getElementsByClassName('notizia');

    for(/*ciclo sulle notizie*/ i = 0; i < notizie.length ; i++ ) {

        // prendi il testo della notizia con - notizie[i].innerText
        let testo = notizie[i].innerText;

        // vedi se il testo contiene query - testo.includes(query)
        if(testo.includes(query) == true) {
            notizie[i].style.display = 'block';
            // se sì, div visibile
            
        } else {
            // se no, div display none
            notizie[i].style.display = 'none';
        };
        
    };

};

// DETECT EVENT

let buttonEl = document.getElementById("cerca");

buttonEl.onkeyup = function( event ) {
    console.log(event.target.value);
    ricerca(event.target.value);
};

$('.carosello').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
});
