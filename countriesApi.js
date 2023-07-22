document.querySelector('#btPais').addEventListener('click',getPais);

async function getPais() {

    const txPais = document.querySelector('#txPais').value;
    const res = await fetch(`https://restcountries.com/v3.1/name/${txPais}`);
    const dados = await res.json();

    const listaEnd = document.querySelector('#lsPais');

    listaEnd.innerHTML =`
    <strong><em><u>Official name:</u></em></strong> ${dados[0].name.official}<p>

    <strong><em><u>Capital:</u></em></strong>  ${dados[0].capital}<p>

    <strong><em><u>Continent:</u></em></strong>  ${dados[0].continents}<p>

    <strong><em><u>Border countries (abreviated):</u></em></strong>  ${dados[0].borders}<p>

    <strong><em><u>population:</u></em></strong>  ${dados[0].population}<p>

    <strong><em><u>timezones:</u></em></strong>  ${dados[0].timezones}<p>

    <strong><em><u>Start of week:</u></em></strong>  ${dados[0].startOfWeek}<p>
    
    <a href="https://pt.wikipedia.org/wiki/${txPais}">Learn more here</a>

    <h4>Flag:</h4><img src="${dados[0].flags.png}"> <br>
    `;
}
