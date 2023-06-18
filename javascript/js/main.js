import Carousel from './carousel.js'

const url = "http://127.0.0.1:5500/data/data.json"

fetch(url)
    .then(response => response.json())
    .then(data => 
        new Carousel(data)
    )
    .catch(error => console.log('error', error));