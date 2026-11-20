const datos = [
    "Machu Picchu fue construida en el siglo XV por orden del inca Pachacútec.",
    "Sus piedras encajan con tanta exactitud que no usaron cemento ni mortero.",
    "En quechua, 'Machu Picchu' significa 'Montaña Vieja'."
];

function mostrarDato() {
    const azar = Math.floor(Math.random() * datos.length);
    alert("Dato curioso:\n" + datos[azar]);
}

document.querySelectorAll(".tarjeta").forEach(t => 
    t.addEventListener("click", () => t.classList.toggle("volteada"))
);