<script>
export default {
    data() {
        return {
            book: {},
        };
    },
    created() {
        this.book = {
            id: parseInt(this.$route.params.id),
            image_cover: this.$route.query.image_cover,
            title: this.$route.query.title,
            author: this.$route.query.author,
            publisher: this.$route.query.publisher,
            series: this.$route.query.series,
            pub_year: parseInt(this.$route.query.pub_year),
            isbn: this.$route.query.isbn,
            pages: parseInt(this.$route.query.pages),
            size: this.$route.query.size,
            // typecover: this.$route.query.typecover,
            circulation: parseInt(this.$route.query.circulation),
            weight: parseInt(this.$route.query.weight),
            age_restriction: this.$route.query.age_restriction,
            description: this.$route.query.description,
        };
    },
};
</script>

<template>
    <section class="container-details">
        <div class="top-content">
            <div class="content-img">
                <img :src="book.image_cover" :alt="book.title" />
                <a class="fav" href="#">
                    <img src="../assets/img/navbar/favorite.png" alt="" />
                </a>
            </div>
            <div class="content-params">
                <div class="params-title">{{ book.title }}</div>
                <div class="params-author">{{ book.author }}</div>
                <div class="params">
                    <table>
                        <tr>
                            <td>ID товара</td>
                            <td>{{ book.id }}</td>
                        </tr>
                        <tr>
                            <td>Издательство</td>
                            <td>{{ book.publisher }}</td>
                        </tr>
                        <tr>
                            <td>Серия</td>
                            <td>{{ book.series }}</td>
                        </tr>
                        <tr>
                            <td>Год издания</td>
                            <td>{{ book.pub_year }}</td>
                        </tr>
                        <tr>
                            <td>ISBN</td>
                            <td>{{ book.isbn }}</td>
                        </tr>
                        <tr>
                            <td>Количество страниц</td>
                            <td>{{ book.pages }}</td>
                        </tr>
                        <tr>
                            <td>Размер</td>
                            <td>{{ book.size }}</td>
                        </tr>
                        <!-- <tr>
                            <td>Тип обложки</td>
                            <td>{{ book.typecover }}</td>
                        </tr> -->
                        <tr>
                            <td>Тираж</td>
                            <td>{{ book.circulation }}</td>
                        </tr>
                        <tr>
                            <td>Вес, г</td>
                            <td>{{ book.weight }}</td>
                        </tr>
                        <tr>
                            <td>Возрастные ограничения</td>
                            <td>{{ book.age_restriction }}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="content-purchase">
                <div class="shop">
                    <div class="shop-img">
                        <img src="/src/assets/img/brands/Chitai.png" alt="" />
                    </div>
                    <div class="shop-prices">
                        <div class="shop-small-price">849₽</div>
                        <div class="shop-big-price">645₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
                <div class="shop">
                    <div class="shop-img">
                        <img src="/src/assets/img/brands/Labirint.png" alt="" />
                    </div>
                    <div class="shop-prices">
                        <div class="shop-small-price">849₽</div>
                        <div class="shop-big-price">702₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
                <div class="shop">
                    <div class="shop-img">
                        <img src="/src/assets/img/brands/Book24.png" alt="" />
                    </div>
                    <div class="shop-prices">
                        <div class="shop-small-price">1014₽</div>
                        <div class="shop-big-price">740₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-content">
            {{ book.description }}
        </div>
    </section>
</template>

<style scoped>
.container-details {
    position: relative;
}

.top-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 50px;
}

.content-img {
    margin-left: 70px;
    border-radius: 10px;
    position: relative;
    padding-top: 20px;
    width: 350px;
    height: 540px;
}

.content-img .fav {
    position: absolute;
    top: 5%;
    background-color: #ffff;
    border-radius: 5px;
    right: 5%;
}

.content-img .fav:hover {
    background-color: #d5afb0;
    transition: background-color 0.2s linear;
}

.content-params {
    margin-right: 600px;
}

.params-title {
    color: #000;
    font-size: 40px;
    margin-bottom: 10px;
    padding-left: 30px;
}

.params-author {
    color: #b0b0b0;
    font-size: 15px;
    margin-bottom: 20px;
    padding-left: 30px;
}

td {
    padding: 10px 30px;
    font-size: 15px;
    color: #000;
}

.content-purchase {
    position: absolute;
    right: 1%;
    top: 2%;
    border: 1px solid #f3f3f3;
    border-radius: 8px;
    padding: 20px 30px 20px 30px;
}

.shop {
    display: flex;
    position: relative;
    margin-bottom: 60px;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 50px;
}

.shop:last-child {
    margin-bottom: 0;
    border: none;
    padding-bottom: 10px;
}

.shop-prices {
    margin-left: 80px;
}

.shop-img {
    width: 232px;
    height: 47px;
}

.shop-small-price {
    font-size: 15px;
    color: #b0b0b0;
    text-decoration: line-through;
}

.shop-big-price {
    color: #000;
    font-size: 20px;
}

.buy-btn {
    margin-left: 50px;
    margin-top: 2px;
    color: #ffffff;
    font-size: 15px;
    border: 1px transparent;
    background-color: #f16d70;
    padding: 12px 30px 12px 30px;
    border-radius: 8px;
    cursor: pointer;
}

.buy-btn:hover {
    color: #c7c3c3;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.5);
    transition: all 0.1s linear;
}

.buy-btn a:hover {
    color: #c7c3c3;
    transition: all 0.1s linear;
}

.bottom-content {
    font-size: 15px;
    color: #000;
    width: 900px;
    height: 115px;
    text-align: justify;
    padding: 20px;
    margin-bottom: 150px;
    margin-left: 50px;
}
</style>
