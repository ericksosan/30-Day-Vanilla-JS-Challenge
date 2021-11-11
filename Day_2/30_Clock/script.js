const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hourV = document.querySelector('.hourV');
const minV = document.querySelector('.minV');
const secondV = document.querySelector('.secondV');

const ampm = document.querySelector('.AM-PM'); 

const alarma = document.querySelector('audio');
// let audio = new Audio("audio.wav");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds(); 
    const min = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((min / 60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    reloj(hour, minDegrees, secondsDegrees);
    // console.log(secondsDegrees);
    // console.log(minDegrees);
    // console.log(hourDegrees);
}

setInterval(setDate, 1000);


function reloj(hora, minutos, segundos) {

    let h = ((hora * 3600)/ 3600);
    let m = ((minutos - 90) / 60) * 10;
    console.log(m);
    
    if(((h * 3600)/ 3600) < 10){
        hourV.innerHTML = `0${((h * 3600)/ 3600) + 12 - 12}`;
    }else{
        hourV.innerHTML = `0${((h* 3600)/ 3600) - 12}`;
    }
    
    if(((h * 3600)/ 3600) < 10){
        hourV.innerHTML = `0${((h * 3600)/ 3600) + 12 - 12}`;
    }

    if(((minutos - 90) / 60) * 10 < 10){
        minV.innerHTML = `0${((minutos - 90) / 60) * 10}`;
    }
    else{
        minV.innerHTML = `${((minutos - 90) / 60) * 10}`;
    }


    if(((segundos * 60) / 360) - 15 < 10){
        secondV.innerHTML = `0${((segundos * 60) / 360) - 15}`;
    }else{
        secondV.innerHTML = `${((segundos * 60) / 360) - 15}`;
    }

    if(h <= 12){
        ampm.innerHTML = 'a. m.';
    }else{
        ampm.innerHTML = 'p. m.'
    }

    if(m === 60){
        alarma.play();
    }
}
