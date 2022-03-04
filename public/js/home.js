const productContainer = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let conatinerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += conatinerWidth;
        console.log(item.scrollLeft);
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= conatinerWidth;
        console.log(item.scrollLeft);
    })

})

var c = 1;
setInterval(() => {
    document.getElementById('radio' + c).checked = true;
    c++;
    if (c > 4) {
        c = 1;
    }
}, 5000);

// countdown

const countdown = () => {
    const countDate = new Date('Mar 17,2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textday = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textday;
    document.querySelector('.hour').innerText = texthour;
    document.querySelector('.minute').innerText = textminute;
    document.querySelector('.second').innerText = textsecond;



};

setInterval(countdown, 1000);