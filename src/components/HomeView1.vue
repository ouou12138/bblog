<template>
    <header class="header">Header</header>
    <main class="main">Main</main>
    <footer class="footer">Footer</footer>
</template>
<script>

</script>

<style>
.header,
.main,
.footer {
  /*居中*/
  margin: 0 auto;
  /*宽度自适应*/
  width: 80%;
  min-width: 1200px;
  text-align: center;
  color: #fff;
}

.header {
  position: fixed;
  /*头部固定*/
  right: 0;
  left: 0;
  height: 60px;
  line-height: 60px;
  background-color: rgb(185, 143, 224);
  z-index: 1;
}

.main {
  position: relative;
  top: 60px;
  padding-top: 60px;
  height: 600px;
  line-height: 600px;
  background-color: rgb(210, 155, 185);
}

.footer {
  position: relative;
  height: 100px;
  line-height: 100px;
  background-color: rgb(151, 201, 184);
}
</style>