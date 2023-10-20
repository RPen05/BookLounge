<script>

</script>
<template>
    <div class="accardeon">
        <div class="accardeon-item">
            <input type="checkbox" class="accardeon-input" id="accardeon-3">
            <label for="accardeon-3" class="accardeon-title">Фильтры</label>
            <div class="accardeon-content">
                <div> 
                    <input type="checkbox" class="filter-input" id="filter1">
                    <label for="filter1" class="filter-title">Новинки</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter3">
                    <label for="filter3" class="filter-title">Боевики и триллеры</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter4">
                    <label for="filter4" class="filter-title">Детективы</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter5">
                    <label for="filter5" class="filter-title">Кино и книги</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter6">
                    <label for="filter6" class="filter-title">Книги на иностранных языках</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter7">
                    <label for="filter7" class="filter-title">Книги о приключениях</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter8">
                    <label for="filter8" class="filter-title">Комиксы.Манга.Артбуки</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter9">
                    <label for="filter9" class="filter-title">Литературыне премии</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter10">
                    <label for="filter10" class="filter-title">Любовный роман</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter11">
                    <label for="filter11" class="filter-title">Поэзия</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter12">
                    <label for="filter12" class="filter-title">Ужасы.Мистика</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter13">
                    <label for="filter13" class="filter-title">Фантастика</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter14">
                    <label for="filter14" class="filter-title">Фэнтези</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter15">
                    <label for="filter15" class="filter-title">Эпос и фольклор</label>
                </div>
                <div> 
                    <input type="checkbox" class="filter-input" id="filter16">
                    <label for="filter16" class="filter-title">Юмор и сатира</label>
                </div>
            </div>
        </div>
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


.accardeon-content{
  display: none;
  padding: 10px 15px;
  color: #000;
  font-size: 15px;
}

.accardeon-content div{
  font-size: 15px;
  color: #000;
  margin-bottom: 20px;
  
}



.accardeon-content a:hover{
  color: #f48a8c;
}

.accardeon-content:last-child{
  margin-bottom: -10px;
  
}
</style>