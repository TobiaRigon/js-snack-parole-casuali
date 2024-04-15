// stampa in console una frase di N parole generate da un' API

const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/word';
const nParole = 5;
let frase = '';

let result = document.getElementById('result');

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
        for(let i = 0; i < nParole; i++){
            frase += await creaParola() + ' ';
        }
        console.log(frase);
        return frase;
    };
    async function stampaFrase(){
        let text = await creaFrase();
        result.innerText = text;
    };
    stampaFrase();
   
   

    


