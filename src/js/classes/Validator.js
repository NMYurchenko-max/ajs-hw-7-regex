export default class Validator {
    constructor(userName) {
        this.userName = userName;

        // Разрешённые символы: латиница, цифры, дефис, подчеркивание, длина 3-30
        this.pattern = /^[a-zA-Z0-9_-]{3,30}$/;

        // Запрещено более трёх цифр подряд (то есть 4 и более)
        this.hasThreeDigitsInARow = /\d{4,}/;

        // Не должно начинаться и заканчиваться на цифру, дефис или подчеркивание
        this.startsWithInvalidChar = /^[\d_-]/;
        this.endsWithInvalidChar = /[\d_-]$/;
    }

    validateUsername() {
        return (
            this.pattern.test(this.userName) &&
            !this.hasThreeDigitsInARow.test(this.userName) &&
            !this.startsWithInvalidChar.test(this.userName) &&
            !this.endsWithInvalidChar.test(this.userName)
        );
    }
}
