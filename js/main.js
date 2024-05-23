var news1 = {
    image: '../assets/news1.jpg',
    title: 'Jujuy, un destino ideal',
    subtitle: 'En esta fecha, Jujuy puede ser un excelente destino para vacacionar',
    body: `Jujuy, una provincia situada en el noroeste de Argentina, se presenta como un destino inigualable para quienes buscan una mezcla perfecta de naturaleza, cultura y aventura. Con su impresionante diversidad geográfica que abarca desde la aridez de la Puna hasta la exuberancia de las yungas, Jujuy ofrece paisajes que parecen sacados de un sueño.

    En esta época del año, los visitantes pueden disfrutar de un clima agradable que invita a explorar cada rincón de esta tierra mágica. La Quebrada de Humahuaca, declarada Patrimonio de la Humanidad por la UNESCO, cautiva con sus cerros multicolores y pintorescos pueblos como Purmamarca, Tilcara y Humahuaca, donde las tradiciones ancestrales aún laten con fuerza.

    Además de sus maravillas naturales, Jujuy es un tesoro cultural. Los mercados artesanales están llenos de colores y texturas, reflejando la rica herencia indígena de la región. La música y la danza folclórica llenan el aire en festivales y celebraciones que muestran la vitalidad y el espíritu de su gente.

    Para los amantes de la aventura, Jujuy no decepciona. Desde caminatas por senderos montañosos hasta paseos en bicicleta y excursiones en 4x4, las opciones son numerosas y emocionantes. No se puede dejar de lado la oportunidad de visitar las Salinas Grandes, un vasto desierto de sal que se extiende hasta donde alcanza la vista, ofreciendo un espectáculo natural único e inolvidable.

    En resumen, Jujuy es un destino que promete una experiencia enriquecedora y diversa. Ya sea por su naturaleza sobrecogedora, su riqueza cultural o sus oportunidades de aventura, esta provincia argentina tiene algo especial para cada viajero. Planificar unas vacaciones en Jujuy es abrir una puerta a la fascinación y al descubrimiento, haciendo de cada visita una aventura memorable.`,
    thumbsUp: 0,
    thumbsDown: 0,
    voted: false
};

var news2 = {
    image: '../assets/news2.jpg',
    title: 'Sube el dólar',
    subtitle: 'Una vez más, la subida del dólar genera un gran desorden económico',
    body: `Una vez más, la subida del dólar ha provocado un considerable desorden económico en varios sectores. El aumento del valor de la divisa norteamericana frente al peso ha generado incertidumbre y preocupación entre los ciudadanos y los empresarios, quienes ven cómo sus costos se incrementan y sus márgenes de ganancia se reducen.

    Los expertos señalan que esta tendencia al alza podría continuar en los próximos meses, lo que podría tener graves consecuencias para la economía del país. La inflación, ya elevada, podría dispararse aún más, afectando especialmente a los sectores más vulnerables de la población. Los precios de los bienes y servicios básicos, como alimentos y combustible, ya han comenzado a reflejar este incremento, agravando la situación para muchas familias.

    El gobierno, por su parte, se enfrenta al desafío de implementar medidas efectivas para controlar esta escalada. Entre las posibles acciones se encuentran la intervención en el mercado cambiario, la implementación de políticas fiscales y monetarias más restrictivas, y la búsqueda de acuerdos internacionales que puedan estabilizar la economía.

    Mientras tanto, los mercados financieros reaccionan con volatilidad ante las noticias de la subida del dólar. Las inversiones en moneda local pierden valor, y muchos optan por refugiarse en activos más seguros o en divisas extranjeras. Esta situación crea un círculo vicioso que dificulta aún más la recuperación económica.

    En conclusión, la subida del dólar representa un reto significativo para la economía del país. Es crucial que tanto el gobierno como los actores económicos trabajen en conjunto para encontrar soluciones que mitiguen los efectos negativos de esta alza y promuevan una mayor estabilidad en el futuro.`,
    thumbsUp: 0,
    thumbsDown: 0,
    voted: false,
};

