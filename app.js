
let lon;
let lat;
const apiKey = process.env.API_KEY;


// Declaración de elementos HTML
let temperaturaValor = document.getElementById("temperatura-valor");
let temperaturaDescripcion = document.getElementById("temperatura-descripcion");
let ubicacion = document.getElementById("ubicacion");
let calidadAire = document.getElementById("calidad-aire");
let iconoAnimado = document.getElementById("icono-animado");
let iconoAire = document.getElementById("icono-aire");
let vientoVelocidad = document.getElementById("viento-velocidad");
let vientoDireccion = document.getElementById("viento-direccion");
let masInformacion = document.getElementById("mas-informacion-aire");
let masInformacionTemp = document.getElementById("mas-informacion-temp");
let cardInfoLista = document.getElementById("card-info-lista");
let cardInfoListaTemp = document.getElementById("card-info-lista-temp");
let cardTemp = document.getElementById("caja1");
let cardAire = document.getElementById("caja4");
let iconoVientoDireccion = document.getElementById("icono-viento-direccion");

// Informacion adicional aire

let infoCo = document.getElementById("info-co");
let infoNo = document.getElementById("info-no");
let infoNo2 = document.getElementById("info-no2");
let infoO3 = document.getElementById("info-o3");
let infoSo2 = document.getElementById("info-so2");
let infoPm25 = document.getElementById("info-pm2-5");
let infoPm10 = document.getElementById("info-pm10");
let infoNh3 = document.getElementById("info-nh3");

// informacion adicional Temperatura
let maxTemp = document.getElementById("max-temp");
let minTemp = document.getElementById("min-temp");
let humedad = document.getElementById("humedad");
let presion = document.getElementById("presion");
let sensacion = document.getElementById("sensacion");

let infoVisible = false;
let infoVisibleTemp = false;

// Añadir informacion de la Calidad del aire
masInformacion.addEventListener("click", function() {
    if (infoVisible === true) {
        infoVisible = false;
        cardInfoLista.classList.remove("card-info-lista-visible");
        cardAire.classList.remove("card-aire-ampliada");
        cardAire.classList.add("card-aire-reducida");
    } else {
        infoVisible = true;
        cardInfoLista.classList.add("card-info-lista-visible");
        cardAire.classList.add("card-aire-ampliada");
        cardAire.classList.remove("card-aire-reducida");
    }
});

// Añadir informacion de la Temperatura

