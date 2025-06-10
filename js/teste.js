document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('consultas');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation: ensure all fields have some value
    const nome = document.getElementById('nome').value.trim();
    const nome_pet = document.getElementById('nome_pet').value.trim();
    const raca = document.getElementById('raca').value.trim();
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!nome || !nome_pet || !raca || !data || !hora) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // If everything valid, show a clean, simple popup confirming booking
    alert("Consulta marcada com sucesso!");

    // Optionally reset the form after confirmation
    form.reset();
  });
});

