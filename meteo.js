var cityName = "";

//const heure = doc.querySelector('') choper ou on veut aller pour mettre la donnée 
var heure = document.querySelector('.location-timezone');
const temperature = document.querySelector('.temperature-degree');
const town = document.querySelector('.town');
const humidite = document.querySelector('.humidite');
let icone = document.getElementById('icone');
d = new Date();
localTime = d.getTime();
localOffset = d.getTimezoneOffset() * 60000;
utc = localTime + localOffset;
const dateDuJour = document.querySelector('.date-du-jour');
dateDuJour.textContent = utc;






fetch (`https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=0e17c6d4dd914d96df4210ad61f14c08`)
    .then (res => res.json())
    .then(data => {
        console.log(data);

        console.log(data.timezone);
        town.textContent = data.name;
        heure.textContent = data.timezone;
        temperature.textContent = data.main.temp;
        humidite.textContent = data.main.humidity;
        console.log(data.weather[0].icon);
        icone.setAttribute("src", "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png");
      
    } )

function citySearch(){
    var cityName = document.querySelector('#cityName').value;
    console.log(cityName);
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0e17c6d4dd914d96df4210ad61f14c08`)
        .then (res => res.json())
        .then(data => {
            console.log(data);
            
            town.textContent = data.name;
            heure.textContent = data.timezone;
            temperature.textContent = data.main.temp;
            humidite.textContent = data.main.humidity;
            console.log(data.weather[0].icon);
            icone.setAttribute("src", "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png");
        })
}





// let storage =""; 
// let city = sessionStorage.getItem('clef');

// const temperature = document.querySelector('temperature-degree');

// function citySearch(){
//     city = document.getElementById("ville").value;
//     storage = sessionStorage.setItem('clef', city);
    
// }

// console.log(city);


// const getUsers = async function (){

//     try {
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e17c6d4dd914d96df4210ad61f14c08`)
//         if (response.ok) {
//             let data = await response.json();
//             console.log(data);
//             temperature.textContent = data.main.temp;

        
//         } else {
//             console.error('Retour du serveur : ', response.status)
//             }
//         } catch (e) {
//         console.log(e)
//         }
//     }

// getUsers();







// function valenter(){
//     var ville = document.getElementById("q").value;
    
//     console.log(ville);
// }

// valenter();


// const insertPost = async function (data) {
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=0e17c6d4dd914d96df4210ad61f14c08', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         }, 
//         body: JSON.stringify(data)
//     })
// }

// insertPost ({
//     name: "Paris"
// })