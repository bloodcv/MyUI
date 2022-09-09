<template>
  <div class="my-kit-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
    <section class="mobile-part">
      <div class="mobile-wrap">
        <router-view name="PreviewMobile"></router-view>
      </div>
    </section>
  </div>
</template>

<script setup>
import ComponentList from '../packages/list.json';
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.my-kit-doc {
  display: flex;
  height: 100vh;
  overflow-x: auto;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
  }
  main {
    flex: 1;
    padding: 15px;
    height: 100%;
    min-width: 800px;
    overflow-y: auto;
    box-sizing: border-box;
  }
  .mobile-part {
    width: 450px;
    flex-shrink: 0;
    .mobile-wrap {
      border: 1px solid rgb(204 204 204 / 38%);
      box-shadow: rgb(204 204 204 / 38%) 0px 0px 10px 5px;;
      border-radius: 10px;
      width: 375px;
      height: 667px;
      overflow-y: auto;
      margin: 100px auto 0;
    }
  }
}
</style>
