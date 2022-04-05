const seconds = document.querySelector('.second-hand')
const minutes = document.querySelector('.min-hand')
const hours = document.querySelector('.hour-hand')

const getDate = () => {
    const date = new Date()
    
    const timeSeconds = date.getSeconds()
    const secondsDegrees = ((timeSeconds / 60) * 360) + 90
    seconds.style.transform = `rotate(${secondsDegrees}deg)`

    const timeMinutes = date.getMinutes()
    const minutesDegrees = ((timeMinutes / 60) * 360) + ((timeSeconds / 60) * 6) + 90
    minutes.style.transform = `rotate(${minutesDegrees}deg)`

    const timeHours = date.getHours()
    const hoursDegrees = ((timeHours / 12) * 360) + ((timeMinutes / 60) * 30) + 90
    hours.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(getDate, 1000)

getDate()