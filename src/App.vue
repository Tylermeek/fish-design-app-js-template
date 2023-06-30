<script  lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <div>
      <a href="https://fish-design-fish-design-vite.vercel.app/" target="_blank">
        <img src="./assets/fish-design.svg" class="logo fish" alt="fish-design logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="FishDesign + Vite + Vue" />
    <div style="margin-bottom: 20px">
      <Button color="blue">主要按钮</Button>
      <Button color="green">绿色按钮</Button>
      <Button color="gray">灰色按钮</Button>
      <Button color="yellow">黄色按钮</Button>
      <Button color="red">红色按钮</Button>
    </div>
    <div style="margin-bottom: 20px">
      <Button color="blue" plain>朴素按钮</Button>
      <Button color="green" plain>绿色按钮</Button>
      <Button color="gray" plain>灰色按钮</Button>
      <Button color="yellow" plain>黄色按钮</Button>
      <Button color="red" plain>红色按钮</Button>
    </div>
    <div style="margin-bottom: 20px">
      <Button size="small" plain>小按钮</Button>
      <Button size="medium" plain>中按钮</Button>
      <Button size="large" plain>大按钮</Button>
    </div>
    <div style="margin-bottom: 20px">
      <Button color="blue" round plain icon="search">搜索按钮</Button>
      <Button color="green" round plain icon="edit">编辑按钮</Button>
      <Button color="gray" round plain icon="check">成功按钮</Button>
      <Button color="yellow" round plain icon="message">提示按钮</Button>
      <Button color="red" round plain icon="delete">删除按钮</Button>
    </div>
    <div style="margin-bottom: 20px">
      <Button color="blue" round plain icon="search"></Button>
      <Button color="green" round plain icon="edit"></Button>
      <Button color="gray" round plain icon="check"></Button>
      <Button color="yellow" round plain icon="message"></Button>
      <Button color="red" round plain icon="delete"></Button>
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

.logo.fish:hover {
  filter: drop-shadow(0 0 2em #d1463cb4);
}

</style>
