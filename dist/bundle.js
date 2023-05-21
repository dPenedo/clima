/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("let lon;\nlet lat;\nconst apiKey = process.env.apiKey\nconsole.log(apiKey)\n\n\n// Declaración de elementos HTML\nlet temperaturaValor = document.getElementById(\"temperatura-valor\");\nlet temperaturaDescripcion = document.getElementById(\"temperatura-descripcion\");\nlet ubicacion = document.getElementById(\"ubicacion\");\nlet calidadAire = document.getElementById(\"calidad-aire\");\nlet iconoAnimado = document.getElementById(\"icono-animado\");\nlet iconoAire = document.getElementById(\"icono-aire\");\nlet vientoVelocidad = document.getElementById(\"viento-velocidad\");\nlet vientoDireccion = document.getElementById(\"viento-direccion\");\nlet masInformacion = document.getElementById(\"mas-informacion-aire\");\nlet masInformacionTemp = document.getElementById(\"mas-informacion-temp\");\nlet cardInfoLista = document.getElementById(\"card-info-lista\");\nlet cardInfoListaTemp = document.getElementById(\"card-info-lista-temp\");\nlet cardTemp = document.getElementById(\"caja1\");\nlet cardAire = document.getElementById(\"caja4\");\nlet iconoVientoDireccion = document.getElementById(\"icono-viento-direccion\");\n\n// Informacion adicional aire\n\nlet infoCo = document.getElementById(\"info-co\");\nlet infoNo = document.getElementById(\"info-no\");\nlet infoNo2 = document.getElementById(\"info-no2\");\nlet infoO3 = document.getElementById(\"info-o3\");\nlet infoSo2 = document.getElementById(\"info-so2\");\nlet infoPm25 = document.getElementById(\"info-pm2-5\");\nlet infoPm10 = document.getElementById(\"info-pm10\");\nlet infoNh3 = document.getElementById(\"info-nh3\");\n\n// informacion adicional Temperatura\nlet maxTemp = document.getElementById(\"max-temp\");\nlet minTemp = document.getElementById(\"min-temp\");\nlet humedad = document.getElementById(\"humedad\");\nlet presion = document.getElementById(\"presion\");\nlet sensacion = document.getElementById(\"sensacion\");\n\nlet infoVisible = false;\nlet infoVisibleTemp = false;\n\n// Añadir informacion de la Calidad del aire\nmasInformacion.addEventListener(\"click\", function() {\n    if (infoVisible === true) {\n        infoVisible = false;\n        cardInfoLista.classList.remove(\"card-info-lista-visible\");\n        cardAire.classList.remove(\"card-aire-ampliada\");\n        cardAire.classList.add(\"card-aire-reducida\");\n    } else {\n        infoVisible = true;\n        cardInfoLista.classList.add(\"card-info-lista-visible\");\n        cardAire.classList.add(\"card-aire-ampliada\");\n        cardAire.classList.remove(\"card-aire-reducida\");\n    }\n});\n\n// Añadir informacion de la Temperatura\n\nmasInformacionTemp.addEventListener(\"click\", function() {\n    if (infoVisibleTemp === true) {\n        infoVisibleTemp = false;\n        cardInfoListaTemp.classList.remove(\"card-info-lista-temp-visible\");\n        cardTemp.classList.remove(\"card-temp-ampliada\");\n        cardTemp.classList.add(\"card-temp-reducida\");\n    } else {\n        infoVisibleTemp = true;\n        cardInfoListaTemp.classList.add(\"card-info-lista-temp-visible\");\n        cardTemp.classList.add(\"card-temp-ampliada\");\n        cardTemp.classList.remove(\"card-temp-reducida\");\n    }\n});\n\nif (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition((posicion) => {\n        lon = posicion.coords.longitude;\n        lat = posicion.coords.latitude;\n        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;\n        const urlPolucion = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;\n        // ubicación por ciudad\n        // const urlC = `https://api.openweathermap.org/data/2.5/weather?q=mardelplata&appid=982720c8a3be9d384303bf34920ad717`\n        console.log(url);\n        console.log(urlPolucion);\n        fetch(urlPolucion)\n            .then((response) => {\n                return response.json();\n            })\n            .then((data) => {\n                // calidadAire.textContent = data.main.aqi\n                switch (data.list[0].main.aqi) {\n                    case 1:\n                        calidadAire.textContent = \"Buena\";\n                        iconoAire.src = \"img/like.png\";\n                        // iconoAire.classList.add(\"buena-icono\")\n                        iconoAire.setAttribute(\"id\", \"buena-icono\");\n                        calidadAire.classList.add(\"buena\");\n                        break;\n                    case 2:\n                        calidadAire.textContent = \"Aceptable\";\n                        iconoAire.src = \"img/like.png\";\n                        iconoAire.setAttribute(\"id\", \"aceptable-icono\");\n                        calidadAire.classList.add(\"aceptable\");\n                        break;\n                    case 3:\n                        calidadAire.textContent = \"Moderada\";\n                        iconoAire.src = \"img/regular.png\";\n                        iconoAire.setAttribute(\"id\", \"moderada-icono\");\n                        calidadAire.classList.add(\"moderada\");\n                        break;\n                    case 4:\n                        calidadAire.textContent = \"Pobre\";\n                        iconoAire.src = \"img/dislike.png\";\n                        iconoAire.setAttribute(\"id\", \"pobre-icono\");\n                        calidadAire.classList.add(\"pobre\");\n                        break;\n                    case 5:\n                        calidadAire.textContent = \"Muy Pobre\";\n                        iconoAire.src = \"img/dislike.png\";\n                        iconoAire.setAttribute(\"id\", \"muy-pobre-icono\");\n                        calidadAire.classList.add(\"muy-pobre\");\n                        break;\n                    default:\n                        calidadAire.textContent = \"---\";\n                }\n\n                // Rellenar información de los componentes del aire\n\n                infoCo.textContent = data.list[0].components.co;\n                infoNo.textContent = data.list[0].components.no;\n                infoNo2.textContent = data.list[0].components.no2;\n                infoO3.textContent = data.list[0].components.o3;\n                infoSo2.textContent = data.list[0].components.so2;\n                infoPm25.textContent = data.list[0].components.pm2_5;\n                infoPm10.textContent = data.list[0].components.pm10;\n                infoNh3.textContent = data.list[0].components.nh3;\n\n                console.log(data.list[0].main.aqi);\n                console.log(data);\n            })\n            .catch((error) => {\n                console.log(error);\n            });\n\n        fetch(url)\n            .then((response) => {\n                return response.json();\n            })\n            .then((data) => {\n                console.log(data);\n                let temp = Math.round(data.main.temp);\n                temperaturaValor.textContent = `${temp} ºC`;\n                let desc = data.weather[0].description;\n\n                // const palabras = desc.split(\" \");\n                // const descPalabras = palabras.map((palabra) => {\n                //     return palabra[0].toUpperCase() + palabra.substring(1);\n                // }).join(\" \");\n                const descPalabras = desc[0].toUpperCase() + desc.substring(1);\n\n                temperaturaDescripcion.textContent = descPalabras;\n\n                ubicacion.textContent = data.name;\n                maxTemp.textContent = data.main.temp_max;\n                minTemp.textContent = data.main.temp_min;\n                if (data.main.humidity >= 60) {\n                    humedad.textContent = data.main.humidity + \"% (alta)\";\n                } else if (data.main.humidity >= 30 && data.main.humidity <= 60) {\n                    humedad.textContent = data.main.humidity + \"% (adecuada)\";\n                } else {\n                    humedad.textContent = data.main.humidity + \"% (baja)\";\n                }\n                sensacion.textContent = data.main.feels_like;\n                if (data.main.pressure >= 1013.25) {\n                    presion.textContent = data.main.pressure + \"hPa (alta)\";\n                } else {\n                    presion.textContent = data.main.pressure + \"hPa (baja)\";\n                }\n\n                vientoVelocidad.textContent = `${data.wind.speed} m/s`;\n                vientoDireccion.textContent = `${data.wind.deg}º`;\n\n                if (data.wind.deg >= 337 || data.wind.deg <= 22.5) {\n                    iconoVientoDireccion.src = \"img/norte.png\";\n                } else if (data.wind.deg > 22.5 && data.wind.deg <= 67.5) {\n                    iconoVientoDireccion.src = \"img/noreste.png\";\n                } else if (data.wind.deg > 67.5 && data.wind.deg <= 112.5) {\n                    iconoVientoDireccion.src = \"img/este.png\";\n                } else if (data.wind.deg > 112.5 && data.wind.deg <= 157.5) {\n                    iconoVientoDireccion.src = \"img/sureste.png\";\n                } else if (data.wind.deg > 157.5 && data.wind.deg <= 202.5) {\n                    iconoVientoDireccion.src = \"img/sur.png\";\n                } else if (data.wind.deg > 202.5 && data.wind.deg <= 247.5) {\n                    iconoVientoDireccion.src = \"img/suroeste.png\";\n                } else if (data.wind.deg > 247.5 && data.wind.deg <= 292.5) {\n                    iconoVientoDireccion.src = \"img/oeste.png\";\n                } else {\n                    iconoVientoDireccion.src = \"img/noroeste.png\";\n                }\n\n                console.log(data.weather[0].main);\n                switch (data.weather[0].main) {\n                    case \"Clear\":\n                        iconoAnimado.src = \"animated/day.svg\";\n                        console.log(\"Limpio\");\n                        break;\n                    case \"Clouds\":\n                        iconoAnimado.src = \"animated/cloudy-day-1.svg\";\n                        console.log(\"Nubes\");\n                        break;\n                    case \"Thunderstorm\":\n                        iconoAnimado.src = \"animated/thunder.svg\";\n                        console.log(\"Tormenta\");\n                        break;\n                    case \"Drizzle\":\n                        iconoAnimado.src = \"animated/rainy-2.svg\";\n                        console.log(\"Xirimiri\");\n                        break;\n                    case \"Rain\":\n                        iconoAnimado.src = \"animated/rainy-7.svg\";\n                        console.log(\"Lluvia\");\n                        break;\n                    case \"Snow\":\n                        iconoAnimado.src = \"animated/snowy-6.svg\";\n                        console.log(\"Nieve\");\n                        break;\n                    case \"Atmosphere\":\n                        iconoAnimado.src = \"animated/weather.svg\";\n                        console.log(\"Atmosfera\");\n                        break;\n                    default:\n                        iconoAnimado.src = \"animated/cloyd-day-1.svg\";\n                        console.log(\"Por defecto\");\n                }\n\n                // Para iconos estáticos\n                // let iconCode = data.weather[0].icon\n                // const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`\n                // console.log(urlIcon)\n\n                // Para iconos animados\n            })\n            .catch((error) => {\n                console.log(error);\n            });\n    });\n}\n\n\n//# sourceURL=webpack://clima/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;