<script>
import BookBlock from '../common/BookBlock.vue';
import Slider from '../common/Slider.vue';
import axios from 'axios';

export default {
    components: {
        Slider,
        BookBlock,
    },
    data() {
        return {
            discountBooks: [],
            newBooks: [],
            allBooks: [],
        };
    },
    mounted() {
        this.fetchBooks(
            'discountBooks',
            'http://localhost:3000/get-books/discount?page=1&limit=10'
        );
        this.fetchBooks(
            'newBooks',
            'http://localhost:3000/get-books/all?page=1&limit=10'
        );
        this.fetchBooks(
            'allBooks',
            'http://localhost:3000/get-books/all?page=1&limit=10'
        );
    },
    methods: {
        async fetchBooks(property, endpoint) {
            try {
                const response = await axios.get(endpoint);
                this[property] = response.data;
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
    },
};
</script>

<template>
    <div>
        <router-view />
        <Slider />
        <BookBlock title="Скидки" :books="discountBooks" />
        <BookBlock title="Новинки" :books="newBooks" />
        <BookBlock title="Все книги" :books="allBooks" />
    </div>
</template>
