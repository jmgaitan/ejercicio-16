document.addEventListener("DOMContentLoaded", function() {
    let contacts = [];

    console.log(localStorage.getItem('constacts'));
    if (localStorage.getItem('contacts')) {
        contacts.push(JSON.parse(localStorage.getItem('contacts')));
        renderizarTabla();
    }
    function agregarContacto() {

        let $nombre = document.getElementById("name").value;
        let $mail = document.getElementById("mail").value;
        let $nacimiento = document.getElementById("birthdate").value;

        let contacto = {
            nombre: $nombre,
            mail: $mail,
            nacimiento: $nacimiento
        };

        contacts.push(contacto);

        localStorage.setItem('contacts', JSON.stringify(contacto));
        renderizarTabla();
        document.getElementById("formContact").reset()
    }

    function renderizarTabla() {
        let tbody = document.getElementById("tbodyContact");
        tbody.innerHTML = "";

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
    document.getElementById("btnAgregar").addEventListener("click", agregarContacto);
});