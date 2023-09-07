const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.upload.addEventListener('progress', function (event) {
        progress.value = event.loaded / event.total;
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})