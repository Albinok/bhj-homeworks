let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'
xhr.send();

xhr.onload = () => {
    let responseArr = xhr.response;
    console.log(responseArr)

	let Title = document.getElementById('poll__title');
	Title.textContent = responseArr.data.title;

	let answers = document.getElementById('poll__answers');
	responseArr.data.answers.forEach(answer => {
		answers.insertAdjacentHTML('beforeEnd', 
        `<button class="poll__answer">${answer}</button>`)
	});

	let btnAnswer = answers.querySelectorAll('.poll__answer');
    btnAnswer.forEach(btn => btn.onclick = () => {
		alert("Спасибо, ваш голос засчитан!");
	});
}