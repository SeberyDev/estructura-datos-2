// ELEMENTOS DOM (HTML)
const dataContainer = document.getElementById("dataContainer");
const showInsertBtn = document.getElementById("showInsertBtn");
const insertBtn = document.getElementById("insertBtn");
const mainForm = document.getElementById("mainForm");
const noForm = document.getElementById("noForm");
const matriculaInput = document.getElementById("matricula");
const nombreInput = document.getElementById("nombre");
const materiaInput = document.getElementById("materia");
const calificacionInput = document.getElementById("calificacion");
const dataError = document.getElementById("dataError");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allBtn = document.getElementById("allBtn");

// HTML PARA INSERTAR
const emptyData = `<h2 class="empty-content">No Hay Datos ;(</h2>`;

// CREACION DE LA INSTANCIA DE LA APLICACION
const app = new App();

// MOSTRAR LOS DATOS EN UN CONTENEDOR
app.ShowData();

// AGREGAR EVENTOS
showInsertBtn.addEventListener("click", Object.call(app, app.ShowInsert));
insertBtn.addEventListener("click", Object.call(app, app.Insert));
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  app.Search(searchInput.value);
});
allBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  app.ShowData();
});

// FUNCION CLASE DE LA APLICACION
function App() {
  // DATOS ALMACENADOS
  this.data = [];

  // OTRA INFORMACION
  this.currentID = null;

  // METODOS
  // VALIDAR EL FORMULARIO
  this.CheckData = () => {
    return (
      !(
        matriculaInput.value.trimStart() &&
        nombreInput.value.trimStart() &&
        materiaInput.value.trimStart() &&
        calificacionInput.value.trimStart()
      ) ||
      this.data.filter(
        (obj) =>
          obj.matricula === matriculaInput.value &&
          obj.matricula !== this.currentID
      ).length != 0
    );
  };

  // INSERTAR UN ELEMENTO EN LA INFORMACION
  this.Insert = (e) => {
    e.preventDefault();
    if (this.CheckData()) {
      dataError.classList.remove("no-active");
      return;
    }

    const obj = {
      matricula: matriculaInput.value,
      nombre: nombreInput.value,
      materia: materiaInput.value,
      calificacion: calificacionInput.value,
    };

    if (this.currentID != null) {
      this.data[
        this.data.findIndex((obj) => obj.matricula === this.currentID)
      ] = obj;
      const deleteBtn = document.getElementById(`delete${this.currentID}`);
      deleteBtn.classList.remove("no-active");
      this.currentID = null;
      showInsertBtn.classList.remove("no-active");
    } else {
      this.data.push(obj);
    }

    this.ShowData();

    mainForm.reset();
    dataError.classList.add("no-active");
    mainForm.classList.add("no-active");
    noForm.classList.remove("no-active");
    searchInput.value = "";
  };

  // MOSTRAR EL FORMULARIO PARA INSERTAR UN ELEMENTO
  this.ShowInsert = () => {
    mainForm.classList.remove("no-active");
    noForm.classList.add("no-active");
  };

  // MOSTRAR EL FORMULARIO PARA ACTUALIZAR UN ELEMENTO
  this.ShowUpdate = (id) => {
    const obj = this.data.filter((obj) => obj.matricula === id)[0];
    matriculaInput.value = obj.matricula;
    nombreInput.value = obj.nombre;
    materiaInput.value = obj.materia;
    calificacionInput.value = obj.calificacion;

    this.currentID = obj.matricula;

    const deleteBtn = document.getElementById(`delete${obj.matricula}`);
    deleteBtn.classList.add("no-active");
    showInsertBtn.classList.add("no-active");
    mainForm.classList.remove("no-active");
    noForm.classList.add("no-active");
  };

  // ELIMINAR UN ELEMENTO EN LA INFORMACION
  this.Delete = (id) => {
    this.data = this.data.filter((obj) => obj.matricula != id);
    this.ShowData();
  };

  // BUSCAR UN ELEMENTO EN LA INFORMACION
  this.Search = (id) => {
    const searchData = this.data.filter((obj) => obj.matricula === String(id));
    this.ShowData(searchData);
  };

  // MOSTRAR LA INFORMACION EN EL CONTENEDOR HTML
  this.ShowData = (data = null) => {
    const customData = data === null ? this.data : data;
    if (customData.length === 0) {
      dataContainer.innerHTML = emptyData;
    } else {
      searchForm.classList.remove("no-active");

      let objHtml = "";
      for (obj of customData) {
        objHtml += `
          <div class="obj-container"">
            <p>Matricula: ${obj.matricula}</p>
            <p>Nombre: ${obj.nombre}</p>
            <p>Materia: ${obj.materia}</p>
            <p>Calificacion: ${obj.calificacion}</p>
            <button id="delete${obj.matricula}" class="eliminar">Eliminar</button>
            <button id="update${obj.matricula}" class="actualizar">Actualizar</button>
          </div>
        `;
      }

      dataContainer.innerHTML = objHtml;

      for (obj of customData) {
        const deleteBtn = document.getElementById(`delete${obj.matricula}`);
        deleteBtn.addEventListener("click", (e) => {
          e.preventDefault();
          searchInput.value = "";
          app.Delete(e.target.id.slice(6, e.target.id.length));
        });

        const updateBtn = document.getElementById(`update${obj.matricula}`);
        updateBtn.addEventListener("click", (e) => {
          e.preventDefault();
          searchInput.value = "";
          app.ShowUpdate(e.target.id.slice(6, e.target.id.length));
        });
      }
    }
  };
}
