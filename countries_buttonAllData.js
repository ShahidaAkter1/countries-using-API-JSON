
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    // .then(data => showData(data))//or niche then
    .then((data) => {
        console.log(data);
        showData(data);
    })
    .catch((error) => {
        console.log(error);
    })
};

const showData = (countries) =>{
    // console.log(countries);
    countries.slice(0,9).forEach(country => { //.slice(0,9)ata dile 9ta data dhekhabe.
        // console.log(country.name.population);
        const Container=document.getElementById('country-info');
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card h-96 w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button onclick="showDetailes('${country.cca2}')" class="btn btn-primary">Detailes</button>
    </div>
  </div>
</div>
        `;
        Container.appendChild(div);
    });
}

const showDetailes = (id) =>{
    // console.log(id);
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))
};

loadData();

