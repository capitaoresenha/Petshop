document.getElementById('consulta').addEventListener('submit', function(event) {
                event.preventDefault();

                const nome = document.getElementById('fname').value;
                const sobrenome = document.getElementById('lname').value;

                alert('Obrigado pelo envio, ${nome} ${sobrenome}!\nSeus dados foram enviados com sucesso.')
                location.reload();
            });