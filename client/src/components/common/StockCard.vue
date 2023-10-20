<script>
export default {
    props: {
        stock: {
            type: Object,
            required: true,
            default: () => ({}),
        },
    },
};
</script>

<template>
    <div class="stock-item">
        <a :href="stock.link" target="_blank">
            <img :src="stock.image" :alt="stock.alt" />
        </a>
    </div>
</template>

<style scoped>
.stock-item{
  padding-top: 50px;
  margin: 0 auto;
}

.stock-item img{
  border-radius: 15px;
}

.stock-item img:hover{
  box-shadow: 5px 5px 5px 0px rgba(78, 77, 77, 0.3);
  filter: drop-shadow(5px 5px 5px rgba(94, 93, 93, 0.3));
  transition: all 0.1s linear;
}

</style>