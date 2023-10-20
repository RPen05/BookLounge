<script>
import Logo from '../common/Logo.vue'
import RegModal from '../common/RegModal.vue'

export default {
    components: {
        Logo,
        RegModal,
    },
    data() {
        return {
            isRegModalOpen: false,
        };
    },
    methods: {
        openRegModal() {
            this.isRegModalOpen = true;
        },
        closeRegModal() {
            this.isRegModalOpen = false;
        },
    },
};

</script> 

<template>
    <nav class="navbar">
        <div class="navbar-menu-left">
            <Logo />
            <div class="navbar-menu-left-bottom">
                <ul class="navbar-lists">
                <router-link to="/stocks" class="navbar-list-title">
                    <li class="navbar-list">Акции</li>
                </router-link>
                <router-link :to="{ name: 'category', params: { category: 'discounts' } }" class="navbar-list-title">
                    <li class="navbar-list">Скидки</li>
                </router-link>
                <router-link :to="{ name: 'category', params: { category: 'new' } }" class="navbar-list-title">
                    <li class="navbar-list">Новинки</li>
                </router-link>
                <router-link :to="{ name: 'category', params: { category: 'all' } }" class="navbar-list-title">
                    <li class="navbar-list">Все книги</li>
                </router-link>
                </ul>
            </div>
        </div>
        <div class="navbar-menu-center">
            <ul class="navbar-menu-center-items">
                <li class="navbar-menu-center-item">
                    <a href="" class="catalog-btn">
                        <img src="/src/assets/img/navbar/catalog.png" alt="" class="catalog-img">
                    </a>
                </li>
                <li class="navbar-menu-center-item">
                <div class="search-box">
                    <input type="text" class="search" name="" placeholder="Поиск по книге, автору, жанру и издательству">
                </div>
                </li>
                <li class="navbar-menu-center-item">
                    <a href="#" class="search-btn"><img src="/src/assets/img/navbar/search.png" alt="" class="search-img"></a>
                </li>
            </ul>
        </div>
        <div class="navbar-menu-right">
            <ul>
                <div class="fav-icon">
                
                <a href="#" @click="openRegModal"><img src="/src/assets/img/navbar/user.png" alt=""></a>
                </div>
                <div class="fav-icon">
                <a href="#/favorite"><img src="/src/assets/img/navbar/favorite.png" alt=""></a>
                </div>
            </ul>
        </div>

        <RegModal v-if="isRegModalOpen" @close="closeRegModal"/>
    </nav>
</template>


