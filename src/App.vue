<template>
  <div class="big-box">
    <div class="header-box">
      <HeaderView/>
    </div>

    <div class="main-box">
      <RouterView/>
    </div>

  </div>
</template>
<script setup>
import HeaderView from "./components/header/HeaderView.vue";
</script>

<style>

svg {
  width: 50px;
  height: 50px;
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95); /* 使用黑色半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: rgba(255, 255, 255, 0); /* 背景透明 */
  padding: 20px;
  text-align: center;
  width: 400px;
}

/* 九宫格布局 */
.grid-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
}

.menu-item {
  background-color: rgba(255, 255, 255, 0.1); /* 半透明的按钮 */
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px; /* 设置固定的高度 */
  width: 120px; /* 设置固定的宽度 */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.3s;
  position: relative;
  overflow: hidden;
  white-space: nowrap; /* 防止换行 */
}

.menu-item svg {
  font-size: 24px;
  margin-bottom: 10px;
  transition: transform 0.3s;
}

.menu-item span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /* 截断文本显示省略号 */
  max-width: 60px; /* 限制文本显示的宽度 */
  transition: transform 0.3s, font-size 0.3s;
}

/* 鼠标悬停时，显示完整的文本，字体变大 */
.menu-item:hover span {
  max-width: none; /* 取消文本宽度限制 */
  font-size: 24px; /* 字体变大 */
}

.menu-item:hover svg {
  display: none; /* 鼠标悬停时隐藏图标 */
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.3); /* 鼠标悬停时的背景变化 */
}

.big-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.header-box {
//background-color: #4CAF50; /* 头部背景色 */ color: white; /* 文字颜色 */ padding: 15px;
  text-align: center;
  flex: 0 0 auto;
  height: 8%;
}

.main-box {
  flex: 1; /* 主体部分填满剩余空间 */
  padding: 20px;
  overflow-y: auto; /* 允许主体部分垂直滚动 */
  background-color: #f4f4f4;
}
</style>