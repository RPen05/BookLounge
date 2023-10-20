<script>
import Logo from '../common/Logo.vue'

export default {
    components: {
        Logo,
    },
};
</script>

<template>
    <footer>
        <div class="container-footer">
            <div class="footer-content">
                <div class="footer-left">
                    <img src="/src/assets/img/navbar/logo.png" alt="" class="footer-logo">
                    <p>BOOKLOUNGE - это ваш онлайн-каталог хужожественной литературы. Мы предоставляем огромный список книг ведущих магазинов. У нас вы легко и быстро найдете книгу, сравните цены, выберите магазин и купите книгу по выгодной цене!</p>
                </div>
                <div class="footer-middle">
                    <p>Категории</p>
                    <div class="middle">
                        <div class="footer-middle1">
                            <div><a href="#">Боевики и триллеры</a></div>
                            <div><a href="#">Детективы</a></div>
                            <div><a href="#">Драматургия</a></div>
                            <div><a href="#">Кино и книги</a></div>
                        </div>
                        <div class="footer-middle2">
                            <div><a href="#">Книги на иностранных языках</a></div>
                            <div><a href="#">Книги о приключениях</a></div>
                            <div class="footer-more"><a href="#">Смотреть больше </a><img src="/src/assets/img/sales/icons/more_arrow.png" alt=""></div>
                        </div> 
                    </div>
                
                </div>
            
                <div class="footer-right">
                    <p>О нас</p>
                    <div><a href="#">О проекте</a></div>
                    <div><a href="#">Вопросы и ответы</a></div>
                    <div><a href="#">Контакты</a></div>
                </div>
                <div class="footer-right-contacts">
                    <div class="footer-contacts1"><img src="/src/assets/img/footer/email.png" alt="">support@booklounge.com</div>
                    <div class="footer-contacts2"><img src="/src/assets/img/footer/node.png" alt="">Обратная связь</div>
                </div>
            </div>
            
        </div>
    </footer>
    <div style="border-bottom: solid 1px #e9e9e9; margin-top: 80px;"></div>
    <div class="footer-agreement">
       <div>©2023 BOOKLOUNGE Пользовательское соглашение</div> 
       <div><a href="#"><img src="/src/assets/img/footer/link.png" alt=""></a></div>
    </div>
</template>