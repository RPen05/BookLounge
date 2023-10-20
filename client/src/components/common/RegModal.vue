<script>
import axios from 'axios';

export default {
    methods: {
        closeModal() {
            this.$emit('close');
        },
        login() {
            const phoneNumber = this.phoneNumber; // Предположим, что у тебя есть переменная phoneNumber, связанная с полем ввода.

            axios.post('http://localhost:3000/auth/phone', { phoneNumber })
            .then(response => {
                // Обработай успешный ответ от сервера
                console.log(response.data);
            })
            .catch(error => {
                // Обработай ошибку
                console.error('Ошибка запроса:', error);
            });
        },
    },
};
</script>


<template>
    <div class="modal-overlay" @click="closeRegModal"></div>
    <div class="reg-modal">
        <button @click="closeModal" class="close-btn">
            <img src="/src/assets/img/sales/icons/close.png" alt="Закрыть">
        </button>
        <div class="modal-content">
            <h1>Введите номер телефона</h1>
            <span>Мы отправим SMS с кодом для входа или рагистрации </span>
            <div class="reg-form">
                <input type="tel" placeholder="+7 000 000 00 00" pattern="\d*">    
            </div>
            <button @click="login">Войти</button>
        </div>
    </div>

</template>

<style scoped>

</style>