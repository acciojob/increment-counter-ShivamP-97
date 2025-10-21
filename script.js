//your JS code here. If required.
const counterEl = document.getElementById("counter");
const button = document.getElementById("incrementBtn");
button.addEventListener("click", function () {
	const currentValue = parseInt(counterEl.textContent);
	alert(currentValue);
	counterEl.textContent = currentValue + 1;
});