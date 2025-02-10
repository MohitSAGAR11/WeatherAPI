//http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=Paris&aqi=no
const tempratureField = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')
const timeAndDateField = document.querySelector('.time_location span')
const locationField = document.querySelector('.time_location p ')
const conditionIconField = document.querySelector('.weather_condition img')
const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')

async function fetchData(city) {
    let endpoint = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${city}&aqi=no`

    const response = await fetch(endpoint);
    const data = await response.json();
    // console.log(data);

    let countryName = data.location.country;
    let cityName = data.location.name;
    let TimeAndDate = data.location.localtime;
    let tempC = data.current.temp_c;
    let condition = data.current.condition.text;
    let conditionIcon = data.current.condition.icon;

    console.log(countryName);
    console.log(cityName);
    console.log(TimeAndDate);
    console.log(tempC);
    console.log(condition);
    console.log(conditionIcon);

    updateFields(cityName , TimeAndDate , tempC , condition , conditionIcon);

}
let target = 'London';

form.addEventListener('submit', searchTarget);


function searchTarget(e) {
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
}

fetchData(target);

function updateFields(location , tandD , temp , condition , conditionIcon){
    tempratureField.innerText = temp
    locationField.innerText = location
    timeAndDateField.innerText = tandD
    conditionField.innerText = condition
    conditionIconField.src = conditionIcon
 
 }
