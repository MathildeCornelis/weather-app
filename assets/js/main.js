async function catchData()
{
    let tmp = JSON.parse(localStorage.getItem("response"));
    // const response = await fetch(
    //     'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=4e29ee50eda3d88e1433f23cf8536aa4',
    //     {
    //         method: 'GET'
    //     }
    // );
    // let stock = await response.json();
    let stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));
}

document.getElementById('submit').addEventListener('click', function(){catchData()})