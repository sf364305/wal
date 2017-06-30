<template>
  <div id="app">
      <div class="contianer">
        <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件，也就是home组件  -->
        <router-view></router-view>
      </div>
      <div class="nav-bottom">
          <!-- 引入公用的尾部 footer组件 -->
            <v-footer></v-footer>
      </div>
  </div>
</template>
<style>
#app {
  
}
.nav-top {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -600px;
  z-index: 99;
}
.banner{
  width: 100%;
  height: 370px;
  overflow: hidden;
}
.footer {
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: scale(1.2);
  opacity: 0;
}
</style>
<script>
//引入header组件
import footer from './components/footer.vue'
//输出header组件
export default{
  components: {
    'v-footer': footer
  }
}
</script>