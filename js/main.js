var images = ['../assets/noticia1.jpg', '../assets/noticia2.jpg', '../assets/noticia3.jpg'];
var titles = ['Jujuy, un destino ideal', 'Sube el dolar', '¿Se viene la nieve?'];
var subtitles = ['En esta fecha, jujuy puede ser un excelente destino para vacacionar',
                 'Una vez mas, la subida del dolar genera un gran desorden económico', 
                 'El cambio de clima podría traer una sorpresa inesperada'];
var thumbsUps = [0, 0, 0];
var thumbsDowns = [0, 0, 0];
var currentNews = 0;
var voted = false;

document.addEventListener('DOMContentLoaded', (_event) => {
    changeNewsContext();
    loadNews();
});

function nextNews() {
    currentNews = (currentNews + 1)
    if (currentNews >= images.length) currentNews = 0;
    changeNewsContext();
}

function prevNews() {
    currentNews = (currentNews - 1)
    if (currentNews < 0) currentNews = images.length - 1;
    changeNewsContext();
}

function setBackground() {
    document.getElementById('background-img').style.backgroundImage = 'url(' + images[currentNews] + ')';
}

function setTitle(){
    const title = document.getElementById('news-title');
    title.textContent = titles[currentNews];

}

function setSubtitle(){
    const subtitle = document.getElementById('news-subtitle');
    subtitle.textContent = subtitles[currentNews];
}

function loadNews() {
    const mainTitle = document.getElementById('main-title');
    const mainSubtitle = document.getElementById('main-subtitle');
    mainTitle.textContent = titles[currentNews];
    mainSubtitle.textContent = subtitles[currentNews];
}

function changeNewsContext() {
    setBackground();
    setTitle();
    setSubtitle();
    document.getElementById('thumb-up').textContent = "👍 " + thumbsUps[currentNews];
    document.getElementById('thumb-down').textContent = "👎 " + thumbsDowns[currentNews];
}

function thumbsUp() {
    changeThumbs(thumbsUps, 'thumb-up', '👍 ');
}

function thumbsDown() {
    changeThumbs(thumbsDowns, 'thumb-down', '👎 ');
}

function changeThumbs(thumbs, identifier, textContent) {
    if(voted) return window.alert('Ya votaste esta noticia');
    else {
        thumbs[currentNews] += 1;
        document.getElementById(identifier).textContent = textContent + thumbs[currentNews];
        console.log(voted);
        voted = true;
    }
}
