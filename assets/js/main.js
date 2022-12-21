async function catchData() {
    let tmp = JSON.parse(localStorage.getItem("response"));
    // const response = await fetch(
    //     'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=4e29ee50eda3d88e1433f23cf8536aa4&units=metric&lang=fr',
    //     {
    //         method: 'GET'
    //     }
    // );
    // let stock = await response.json();
    let stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));
    
    // mettre les infos dan les différents paragraphes
    function createCarte() {

        let date = document.getElementsByClassName('date')[0];
        date.textContent = stock.list[0].dt_txt;
    
        let nameCity = document.getElementsByClassName('name')[0];
        nameCity.textContent = stock.city.name;
        
        let tempGen = document.getElementsByClassName('tempGen')[0];
        tempGen.textContent = moyenne() + '°C';
    
        let tempMin = document.getElementsByClassName('tempMin')[0];
        tempMin.textContent = Math.round(stock.list[0].main.temp_min) + '°C';
    
        let tempMax = document.getElementsByClassName('tempMax')[0];
        tempMax.textContent = Math.round(stock.list[0].main.temp_max) + '°C';
    
        let desc = document.getElementsByClassName('desc')[0];
        desc.textContent = stock.list[0].weather[0].description;
    
        let icon = document.getElementsByClassName('icon')[0];
        icon.textContent = stock.list[0].weather[0].icon;
    }
    createCarte();

    //faire la moyenne des t°
    function moyenne() {
        let somme = 0;
        let total = 0;

        for (let i = 0; i < stock.list.length; i++) {
            let temperatures = stock.list[i].main.temp;

            somme += temperatures;

            total++;
        }

        let moyenne = Math.round(somme / total);

        return moyenne;
    }
    



    // function createSecondCarte() {

    //     let date = document.getElementsByClassName('date')[1];
    //     date.textContent = stock.list[4].dt_txt;
    
    //     let nameCity = document.getElementsByClassName('name')[1];
    //     nameCity.textContent = stock.city.name;
        
    //     let tempGen = document.getElementsByClassName('tempGen')[1];
    //     tempGen.textContent = stock.list[4].main.temp;
    
    //     let tempMin = document.getElementsByClassName('tempMin')[1];
    //     tempMin.textContent = stock.list[4].main.temp_min;
    
    //     let tempMax = document.getElementsByClassName('tempMax')[1];
    //     tempMax.textContent = stock.list[4].main.temp_max;
    
    //     let desc = document.getElementsByClassName('desc')[1];
    //     desc.textContent = stock.list[4].weather[0].description;
    
    //     let icon = document.getElementsByClassName('icon')[1];
    //     icon.textContent = stock.list[4].weather[0].icon;
    // }
    // createSecondCarte();

    // function createThirdCarte() {

    //     let date = document.getElementsByClassName('date')[2];
    //     date.textContent = stock.list[4].dt_txt;
    
    //     let nameCity = document.getElementsByClassName('name')[1];
    //     nameCity.textContent = stock.city.name;
        
    //     let tempGen = document.getElementsByClassName('tempGen')[1];
    //     tempGen.textContent = stock.list[4].main.temp;
    
    //     let tempMin = document.getElementsByClassName('tempMin')[1];
    //     tempMin.textContent = stock.list[4].main.temp_min;
    
    //     let tempMax = document.getElementsByClassName('tempMax')[1];
    //     tempMax.textContent = stock.list[4].main.temp_max;
    
    //     let desc = document.getElementsByClassName('desc')[1];
    //     desc.textContent = stock.list[4].weather[0].description;
    
    //     let icon = document.getElementsByClassName('icon')[1];
    //     icon.textContent = stock.list[4].weather[0].icon;
    // }
    
};

document.getElementById('submit').addEventListener('click', function(){catchData()})

