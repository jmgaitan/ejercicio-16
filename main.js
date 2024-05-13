document.addEventListener("DOMContentLoaded", function() {
    // Array para almacenar los contactos
    let contacts = [];

    console.log(localStorage.getItem('constacts'));
    if (localStorage.getItem('contacts')) {
        contacts.push(JSON.parse(localStorage.getItem('contacts')));
        renderizarTabla();
    }
    // Función para agregar un nuevo contacto al array y renderizar la tabla
    function agregarContacto() {
        // Obtener los valores del formulario
        let $nombre = document.getElementById("name").value;
        let $mail = document.getElementById("mail").value;
        let $nacimiento = document.getElementById("birthdate").value;

        // Crear un objeto de contacto
        let contacto = {
            nombre: $nombre,
            mail: $mail,
            nacimiento: $nacimiento
        };

        // Agregar el contacto al array
        contacts.push(contacto);

        // Renderizar la tabla de contactos
        localStorage.setItem('contacts', JSON.stringify(contacto));
        renderizarTabla();
        document.getElementById("formContact").reset()
    }

    // Función para renderizar la tabla de contactos
    function renderizarTabla() {
        let tbody = document.getElementById("tbodyContact");
        // Limpiar el cuerpo de la tabla
        tbody.innerHTML = "";

        // Iterar sobre el array de contactos y agregar filas a la tabla
        contacts.forEach(function(contacto) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${contacto.nombre}</td>
                <td>${contacto.mail}</td>
                <td>${contacto.nacimiento}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Agregar evento click al botón "Agregar"
    document.getElementById("btnAgregar").addEventListener("click", agregarContacto);
});