<template>
  <div>
    <h1>首页</h1>
    <nav>
      <router-link to="/upgrade-calculator" class="link-block">战场升级计算</router-link>
      <router-link to="/material-yield" class="link-block">计算材料收益</router-link>
      <router-link to="/stone-yield" class="link-block">计算幻仙石收益</router-link>
      <router-link to="/roi" class="link-block">回本金额计算</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<!-- 在这里添加一些CSS样式 -->
<style>
.link-block {
  display: block;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.link-block:hover {
  background-color: #007bff;
  color: white;
}
</style>