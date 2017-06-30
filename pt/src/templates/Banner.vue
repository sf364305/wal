<template>
    <div class="swiper-container banner-index">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg"><img :src="str.url" alt=""></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['listImg'],
        mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 2000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>
<style>
    .banner-index img {
        display: block;
        width: 100%;
        height: auto;
    }
</style>