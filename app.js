// Datos simulados (mock data)
const mockData = [
    { id: 1, title: "Primer Post", content: "Contenido inicial", createdAt: "2024-11-26" },
    { id: 2, title: "Segundo Post", content: "Más contenido de ejemplo", createdAt: "2024-11-25" },
];

// Función para cargar los datos en la tabla
function loadData() {
    const table = document.getElementById("data-table");
    table.innerHTML = ""; // Limpia la tabla
    mockData.forEach((item) => {
        const row = `
            <tr>
                <td>${item.title}</td>
                <td>${item.content}</td>
                <td>${item.createdAt}</td>
                <td>
                    <button class="edit" onclick="editPost(${item.id})">Editar</button>
                    <button class="delete" onclick="deletePost(${item.id})">Eliminar</button>
                </td>
            </tr>`;
        table.innerHTML += row;
    });
}

// Función para agregar un nuevo post
document.getElementById("create-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const newPost = {
        id: mockData.length + 1,
        title,
        content,
        createdAt: new Date().toISOString().split("T")[0],
    };

    mockData.push(newPost);
    alert("Nuevo post creado");
    loadData(); // Actualiza la tabla
    event.target.reset(); // Limpia el formulario
});

// Función para editar un post
function editPost(id) {
    const post = mockData.find((item) => item.id === id);
    if (post) {
        const title = prompt("Editar título:", post.title);
        const content = prompt("Editar contenido:", post.content);
        if (title && content) {
            post.title = title;
            post.content = content;
            alert("Post actualizado");
            loadData();
        }
    }
}

// Función para eliminar un post
function deletePost(id) {
    const index = mockData.findIndex((item) => item.id === id);
    if (index !== -1) {
        if (confirm("¿Estás seguro de que deseas eliminar este post?")) {
            mockData.splice(index, 1);
            alert("Post eliminado");
            loadData();
        }
    }
}

// Cargar los datos iniciales al cargar la página
document.addEventListener("DOMContentLoaded", loadData);
