<script>

</script>
<template>
    <div class="accardeon">
        <div class="accardeon-item">
            <input type="checkbox" class="accardeon-input" id="accardeon-2">
            <label for="accardeon-2" class="accardeon-title">Все книги</label>
            <div class="accardeon-content">
                <div> <a href="#/name_category">Боевики и триллеры</a></div>
                <div> <a href="#/name_category">Детективы</a></div>
                <div> <a href="#/name_category">Драматургия</a></div>
                <div> <a href="#/name_category">Кино и книги</a></div>
                <div> <a href="#/name_category">Книги на иностранных языках</a></div>
                <div> <a href="#">Книги о приключениях</a></div>
                <div> <a href="#">Комиксы.Манга.Артбуки</a></div>
                <div> <a href="#">Литературные премии</a></div>
                <div> <a href="#">Любовный роман</a></div>
                <div> <a href="#">Поэзия</a></div>
                <div> <a href="#">Проза</a></div>
                <div> <a href="#">Ужасы.Мистика</a></div>
                <div> <a href="#">Фантастика</a></div>
                <div> <a href="#">Фэнтези</a></div>
                <div> <a href="#">Эпос и фольклор</a></div>
                <div> <a href="#">Юмор и сатира</a></div>
            </div>
        </div>
    </div>
    <div class="filter">
        <div><a class="active" href="#/newbooks">Новинки</a> </div>
        <div><a href="#/sales">Скидки</a></div>
    </div>
</template>
<style scoped>
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

.accardeon-title{
  display: block;
  padding: 10px 15px;
  color: #000;
  cursor: pointer;
  transition: background .2s ease-out;
  position: relative;
}

.accardeon-title:after{
  content: "";
  display: block;
  position: absolute;
  top: 50%;right: 15px;
  transform: translateY(-50%);
  border-style: solid;
  border-width: 10px 5px 0 5px;
  border-color: #000 transparent transparent transparent;
}

.accardeon-title:hover{
  color: #f48a8c;
}

.filter{
  width: 300px;

}

.filter div{
  border: 1px solid #B0B0B0;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  border-radius: 5px;
}

.filter div:hover{
  cursor: pointer;
  color: #f48a8c;
}


.filter a:hover{
  color: #f48a8c;
}
</style>