masInformacionTemp.addEventListener("click", function() {
    if (infoVisibleTemp === true) {
        infoVisibleTemp = false;
        cardInfoListaTemp.classList.remove("card-info-lista-temp-visible");
        cardTemp.classList.remove("card-temp-ampliada");
        cardTemp.classList.add("card-temp-reducida");
    } else {
        infoVisibleTemp = true;
        cardInfoListaTemp.classList.add("card-info-lista-temp-visible");
        cardTemp.classList.add("card-temp-ampliada");
        cardTemp.classList.remove("card-temp-reducida");
    }
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
        lon = posicion.coords.longitude;
        lat = posicion.coords.latitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
        const urlPolucion = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        // ubicación por ciudad
        // const urlC = `https://api.openweathermap.org/data/2.5/weather?q=mardelplata&appid=982720c8a3be9d384303bf34920ad717`
        console.log(url);
        console.log(urlPolucion);
        fetch(urlPolucion)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // calidadAire.textContent = data.main.aqi
                switch (data.list[0].main.aqi) {
                    case 1:
                        calidadAire.textContent = "Buena";
                        iconoAire.src = "img/like.png";
                        // iconoAire.classList.add("buena-icono")
                        iconoAire.setAttribute("id", "buena-icono");
                        calidadAire.classList.add("buena");
                        break;
                    case 2:
                        calidadAire.textContent = "Aceptable";
                        iconoAire.src = "img/like.png";
                        iconoAire.setAttribute("id", "aceptable-icono");
                        calidadAire.classList.add("aceptable");
                        break;
                    case 3:
                        calidadAire.textContent = "Moderada";
                        iconoAire.src = "img/regular.png";
                        iconoAire.setAttribute("id", "moderada-icono");
                        calidadAire.classList.add("moderada");
                        break;
                    case 4:
                        calidadAire.textContent = "Pobre";
                        iconoAire.src = "img/dislike.png";
                        iconoAire.setAttribute("id", "pobre-icono");
                        calidadAire.classList.add("pobre");
                        break;
                    case 5:
                        calidadAire.textContent = "Muy Pobre";
                        iconoAire.src = "img/dislike.png";
                        iconoAire.setAttribute("id", "muy-pobre-icono");
                        calidadAire.classList.add("muy-pobre");
                        break;
                    default:
                        calidadAire.textContent = "---";
                }

                // Rellenar información de los componentes del aire

                infoCo.textContent = data.list[0].components.co;
                infoNo.textContent = data.list[0].components.no;
                infoNo2.textContent = data.list[0].components.no2;
                infoO3.textContent = data.list[0].components.o3;
                infoSo2.textContent = data.list[0].components.so2;
                infoPm25.textContent = data.list[0].components.pm2_5;
                infoPm10.textContent = data.list[0].components.pm10;
                infoNh3.textContent = data.list[0].components.nh3;

                console.log(data.list[0].main.aqi);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let temp = Math.round(data.main.temp);
                temperaturaValor.textContent = `${temp} ºC`;
                let desc = data.weather[0].description;

                // const palabras = desc.split(" ");
                // const descPalabras = palabras.map((palabra) => {
                //     return palabra[0].toUpperCase() + palabra.substring(1);
                // }).join(" ");
                const descPalabras = desc[0].toUpperCase() + desc.substring(1);

                temperaturaDescripcion.textContent = descPalabras;

                ubicacion.textContent = data.name;
                maxTemp.textContent = data.main.temp_max;
                minTemp.textContent = data.main.temp_min;
                if (data.main.humidity >= 60) {
                    humedad.textContent = data.main.humidity + "% (alta)";
                } else if (data.main.humidity >= 30 && data.main.humidity <= 60) {
                    humedad.textContent = data.main.humidity + "% (adecuada)";
                } else {
                    humedad.textContent = data.main.humidity + "% (baja)";
                }
                sensacion.textContent = data.main.feels_like;
                if (data.main.pressure >= 1013.25) {
                    presion.textContent = data.main.pressure + "hPa (alta)";
                } else {
                    presion.textContent = data.main.pressure + "hPa (baja)";
                }

                vientoVelocidad.textContent = `${data.wind.speed} m/s`;
                vientoDireccion.textContent = `${data.wind.deg}º`;

                if (data.wind.deg >= 337 || data.wind.deg <= 22.5) {
                    iconoVientoDireccion.src = "img/norte.png";
                } else if (data.wind.deg > 22.5 && data.wind.deg <= 67.5) {
                    iconoVientoDireccion.src = "img/noreste.png";
                } else if (data.wind.deg > 67.5 && data.wind.deg <= 112.5) {
                    iconoVientoDireccion.src = "img/este.png";
                } else if (data.wind.deg > 112.5 && data.wind.deg <= 157.5) {
                    iconoVientoDireccion.src = "img/sureste.png";
                } else if (data.wind.deg > 157.5 && data.wind.deg <= 202.5) {
                    iconoVientoDireccion.src = "img/sur.png";
                } else if (data.wind.deg > 202.5 && data.wind.deg <= 247.5) {
                    iconoVientoDireccion.src = "img/suroeste.png";
                } else if (data.wind.deg > 247.5 && data.wind.deg <= 292.5) {
                    iconoVientoDireccion.src = "img/oeste.png";
                } else {
                    iconoVientoDireccion.src = "img/noroeste.png";
                }

                console.log(data.weather[0].main);
                switch (data.weather[0].main) {
                    case "Clear":
                        iconoAnimado.src = "animated/day.svg";
                        console.log("Limpio");
                        break;
                    case "Clouds":
                        iconoAnimado.src = "animated/cloudy-day-1.svg";
                        console.log("Nubes");
                        break;
                    case "Thunderstorm":
                        iconoAnimado.src = "animated/thunder.svg";
                        console.log("Tormenta");
                        break;
                    case "Drizzle":
                        iconoAnimado.src = "animated/rainy-2.svg";
                        console.log("Xirimiri");
                        break;
                    case "Rain":
                        iconoAnimado.src = "animated/rainy-7.svg";
                        console.log("Lluvia");
                        break;
                    case "Snow":
                        iconoAnimado.src = "animated/snowy-6.svg";
                        console.log("Nieve");
                        break;
                    case "Atmosphere":
                        iconoAnimado.src = "animated/weather.svg";
                        console.log("Atmosfera");
                        break;
                    default:
                        iconoAnimado.src = "animated/cloyd-day-1.svg";
                        console.log("Por defecto");
                }

                // Para iconos estáticos
                // let iconCode = data.weather[0].icon
                // const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
                // console.log(urlIcon)

                // Para iconos animados
            })
            .catch((error) => {
                console.log(error);
            });
    });
}
