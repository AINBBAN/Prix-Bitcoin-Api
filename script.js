const url = 'https://blockchain.info/ticker';

function recupererLePrix() {
    const devise = document.getElementById('Devise').value;
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let prix = reponse[devise].last;
                document.querySelector('#price_label').textContent = prix;
                document.querySelector('#price_symbol').textContent = devise;
            } else {
                alert('Un problème est survenu lors de la récupération du prix.');
            }
        }
    };
    console.log('prix actualisé');
}

document.getElementById('Devise').addEventListener('change', recupererLePrix);

setInterval(recupererLePrix, 60000);
recupererLePrix();  // Call the function initially to load the price immediately on page load
