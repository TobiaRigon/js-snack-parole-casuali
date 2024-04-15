const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/word';

let result = document.getElementById('result');
let nParole = document.getElementById('n_parole');
const createButton = document.getElementById('send');



console.log(result)
//effettua chiamata axios, inserisci la risposta nell array, per Nvolte

    function creaParola() {
    return axios.get(apiUrl)
        .then((response) => {
            return String(response.data.response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    async function creaFrase(){
        let frase = '';
        for(let i = 0; i < nParole.value ; i++){
            frase += await creaParola() + ' ';
        }
        return frase;
    };

    async function stampaFrase(){
        let text = await creaFrase();
        result.innerText = text;
    };
    

    createButton.addEventListener('click', function(){
        stampaFrase();
    } );
   
   

    


