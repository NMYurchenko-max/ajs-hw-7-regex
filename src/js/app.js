import "../css/style.css";
import Validator from "./classes/Validator";

document.addEventListener('DOMContentLoaded', () => {
    const usernameForm = document.getElementById('usernameForm');
    const resultElement = document.getElementById('result');

    usernameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();

        // Создаём новый экземпляр Validator для каждого введённого имени
        const validator = new Validator(username);

        if (validator.validateUsername()) {
            resultElement.textContent = 'Имя пользователя корректно!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Имя пользователя некорректно. Попробуйте еще раз.';
            resultElement.style.color = 'red';
        }
        resultElement.style.display = 'block';
    });
});
