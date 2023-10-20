<script>
export default {
    props: {
        book: {
            type: Object,
            required: true,
            default: () => ({}),
        },
    },
    computed: {
        bookDetailsLink() {
            return `/details/${this.book.id}`;
        },
    },
};
</script>

<template>
    <div class="item">
        <router-link
            :to="{ name: 'details', params: { id: book.id }, query: book }"
        >
            <img class="item-img" :src="book.image_cover" alt="" />
        </router-link>
        <div class="item-fav">
            <a href="#"
                ><img src="/src/assets/img/sales/icons/fav.png" alt=""
            /></a>
        </div>
        <div class="item-details">
            <div class="item-details-price">
                <span class="big-price">{{ book.price }} руб.</span
                ><small class="small-price">{{ book.old_price }} руб.</small>
            </div>
            <div class="item-title three_point">
                <router-link :to="bookDetailsLink">{{
                    book.title
                }}</router-link>
            </div>
            <span class="item-details-author">{{ book.author }}</span>
        </div>
    </div>
</template>

<style scoped>
.item {
    width: 220px;
    height: 459px;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 20px 10px;
    position: relative;
}

.item-fav {
    position: absolute;
    background-color: #ffffff;
    padding: 12px 16px 12px 16px;
    border-radius: 5px;
    left: 70%;
    top: 2%;
    cursor: pointer;
}

.item-fav:hover {
    background-color: #d5afb0;
    transition: background-color 0.2s linear;
}

.item-details {
    color: #000;
    display: flex;
    margin-left: 5px;
    flex-direction: column;
}

.item-details a {
    width: 220px;
    height: 50px;
    margin-bottom: 5px;
}

.item-title {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    white-space: nowrap;
}

.three_point {
    text-overflow: ellipsis;
    overflow: hidden;
}

.item-details-price {
    display: flex;
    margin-bottom: 30px;
    margin-right: 20px;
    margin-top: 15px;
}

.item-details-price .small-price {
    position: absolute;
    text-decoration: line-through;
    left: 47%;
    top: 76.6%;
    color: #a09f9f;
    font-size: 15px;
}

.item-details-price .big-price {
    position: absolute;
    /* left: 44%; */
    font-weight: bold;
    font-size: 20px;
}

.item-details p {
    color: #000;
    font-weight: 800;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.item-details .item-details-author {
    font-size: 15px;
    color: #a09f9f;
}

.item-img {
    width: 220px;
    height: 330px;
}
</style>
