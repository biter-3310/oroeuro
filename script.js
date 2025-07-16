// Отримуємо елементи
const goldBtn = document.getElementById('gold-btn') // твоя існуюча кнопка
const popup = document.getElementById('gold-popup')
const closePopup = document.getElementById('close-popup')
const goldToday = document.getElementById('gold-today')

// Показати popup при кліку на кнопку
goldBtn.addEventListener('click', () => {
	popup.style.display = 'flex'
	fetchGoldPrice()
})

// Закрити popup
closePopup.addEventListener('click', () => {
	popup.style.display = 'none'
})

// Функція для отримання актуальної ціни золота
function fetchGoldPrice() {
	fetch('https://api.metals.live/v1/spot') // API без ключа
		.then(response => response.json())
		.then(data => {
			const goldData = data.find(item => item[0] === 'gold')
			if (goldData) {
				goldToday.textContent = '€${goldData[1].toFixed(2)}'
			} else {
				goldToday.textContent = 'немає даних'
			}
		})
		.catch(err => {
			console.error('errore durante il calcolo:', err)
			goldToday.textContent = 'Errore di scaricamento'
		})
}
