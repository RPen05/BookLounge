<script>
import BookItem from '../common/BookItem.vue'

export default {
  components: {
      BookItem,
  },
  props: {
    title: {
        type: String,
        required: true,
        default: 'Some title',
    },
    books: {
        type: Array,
        required: true,
        default: () => [],
    },
  },
};
</script>
<template>
    <section class="container-block">
        <div class="block-header">
            <div class="header-title">
                <a href="#">{{ title }}</a> 
            </div>
            <a class="header-more-link" href="#">
                <div class="header-more">
                    <span>Все {{ title }}</span>  
                    <img src="/src/assets/img/sales/icons/more_arrow.png" alt="">
                </div>  
            </a>
        </div>
        <div class="items">
            <BookItem v-for="book in books" :key="book.id" :book="book" />
        </div>
    </section>
</template>


<style scoped>
    
.container-block{
  width: 100%;
  margin-top: 10px;
  background-color: #ffffff;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 50px;
  padding-bottom: 100px;
}

.container-block a:hover{
  color: #000;
}

.container-block ul{
  list-style: none;
}

.container-block a{
  text-decoration: none;
}

.block-header{
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 20px;
  padding-right: 10px;
  margin-right: 10px;
  
}

.header-title{
  font-size: 40px;
  color: #000 ;
  font-family: 'Wix Madefor Display';

}

.header-more span{
  font-size: 15px;
  color: #F16D70;
  margin-right: 20px;
  position: absolute;
  right: 2%;
  top: 45%;
}

.header-more img{
  position: absolute;
  right: 1.5%;
  top: 50%;
}

.header-more{
  cursor: pointer;
}

.header-more-link span:hover{
  text-decoration: underline;
  transition: all 0.2s linear;
}

.items{
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;

}
</style>