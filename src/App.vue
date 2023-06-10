<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="./assets/fish-design.svg"
          style="filter: invert(100%)"
          class="logo"
          alt="fish-design logo"
        />
      </a>
    </div>
    <HelloWorld msg="FishDesign + Vite + Vue" />
    <div style="margin-bottom: 20px">
      <FIshButton color="blue">主要按钮</FIshButton>
      <FIshButton color="green">绿色按钮</FIshButton>
      <FIshButton color="gray">灰色按钮</FIshButton>
      <FIshButton color="yellow">黄色按钮</FIshButton>
      <FIshButton color="red">红色按钮</FIshButton>
    </div>
    <div style="margin-bottom: 20px">
      <FIshButton color="blue" plain>朴素按钮</FIshButton>
      <FIshButton color="green" plain>绿色按钮</FIshButton>
      <FIshButton color="gray" plain>灰色按钮</FIshButton>
      <FIshButton color="yellow" plain>黄色按钮</FIshButton>
      <FIshButton color="red" plain>红色按钮</FIshButton>
    </div>
    <div style="margin-bottom: 20px">
      <FIshButton size="small" plain>小按钮</FIshButton>
      <FIshButton size="medium" plain>中按钮</FIshButton>
      <FIshButton size="large" plain>大按钮</FIshButton>
    </div>
    <div style="margin-bottom: 20px">
      <FIshButton color="blue" round plain icon="search">搜索按钮</FIshButton>
      <FIshButton color="green" round plain icon="edit">编辑按钮</FIshButton>
      <FIshButton color="gray" round plain icon="check">成功按钮</FIshButton>
      <FIshButton color="yellow" round plain icon="message"
        >提示按钮</FIshButton
      >
      <FIshButton color="red" round plain icon="delete">删除按钮</FIshButton>
    </div>
    <div style="margin-bottom: 20px">
      <FIshButton color="blue" round plain icon="search"></FIshButton>
      <FIshButton color="green" round plain icon="edit"></FIshButton>
      <FIshButton color="gray" round plain icon="check"></FIshButton>
      <FIshButton color="yellow" round plain icon="message"></FIshButton>
      <FIshButton color="red" round plain icon="delete"></FIshButton>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
