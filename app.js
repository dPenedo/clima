let lon;
let lat;
let temperaturaValor = document.getElementById("temperatura-valor");
let temperaturaDescripcion = document.getElementById("temperatura-descripcion");

let ubicacion = document.getElementById("ubicacion");
let maxTemp = document.getElementById("max-temp")
let minTemp = document.getElementById("min-temp")
let calidadAire = document.getElementById("calidad-aire")
let iconoAnimado = document.getElementById("icono-animado");
const apiKey = "982720c8a3be9d384303bf34920ad717"

let vientoVelocidad = document.getElementById("viento-velocidad");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((posicion) => {
    lon = posicion.coords.longitude;
    lat = posicion.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
    const urlPolucion = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // ubicación por ciudad
    // const urlC = `https://api.openweathermap.org/data/2.5/weather?q=mardelplata&appid=982720c8a3be9d384303bf34920ad717`
    console.log(url);
    console.log(urlPolucion)
    fetch(urlPolucion)
        .then((response) => {
                return response.json();
            })
        .then((data) => {
        // calidadAire.textContent = data.main.aqi
        switch (data.list[0].main.aqi) {
          case 1:
            calidadAire.textContent = "Buena"
            break;
          case 2:
            calidadAire.textContent = "Aceptable"
            break;
          case 3:
            calidadAire.textContent = "Moderada"
            break;
          case 4:
            calidadAire.textContent = "Pobre"
            break;
          case 5:
            calidadAire.textContent = "Muy Pobre"
            break;
          default:
            calidadAire.textContent = "---"
        }

        console.log(data.list[0].main.aqi)
        console.log(data)
            })
      .catch((error) => {
        console.log(error);
      });

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
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

        vientoVelocidad.textContent = `${data.wind.speed} m/s`;

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
