<script>

import StockCard from '../common/StockCard.vue';

export default {
    components: {
        StockCard,
    },
    data() {
        return {
            stocks: [
                {
                    id: 1,
                    image: "/src/assets/img/stocks/1.png",
                    alt: "Stock 1",
                    link: "https://example.com/stock1",
                },
                {
                    id: 2,
                    image: "/src/assets/img/stocks/2.png",
                    alt: "Stock 2",
                    link: "https://example.com/stock2",
                },
            ],
        };
    },
};

</script>

<template>
    <div class="title-stock">Акции</div>
    <section class="container-stocks">
        <div class="stocks-content">
            <stock-card v-for="stock in stocks" :key="stock.id" :stock="stock" />
        </div>
    </section>

</template>

<style scoped>

.title-stock{
  color: #000;
  font-size: 40px;
  text-align: center;
  
}
.container-stocks{
  padding-bottom: 100px;
}

.stocks-content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 0 0;
  width: 1520px;
  
}

</style>