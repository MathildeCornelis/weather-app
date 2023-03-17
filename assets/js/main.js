import { key_wheater, key_unsplash } from './config.js'
async function catchData() {
    //recupérer le nom entré 
        let input = document.getElementById('city');
        let inputValue = input.value;
        console.log(inputValue);

    //faire une recherche par rapport au nom
        let city = inputValue;

    
    // let tmp = JSON.parse(localStorage.getItem("response"));
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key_wheater}&units=metric&lang=fr`
    );
    let stock = await response.json();
    // let stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));

    // mettre les infos dan les différents paragraphes
    function createCarte() {
        let div = document.getElementById('one');
        div.style.display = "flex";

        let date = document.getElementsByClassName('date')[0];
        let dateInitiale = stock.list[0].dt_txt;
        let split = dateInitiale.split(' ');
        let splitReverse = split[0].split('-');
        date.textContent = (splitReverse[2] + "-" + splitReverse[1] + "-" + splitReverse[0]);
        console.log(split[1]);

        let nameCity = document.getElementsByClassName('name')[0];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[0];
        tempGen.textContent = Math.round(stock.list[0].main.temp) + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[0];
        tempMin.textContent = Math.round(stock.list[0].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[0];
        tempMax.textContent = Math.round(stock.list[0].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[0];
        desc.textContent = stock.list[0].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[0];
        icon.src = "http://openweathermap.org/img/wn/" + stock.list[0].weather[0].icon + "@2x.png";
    }
    createCarte();

    function createSecondCarte() {
        let div = document.getElementById('two');
        div.style.display = "flex";

        let date = document.getElementsByClassName('date')[1];
        let dateInitiale = stock.list[8].dt_txt;
        let split = dateInitiale.split(' ');
        let splitReverse = split[0].split('-');
        date.textContent = (splitReverse[2] + "-" + splitReverse[1] + "-" + splitReverse[0]);
        console.log(split[1]);
    
        let nameCity = document.getElementsByClassName('name')[1];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[1];
        tempGen.textContent = Math.round(stock.list[8].main.temp) + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[1];
        tempMin.textContent = Math.round(stock.list[8].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[1];
        tempMax.textContent = Math.round(stock.list[8].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[1];
        desc.textContent = stock.list[8].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[1];
        icon.src = "http://openweathermap.org/img/wn/" + stock.list[8].weather[0].icon + "@2x.png";
    }
    createSecondCarte();

    function createThirdCarte() {
        let div = document.getElementById('three');
        div.style.display = "flex";

        let date = document.getElementsByClassName('date')[2];
        let dateInitiale = stock.list[16].dt_txt;
        let split = dateInitiale.split(' ');
        let splitReverse = split[0].split('-');
        date.textContent = (splitReverse[2] + "-" + splitReverse[1] + "-" + splitReverse[0]);
        console.log(split[1]);    
        let nameCity = document.getElementsByClassName('name')[2];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[2];
        tempGen.textContent = Math.round(stock.list[16].main.temp) + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[2];
        tempMin.textContent = Math.round(stock.list[16].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[2];
        tempMax.textContent = Math.round(stock.list[16].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[2];
        desc.textContent = stock.list[16].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[2];
        icon.src = "http://openweathermap.org/img/wn/" + stock.list[16].weather[0].icon + "@2x.png";
    }
    createThirdCarte();

    function createFourthCarte() {
        let div = document.getElementById('four');
        div.style.display = "flex";

        let date = document.getElementsByClassName('date')[3];
        let dateInitiale = stock.list[24].dt_txt;
        let split = dateInitiale.split(' ');
        let splitReverse = split[0].split('-');
        date.textContent = (splitReverse[2] + "-" + splitReverse[1] + "-" + splitReverse[0]);
        console.log(split[1]);
    
        let nameCity = document.getElementsByClassName('name')[3];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[3];
        tempGen.textContent = Math.round(stock.list[24].main.temp) + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[3];
        tempMin.textContent = Math.round(stock.list[24].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[3];
        tempMax.textContent = Math.round(stock.list[24].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[3];
        desc.textContent = stock.list[24].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[3];
        icon.src = "http://openweathermap.org/img/wn/" + stock.list[24].weather[0].icon + "@2x.png";
    }
    createFourthCarte();

    function createFifthCarte() {
        let div = document.getElementById('five');
        div.style.display = "flex";

        let date = document.getElementsByClassName('date')[4];
        let dateInitiale = stock.list[32].dt_txt;
        let split = dateInitiale.split(' ');
        let splitReverse = split[0].split('-');
        date.textContent = (splitReverse[2] + "-" + splitReverse[1] + "-" + splitReverse[0]);
        console.log(split[1]);
    
        let nameCity = document.getElementsByClassName('name')[4];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[4];
        tempGen.textContent = Math.round(stock.list[32].main.temp) + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[4];
        tempMin.textContent = Math.round(stock.list[32].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[4];
        tempMax.textContent = Math.round(stock.list[32].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[4];
        desc.textContent = stock.list[32].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[4];
        icon.src = "http://openweathermap.org/img/wn/" + stock.list[32].weather[0].icon + "@2x.png";
    }
    createFifthCarte();

    input.value = "";
};

document.getElementById('submit').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        catchData();
    }
    else {
        console.log('erreur');
    }
    
});

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    catchData();
    apiUnsplash();
});

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    catchData();
    apiUnsplash();
});

async function apiUnsplash() {
    
    //recupérer le nom entré 
        let input = document.getElementById('city');
        let inputValue = input.value;
        console.log(inputValue);

    //faire une recherche par rapport au nom
        let city = inputValue;

    const apiUn = await fetch(
        `https://api.unsplash.com/search/photos?&query=${city}&client_id=${key_unsplash}&orientation=portrait`
    );
    let imageApi = await apiUn.json();
    localStorage.setItem('apiUn', JSON.stringify(imageApi));
    console.log(imageApi);

    let div = document.getElementById('one');
    div.style.background = "url(" + imageApi.results[0].urls.regular + ")";
    div.style.setProperty('background-size', 'cover');
    div.style.filter = 'grayscale(95%)';
    div.style.backdropFilter = 'blur(20px)';

    let divtwo = document.getElementById('two');
    divtwo.style.background = "url(" + imageApi.results[0].urls.small + ")";
    divtwo.style.setProperty('background-size', 'cover');
    divtwo.style.filter = 'grayscale(95%)';
    divtwo.style.backdropFilter = 'blur(20px)';


    let divthree = document.getElementById('three');
    divthree.style.background = "url(" + imageApi.results[0].urls.small + ")";
    divthree.style.setProperty('background-size', 'cover');
    divthree.style.filter = 'grayscale(95%)';
    divthree.style.backdropFilter = 'blur(20px)';


    let divfour = document.getElementById('four');
    divfour.style.background = "url(" + imageApi.results[0].urls.small + ")";
    divfour.style.setProperty('background-size', 'cover');
    divfour.style.filter = 'grayscale(95%)';
    divfour.style.backdropFilter = 'blur(20px)';


    let divfive = document.getElementById('five');
    divfive.style.background = "url(" + imageApi.results[0].urls.small + ")";
    divfive.style.setProperty('background-size', 'cover');
    divfive.style.filter = 'grayscale(95%)';
    divfive.style.backdropFilter = 'blur(20px)';

}