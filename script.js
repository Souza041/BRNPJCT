const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          mensagemSucesso.classList.remove("d-none");
          setTimeout(() => {
            mensagemSucesso.classList.add("d-none");
          }, 6000);
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
      }
    });

