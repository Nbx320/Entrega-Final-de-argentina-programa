document.addEventListener("DOMContentLoaded", function() {
  const quejas = [];

const quejaForm = document.getElementById("quejaForm");
quejaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const asunto = document.getElementById("asunto").value;
  const descripcion = document.getElementById("descripcion").value;

  const queja = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    asunto: asunto,
    descripcion: descripcion,
  };

  quejas.push(queja);
  quejaForm.reset();

  const doc = new jsPDF();
    doc.text(`Nombre: ${nombre}`, 10, 10);
    doc.text(`Correo: ${correo}`, 10, 20);
    doc.text(`Teléfono: ${telefono}`, 10, 30);
    doc.text(`Asunto: ${asunto}`, 10, 40);
    doc.text(`Descripción: ${descripcion}`, 10, 50);
    doc.save("comentario.pdf");

    console.log(quejas);
});
});
