const maestros = [
	{ id: 1, nombre: "Ana García", ciudad: "Puerto Varas", edad: 28, habilidad: "Mecánico", precioServicio: 45000, esFavorito: false },
	{ id: 2, nombre: "Carlos López", ciudad: "Puerto Montt", edad: 35, habilidad: "Constructor", precioServicio: 48000, esFavorito: false },
	{ id: 3, nombre: "María Rodríguez", ciudad: "Llanquihue", edad: 42, habilidad: "Gasfitería", precioServicio: 42000, esFavorito: false },
	{ id: 4, nombre: "Juan Pérez", ciudad: "Frutillar", edad: 30, habilidad: "Pintor", precioServicio: 35000, esFavorito: false },
	{ id: 5, nombre: "Laura Martínez", ciudad: "Osorno", edad: 25, habilidad: "Electricista", precioServicio: 40000, esFavorito: false }
];

const renderizarMaestros = (arreglo) => {
	const contenedor = document.querySelector('#contenedor-usuarios');
	if (!contenedor) return;
	contenedor.innerHTML = '';

	arreglo.forEach((maestro) => {
		const precioFormateado = maestro.precioServicio.toLocaleString('es-CL', {
			style: 'currency',
			currency: 'CLP',
		});

		contenedor.innerHTML += `
			<div class="usuario-card">
				<h3>${maestro.nombre}</h3>
				<p>Ciudad: ${maestro.ciudad}</p>
				<p>Edad: ${maestro.edad}</p>
				<p>Habilidad: ${maestro.habilidad}</p>
				<p>Precio: ${precioFormateado}</p>
				<button class="btn-favorito">Agregar a Favoritos</button>
			</div>
		`;
	});
};

renderizarMaestros(maestros);


