const scriptURL = 'https://script.google.com/macros/s/AKfycbywsTBr2nigvbk_KDIOIflsHMX2-8vUI4fsnuZP1kOc4nZ6wT28TDXMkTUd8Ni1Y91J/exec';

const form = document.forms['formulario'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Gracias por su mensaje");
            window.location.reload();
        })
        .catch(error => console.error('Error:', error.message));
});
