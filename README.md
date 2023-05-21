# Aplicación web para mostrar valores relativos al clima

Detecta automáticamente la ubicación y en base a dos APIs de *openweathermap*, aparece en pantalla las siguientes informaciones:
- Ubicación
- Temperatura actual
- Sensación térmica
- Temperatura máxima
- Temperatura mínima
- Humedad (en porcentaje e indica si se considera media, alta o baja)
- Presión (en hectopascales e indica si se considera media, alta o baja)
- Animación con el clima (lluvioso,nieve, sol, etc.)
- Velocidad del viento
- Dirección del viento (con grados y un icono que indica si es viento norte, noroeste, este, etc.)
- Calidad del aire. Se calcula con una serie de 8 indicadores químicos que se pueden desplegar al darle a "Más información".

Se puede visitar el sitio web en (https://clima-actual-app.netlify.app/). 

### ¿Cómo hacerlo funcionar de manera local?

Se debe clonar el repositorio y hacerlo correr con alguna herramienta tipo (live-server de node.js). Lo que no incluye el archivo es la variable de la apiKey, que es importada de un archivo llamado config.js que está en gitignore. Para hacerlo funcionar hay que registrarse gratuitamente en (https://openweathermap.org/), tomar la apiKey e insertarla en el archivo *app.js* eliminando la línea import. De este modo:

```
const apiKey = "insertar-aquí-los-números-de-la-API-Key";
```

### Por hacer:

- Buscar otras APIs públicas que permitan ver la información del clima de varios días. Al parecer (open-meteo.com) da esa información a 7-días.

