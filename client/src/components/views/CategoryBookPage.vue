<script>
import FilterGenres from '../common/FilterGenres.vue';
import Filter from '../common/Filter.vue';
import BookBlock from '../common/BookBlock.vue';
export default {
  components: {
      FilterGenres,
      Filter,
      BookBlock,
  },
  data() {
    return {
      books: [],
    }
  },
  created() {
    const category = this.category;
    const title = this.title || 'Some title';
    if (category === 'discounts') {
      this.books = this.discountBooks;
    } else if (category === 'new') {
      this.books = this.newBooks;
    } else if (category === 'all') {
      this.books = this.allBooks;
    } 
    console.log('Books:', this.books);
  },
};
</script>

<template>
    <div class="top-title">
        <div class="title">
            <div class="title-text">Новинки</div>
            <div class="count-books">Найдено 2 410 книг</div>
        </div>
        <div class="accardeon">
            <div class="accardeon-item">
                <input type="checkbox" class="accardeon-input" id="accardeon-1">
                <label for="accardeon-1" class="accardeon-title">Сначала новые</label>
                <div class="accardeon-content">
                    <div> <a href="#">По возрастанию цены</a></div>
                    <div> <a href="#">По убыванию цены</a></div>
                   
                </div>
            </div>
        </div>
    </div>
    <section class="container-books">
        <div class="content-books">
            <div class="accardeon-column">
                <FilterGenres/>
                <Filter/>
                <BookBlock :books="books"/>
            </div>

        </div>
    </section>
</template>

<style scoped>
.title{
  color: #000;
  font-size: 40px;
  margin-left: 65px;
  margin-bottom: 200px;
}
.count-books{
  font-size: 15px;
  color: #B0B0B0;
  margin-left: 5px;
}
.container-books{
  margin-top: -130px;
  padding-bottom: 100px;
}


.accardeon{
  width: 300px;
  margin-right: 20px;
  margin-top: 20px;
}

.accardeon-item{
  border: 1px solid #B0B0B0;
  border-radius: 5px;
  margin-bottom: 10px;
}
.top-title{
  display: flex;
  justify-content: space-between;
}

.content-books{
  display: flex;
  flex-wrap: nowrap;
  
}

.accardeon-column{
  margin-left: 70px;
}

.accardeon-input{
  width: 0;
  height: 0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.accardeon-input:checked ~ .accardeon-title{
  color: #f48a8c;
}

.accardeon-input:checked ~ .accardeon-title:after{
  border-style: solid;
  border-width: 0 5px 10px 5px;
  border-color: transparent transparent #f48a8c transparent;
}

.accardeon-input:checked ~ .accardeon-content{
  display: block;
}
</style>