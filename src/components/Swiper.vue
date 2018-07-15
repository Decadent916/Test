<template>
   <div class="test">
     <swiper :options="swiperOption1" ref="mySwiper" style="width: 100%;height: 200px;">
       <swiper-slide style="background: red;color: #fff;">
         <swiper :options="swiperOption2" ref="mySwiper2" style="width: 100%;height:100px;">
           <swiper-slide style="background: #000;color: #fff;">测试4</swiper-slide>
           <swiper-slide style="background: #000;color: #fff;">测试5</swiper-slide>
           <swiper-slide style="background: #000;color: #fff;">测试6</swiper-slide>
         </swiper>
       </swiper-slide>
       <swiper-slide style="background: yellow;color: #fff;">测试2</swiper-slide>
       <swiper-slide style="background: green;color: #fff;">测试3</swiper-slide>
     </swiper>
   </div>
</template>

<script>
  import { swiper,swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Swiper",
      components:{
          swiper,
        swiperSlide
      },
      data(){
          return{
            swiperOption1:{
              notNextTick:true
            },
            swiperOption2:{
              notNextTick:true,
              autoplay:true
            }
          }
      }
    }
</script>

<style scoped>

</style>
