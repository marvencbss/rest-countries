
document.querySelector('#btPais').addEventListener('click',getPais);

async function getPais() {

    const txPais = document.querySelector('#txPais').value;
    const res = await fetch(`https://restcountries.com/v3.1/name/${txPais}`);
    const dados = await res.json();

    const listaEnd = document.querySelector('#lsPais');
    listaEnd.innerHTML =`
    <li><strong><em><u>Official name:</u></em></strong> ${dados[0].name.official}</li>

    <li><strong><em><u>Capital:</u></em></strong>  ${dados[0].capital}</li>

    <li><strong><em><u>Continent:</u></em></strong>  ${dados[0].continents}</li>

    <li><strong><em><u>Border countries:</u></em></strong>  ${dados[0].borders}</li>

    <li><strong><em><u>population:</u></em></strong>  ${dados[0].population}</li>

    <h4>Flag</h4><img src="${dados[0].flags.png}">
    `;
}
