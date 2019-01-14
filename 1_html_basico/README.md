# HTML #

***¿Qué es?***

"Lenguaje de marcado de hipertexto", se encarga de definir la estructura de un sitio web, define los elementos que van a existir, y jerarquiza los elementos que pertenecen al mismo tipo.


Basado en etiquetas: las etiquetas son el elemento fundamental de HTML. Se componen de los caracteres `<`,  `>` y `/`. La mayoría de etiquetas tienen etiqueta de inicio y etiqueta de cierre, se diferencian porque la etiqueta de cierre contiene el caracter `/`antes del nombre

```html
<html> </html>
<body> </body>
```

### HTML5 ###

Es el estandar actual de HTML que permite usar etiquetas que mejoran la semántica de un sitio web. Al principio de un documento se incluye `<!DOCTYPE html>` para que el navegador interprete que se está usando este estandar.


***Estructura básica de un documento HTML***

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

***head***
Dentro de esta etiqueta se colocan elementos que el navegador va a usar para pero no se van a mostrar en el cuerpo de la página. Aqui van elementos como el título de nuestra página, la imagen que aparece en la pestaña del navegador, o las palabras clave para indexar en buscadores.

***body***
Todos los elementos que se escriban dentro de esta etiqueta se van a mostrar en el website. aquí van las etiquetas de texto, imagenes, botones, inputs, etc.

***title***
Muestra el texto introducido entre las etiquetas de apertura y cierre, en la pestaña del navegador.

### Etiquetas de texto ###

***Etiquetas h***
Son las etiquetas para titulos y subtitulos, se numeran en orden jerarquico de la `h1`a la `h6`. Se recomienda que no se salte la numeración al momento de usarlas, es decir,  si hay `h1`y`h3`  debe haber `h2`. **Debe haber solo una etiqueta `h1` por página.**

```html
<h1>Esto es un título</h1>
<h2>Esto es un subtitulo</h2>
<h3>Esto es un subtitulo</h3>
<h4>Esto es un subtitulo</h4>
<h5>Esto es un subtitulo</h5>
<h6>Esto es un subtitulo</h6>
```













