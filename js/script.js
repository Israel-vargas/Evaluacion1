// Script de ejemplo para la Evaluación 1
console.log("Página cargada correctamente.");

document.addEventListener('DOMContentLoaded', function() {
    // alert("¡Bienvenido a la Evaluación 1!");
    
    // Datos de usuarios aleatorios con habilidades
    const usuarios = [
        { nombre: "Ana García", edad: 28, habilidad: "Mecánico" },
        { nombre: "Carlos López", edad: 35, habilidad: "Constructor" },
        { nombre: "María Rodríguez", edad: 42, habilidad: "Gasfitería" },
        { nombre: "Juan Pérez", edad: 30, habilidad: "Pintor" },
        { nombre: "Laura Martínez", edad: 25, habilidad: "Electricista" }
    ];
    
    const listaUsuarios = document.getElementById('lista-usuarios');
    
    usuarios.forEach(usuario => {
        const divUsuario = document.createElement('div');
        divUsuario.className = 'usuario';
        divUsuario.innerHTML = `
            <h3>${usuario.nombre}</h3>
            <p>Edad: ${usuario.edad}</p>
            <p>Habilidad: ${usuario.habilidad}</p>
        `;
        listaUsuarios.appendChild(divUsuario);
    });
});