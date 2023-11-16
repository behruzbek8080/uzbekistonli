let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
let wrapper = document.querySelector(".wrapper-img");
let image = document.querySelector("img");
let images = [
    "https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/m5-sedan/2021/Overview/bmw-m5-cs-onepager-gallery-m5-core-02-wallpaper.jpg",
    "https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/m5-sedan/2021/Overview/bmw-m5-cs-onepager-gallery-m5-core-02-wallpaper.jpg",
    "https://imgd.aeplcdn.com/664x374/cw/ec/33136/BMW-M5-Front-view-118983.jpg?wm=0&q=80"
];
let nomer = 0;

function showImage() {
    image.src = images[namber];
}

