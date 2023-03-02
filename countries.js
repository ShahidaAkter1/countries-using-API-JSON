
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    // .then(data => showData(data))//or niche then
    .then((data) => {
        console.log(data);
        showData(data.slice(0,9));
    })
    .catch((error) => {
        console.log(error);
    })
};

const showData = (countries) =>{
    // console.log(countries);
    const Container=document.getElementById('country-info');
    Container.innerHTML = "";
    countries.forEach(country => {
        // console.log(country);
       
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
      
      <label onclick="showSingleCountry('${country.cca2}')" class="btn btn-primary" for="my-modal-3" class="btn">Show Details</label>
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

const showAllDataTogether = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    // .then(data => showData(data))//or niche then
    .then((data) => {
        console.log(data);
        showData(data);
    })
};

const showSingleCountry = (id)=>{
    // console.log(id);
    const  URL = `https://restcountries.com/v3.1/alpha/${id}`;
    // console.log(URL);
    fetch(URL)
    .then((res)=> res.json())
    .then((data) => console.log(data[0]))
};

// const showSingleCountryDataModel = (value) =>{
//     // console.log(value);
//     const container=document.getElementById('modal-info');
//     const div=document.createElement('div');
//     div.classList.add("modal");
//     div.innerHTML=`
//     <div class="modal-box relative">
//     <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
//     <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
// </div>
//    `;
//     container.appendChild(div);
// };

const showSingleCountryDataModal = (value) => {
    const container = document.getElementById("modal-info");
    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
    
    <div class="modal-box relative">
    <label
      for="my-modal-3"
      class="btn btn-sm btn-circle absolute right-2 top-2"
      >✕</label
    >
    <img src="${value.flags.png}" alt="">
    <h3 class="text-lg font-bold">
      ${value.name.common}
    </h3>
    <p class="py-4">
      Population : ${value.population}
    </p>
  </div>
    `;
    container.appendChild(div);
  };