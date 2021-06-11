const inputEl = document.querySelector('input')
const citynameEl = document.querySelector('.cityname')
const cellciusEl = document.querySelector('.cell')
const aboutEl = document.querySelector('.weather')
const minmaxEl = document.querySelector('.minmax')
const body = document.querySelector('body')

const api = {
    key:'f75988e551e919f050f4387d7e8b6866',
    base:'https://api.openweathermap.org/data/2.5/'
}

inputEl.addEventListener('keypress', (e)=>{
    if(e.keyCode == 13){
        getresult(inputEl.value)
        
    }
})

function getresult(cityname){
    fetch(`${api.base}weather?q=${cityname}&units=metric&appid=${api.key}`)
    .then((weather) =>{
        return weather.json()
    })
    .then(showresult)
}

function showresult(weather){
    console.log(weather);
    citynameEl.textContent =`${weather.name},${weather.sys.country}`
    cellciusEl.innerHTML =`${Math.round(weather.main.temp)} &#8451`
    aboutEl.textContent =`${weather.weather[0].main}`
    minmaxEl.innerHTML =`${Math.floor(weather.main.temp_min)} &#8451 / ${Math.floor(weather.main.temp_max)} &#8451`

    body.style.backgroundImage =`url('https://source.unsplash.com/1920x900/?${weather.weather[0].main}');` 
    body.style.backgroundPosition ='center'
    body.style.minHeight ='100vh'
    body.style.backgroundSize ='center'
    

}






