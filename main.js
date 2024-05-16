document.addEventListener("DOMContentLoaded", function () {
  let contacts = [];

  if (localStorage.getItem("contacts")) {
    contacts.push(JSON.parse(localStorage.getItem("contacts")));
    renderizarTabla();
  }

  function agregarContacto() {
    let $nombre = document.getElementById("name").value;
    let $mail = document.getElementById("mail").value;
    let $nacimiento = document.getElementById("birthdate").value;

    let contacto = {
      nombre: $nombre,
      mail: $mail,
      nacimiento: $nacimiento,
    };

    contacts.push(contacto);

    localStorage.setItem("contacts", JSON.stringify(contacto));
    renderizarTabla();
    document.getElementById("formContact").reset();
  }

  function searchId() {
    const searchQuery = document.querySelectorAll('input[name="contact"]');
    let filterSearch = null;

        searchQuery.forEach((tr) => {
        if (tr.checked) {
            filterSearch = tr;
            console.log(filterSearch);
        }
        });
    return filterSearch ? filterSearch.id : null;
}

  function eliminarTr() {
    let resultado = searchId();
    localStorage.removeItem(contacts, resultado);
    renderizarTabla();
  }
  function editarLS() {
    let resultado = searchId();
  }

  function renderizarTabla() {
    let tbody = document.getElementById("tbodyContact");
    tbody.innerHTML = "";

    contacts.forEach(function (contacto, index) {
      let row = document.createElement("tr");
      let vIndex = index;
      row.setAttribute("id", vIndex);
      row.innerHTML =`
                <td><input name="contact" type="radio" id="${vIndex}"></td>
                <td>${contacto.nombre}</td>
                <td>${contacto.mail}</td>
                <td>${contacto.nacimiento}</td>
            `;
      tbody.appendChild(row);
    });
  }
  document.getElementById("btnAgregar").addEventListener("click", agregarContacto);
  document.getElementById("btnEliminarTr").addEventListener("click", eliminarTr);
  document.getElementById("btnEditarTr").addEventListener("click", editarLS);
});
