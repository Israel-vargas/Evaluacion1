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

## Evidencia de Uso de IA y Validación de Código (Criterio: Uso de IA y prompts)

Durante el desarrollo, se utilizó la IA integrada de Visual Studio Code para agilizar la escritura de estructuras de datos y lógica de eventos. A continuación, se detallan los prompts exactos y las correcciones realizadas, cubriendo todos los criterios de la evaluación:

**1. Generación de Arreglo de Datos (Criterios: Arreglos y Objetos / Variables y sintaxis JS)**
* **Prompt utilizado:** "Actúa como desarrollador FrontEnd. Crea un arreglo constante (`const`) llamado `maestros` con 5 objetos. Cada objeto debe tener: id, nombre, ciudad, edad, habilidad, precioServicio (número entero) y un booleano esFavorito en false. Usa los siguientes datos: Ana García..."
* **Validación y correcciones:** Se validó que la IA utilizara `const` según los requerimientos. Se corrigió manualmente el formato de la propiedad `precioServicio` para asegurar que fuera un tipo de dato `Number` válido para cálculos posteriores.

**2. Renderizado Dinámico e Inyección del DOM (Criterios: Manipulación DOM / Funciones / Estructuras de control)**
* **Prompt utilizado:** "Actúa como desarrollador FrontEnd. Crea una arrow function constante llamada `renderizarMaestros` que reciba un arreglo. Usa `querySelector` para seleccionar `#contenedor-usuarios` y vacíalo. Usa un ciclo `forEach` para iterar e inyectar dinámicamente con template literals. Agrega un botón con un evento `onclick` que evalúe con un operador ternario la propiedad `esFavorito` para cambiar el texto e ícono."
* **Validación y correcciones:** 1. Se validó que la IA estructurara correctamente la función como *arrow function* y el uso del ciclo *forEach*.
  2. Se revisó que la manipulación del DOM no sobreescribiera elementos, asegurando el uso de `innerHTML = ''` antes del ciclo.
  3. Se obligó el uso del atributo `onclick` inyectado directamente en el HTML dinámico (`onclick="toggleFavorito(${maestro.id})"`) para que el evento reconociera correctamente el `id`.

**3. Interactividad: Búsqueda y Favoritos (Criterios: Funciones y eventos / Estructuras de control)**
* **Prompt utilizado:** "Selecciona el input `#buscador` y agrega un `addEventListener` ('input'). Usa `let` para capturar el valor y el método `filter` para buscar por habilidad. Luego, crea una arrow function `toggleFavorito(id)` que busque el objeto, invierta su estado `esFavorito` y vuelva a llamar a `renderizarMaestros`."
* **Validación y correcciones:** Se validó que el evento `input` funcionara en tiempo real. Se añadió manualmente el método `.toLowerCase()` tanto al input como a la propiedad del objeto para que la búsqueda (estructura condicional interna) no fallara por diferencias entre mayúsculas y minúsculas.

**4. Rediseño UI/UX Profesional (Criterio: Integración con proyecto anterior)**
* **Prompt utilizado:** "Actúa como un Diseñador UI/UX y desarrollador FrontEnd experto. Reescribe completamente el archivo `style.css`... Utiliza una paleta de colores que transmita confianza (fondo #f8fafc, azul pizarra oscuro #1e293b, blanco). Para `#contenedor-usuarios` usa CSS Grid en lugar de flexbox: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`... Agrega sombras, bordes redondeados y efectos hover."
* **Validación y correcciones:** Se validó la migración estructural de Flexbox a CSS Grid para el contenedor dinámico, garantizando que las tarjetas mantengan un ancho uniforme. Se revisó la paleta cromática generada por la IA para asegurar que los contrastes cumplan con estándares de accesibilidad, logrando una integración visual perfecta con la maquetación inicial.

**4. Validación y correcciones realizadas:**
** 1. Se validó que la IA estructurara correctamente la función como *arrow function* según los requerimientos de la evaluación.
  2. Se revisó que la manipulación del DOM no sobreescribiera elementos de forma incorrecta, asegurando el uso de `innerHTML = ''` antes del ciclo `forEach` para limpiar el contenedor.
  3. Se corrigió y validó la lógica del botón: se obligó el uso del atributo `onclick` inyectado directamente en el HTML dinámico (`onclick="toggleFavorito(${maestro.id})"`) para asegurar que el evento reconociera correctamente el `id` de cada usuario al momento de interactuar con el sistema de favoritos.