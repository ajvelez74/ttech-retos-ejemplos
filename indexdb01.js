
let db;

// Abrir la base de datos
const request = indexedDB.open("ttech-db", 1);

request.onerror = function () {
    console.error("Error al abrir la base de datos");
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Base de datos abierta con éxito");
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const store = db.createObjectStore("categorias", { keyPath: "codigo" });
    store.createIndex("nombre", "nombre", { unique: true });
    store.createIndex("descripcion", "descripcion", { unique: false });
    console.log("Colección 'categorias' creada");
};

// Función para guardar una categoria
function guardarCategoria(categoria) {

    const transaction = db.transaction(["categorias"], "readwrite");
    const store = transaction.objectStore("categorias");
    const request = store.add(categoria);

    request.onsuccess = () => console.log("Categoria guardada");
    request.onerror = () => console.error("Error al guardar la categoria");
}

// Función para listar todas las categorias
function listarCategorias() {
    const transaction = db.transaction(["categorias"], "readonly");
    const store = transaction.objectStore("categorias");

    const request = store.openCursor();

    request.onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
            return cursor;
        } else {
            return null;
        }
    };

    request.onerror = () => console.error("Error al leer las categorias");
}

function buscarCategoria(codigo) {

    const transaction = db.transaction(["categorias"], "readonly");
    const store = transaction.objectStore("categorias");

    const request = store.get(codigo);

    request.onsuccess = function (event) {
        const categoria = event.target.result;
        if (categoria) {
            return categoria;
        } else {
            throw new Error("Categoria no encontrada");
        }
    };

    request.onerror = function () {
        console.error("Error al buscar el curso");
    };
}