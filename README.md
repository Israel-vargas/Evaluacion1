# Evaluacion1
# Configure mi usuario en Git con los comandos 'git config (User name y user.email)'
# Luego subi mis archivos al repositorio Git add .
# Cree el Commit Inicial git commit -m "Initial Commmit"
# Linkie mi repositorio remoto de GitHub (git remote add origin https://github.com/Israel-vargas/Evaluacion1.git)
# Al momento de hacer el push al repositorio tuve un conflicto por el archivo readme (e0b286627397ed418323b779965c3690de648792/CODIGO/) Merge branch 'main' of https://github.com/Israel-vargas/Evaluacion1
# Luego Subi los cambios al repositorio 
# Por defecto de la IA se agrego la carpeta JS considerando que solo es HTML y CSS.
# Se soluciona la informacion cargada en JS. "necesito una estructura nueva, pero que no se ocupe java, solo index.html y style.css"(mensaje ocupado para reparar la estructura).
# prompt: a los usuarios necesito que le agreges su ubucaciones. Puerto Varas, Puerto Montt, Llanquihue, Frutillar, Osorno
# EVALUACION 2 INICIADA
## Uso de Inteligencia Artificial (Prompts y Validación)

Durante el desarrollo, se utilizó la IA integrada de Visual Studio Code para agilizar la escritura de estructuras de datos y lógica de eventos. A continuación, se detallan los prompts exactos y las correcciones realizadas:

**1. Generación de Arreglo de Datos**
* **Prompt utilizado:** "Actúa como desarrollador FrontEnd. Crea un arreglo constante (const) llamado `maestros` con 5 objetos. Cada objeto debe tener: id, nombre, ciudad, edad, habilidad, precioServicio (número entero) y un booleano esFavorito en false. Usa los siguientes datos: Ana García (Mecánico...), Carlos López..."
* **Validación y correcciones:** Se validó que la IA utilizara `const` según los requerimientos. Se corrigió manualmente el formato de la propiedad `precioServicio` para asegurar que fuera un tipo de dato `Number` válido para cálculos posteriores.

**2. Renderizado Dinámico del DOM**
* **Prompt utilizado:** "Crea una arrow function llamada `renderizarMaestros` que reciba el arreglo. Usa `document.querySelector('#contenedor-usuarios')` y un ciclo `forEach` para inyectar tarjetas HTML dinámicamente con template literals. Formatea el precio a CLP."
* **Validación y correcciones:** La IA generó el ciclo correctamente, pero tuvo que intervenir el código inyectado para asegurar que las etiquetas mantuvieran la clase `<div class="usuario-card">` original del proyecto. 

**3. Interactividad: Búsqueda y Favoritos**
* **Prompt utilizado:** "Selecciona el input `#buscador` y agrega un `addEventListener` ('input'). Usa `let` para capturar el valor y el método `filter` para buscar por habilidad. Luego, crea una arrow function `toggleFavorito(id)` que busque el objeto, invierta su estado `esFavorito` y vuelva a llamar a `renderizarMaestros`."
* **Validación y correcciones:** Se validó que el evento `input` funcionara en tiempo real. Se añadió manualmente el método `.toLowerCase()` tanto al input como a la propiedad del objeto para que la búsqueda no fallara por diferencias entre mayúsculas y minúsculas.
