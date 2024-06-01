const scriptURL = 'https://script.google.com/macros/s/AKfycbzVMnQZWeXZefl8O2PQiLXwGRnsV_I28Xq3-J0JA4OL6c2Y5ANfF6jWP3sn4Yn39VVn/exec';

const form = document.forms['agendarbe'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Gracias por su mensaje");
            window.location.reload();
        })
        .catch(error => console.error('Error:', error.message));
});