var news3 = {
    image: '../assets/news3.jpg',
    title: '¿Se viene la nieve?',
    subtitle: 'El cambio de clima podría traer una sorpresa inesperada',
    body: `El cambio de clima podría traer una sorpresa inesperada este año: la posibilidad de una nevada en regiones donde es poco común. Los meteorólogos han estado observando un patrón inusual en las temperaturas y la formación de nubes, lo que sugiere que podríamos estar a punto de experimentar un fenómeno meteorológico raro.

    Las condiciones atmosféricas actuales indican un enfriamiento significativo en varias zonas del país, lo que ha generado expectativas y emoción entre los residentes y los amantes del clima invernal. La nieve, que generalmente se limita a las regiones montañosas, podría descender a altitudes más bajas, cubriendo paisajes urbanos y rurales con un manto blanco.

    Este fenómeno no solo traería alegría a quienes disfrutan de la nieve, sino que también podría tener implicaciones económicas y logísticas. Las autoridades ya están preparándose para posibles interrupciones en el tráfico y la necesidad de equipos de remoción de nieve en áreas no acostumbradas a tales condiciones. Además, el sector turístico podría beneficiarse, ya que muchos querrán aprovechar la oportunidad para disfrutar de actividades invernales sin tener que viajar a destinos tradicionales de esquí.

    Sin embargo, también es importante considerar los posibles desafíos. Las infraestructuras en áreas que rara vez ven nieve podrían no estar preparadas para manejar las bajas temperaturas y la acumulación de hielo, lo que podría llevar a cortes de energía y otros inconvenientes.

    En resumen, el cambio de clima podría traer una sorpresa inesperada con la llegada de la nieve a regiones poco comunes. Mientras muchos esperan con entusiasmo este evento inusual, es crucial que tanto las autoridades como la ciudadanía se preparen adecuadamente para enfrentar los posibles retos que acompañan a este fenómeno meteorológico.`,
    thumbsUp: 0,
    thumbsDown: 0,
    voted: false
};


var news = [news1, news2, news3];
var currentNews = 0;

document.addEventListener('DOMContentLoaded', (_event) => {
    changeNewsContext();
    loadNews();
});

function nextNews() {
    currentNews = (currentNews + 1)
    if (currentNews >= news.length) currentNews = 0;
    changeNewsContext();
}

function prevNews() {
    currentNews = (currentNews - 1)
    if (currentNews < 0) currentNews = news.length - 1;
    changeNewsContext();
}

function setBackground() {
    document.getElementById('background-img').style.backgroundImage = 'url(' + news[currentNews].image + ')';
}

function setTitle(){
    const title = document.getElementById('news-title');
    title.textContent = news[currentNews].title;

}

function setSubtitle(){
    const subtitle = document.getElementById('news-subtitle');
    subtitle.textContent = news[currentNews].subtitle;
}

function setImage(){
    const image = document.getElementById('main-image');
    image.src = news[currentNews].image;
}

function setBody(){
    const body = document.getElementById('news-body');
    body.textContent = news[currentNews].body;

}

function loadNews() {
    setImage();
    setBody();
    const mainTitle = document.getElementById('main-title');
    const mainSubtitle = document.getElementById('main-subtitle');
    mainTitle.textContent = news[currentNews].title;
    mainSubtitle.textContent = news[currentNews].subtitle;
}

function changeNewsContext() {
    setBackground();
    setTitle();
    setSubtitle();
    document.getElementById('thumb-up').textContent = "👍 " + news[currentNews].thumbsUp;
    document.getElementById('thumb-down').textContent = "👎 " + news[currentNews].thumbsDown;
}

function thumbsUp() {
    changeThumbs(news, 'thumb-up', '👍 ');
}

function thumbsDown() {
    changeThumbs(news, 'thumb-down', '👎 ');
}

function changeThumbs(news, identifier, textContent) {
    if(news[currentNews].voted) return window.alert('Ya votaste esta noticia');
    else {
        if(identifier === 'thumb-down'){
            news[currentNews].thumbsDown += 1;
            document.getElementById(identifier).textContent = textContent + news[currentNews].thumbsDown;
        }
        else {
            news[currentNews].thumbsUp += 1;
            document.getElementById(identifier).textContent = textContent + news[currentNews].thumbsUp;
        }
        news[currentNews].voted = true;
    }
}
