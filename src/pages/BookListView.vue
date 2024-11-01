<script setup>

</script>

<template>
  <div class="right">
    <!-- .blog就对应表示一个博客 -->
    <div class="blog">
      <!-- 博客标题 -->
      <div class="title">
        我的第一篇作文
      </div>
      <!-- 博客发布时间 -->
      <div class="date">
        2022-05-22 15:34:00
      </div>
      <!-- 博客的摘要 -->
      <div class="desc">
        所有的流浪都是归程<br>
        红尘路远，岁月无声，我们不过是行路之人，以过客身份，找寻归依。远方，应该是有诗的。——题记<br>
        从山脚到山顶需要走多久？从望岳到登高，便是杜甫的一生。李白天赋难学，<br>
      </div>
      <a href="#">查看全文 &gt;&gt;</a>
    </div>
    <div class="blog">
      <!-- 博客标题 -->
      <div class="title">
        我的第二篇作文
      </div>
      <!-- 博客发布时间 -->
      <div class="date">
        2022-05-22 15:34:00
      </div>
      <!-- 博客的摘要 -->
      <div class="desc">
        一草一木皆是情<br>
        人生中最好的境界，来自于内心的丰盈。——题记<br>
        读《人间草木》，感受的是作者汪曾祺的草木情怀，更是他的诗意人生。《人间草木》是汪曾祺禁<br>
      </div>
      <a href="#">查看全文 &gt;&gt;</a>
    </div>
  </div>
</template>

<style scoped>
/* 这个文件中专门写和博客列表页相关的样式 */
.blog{
  width: 98%;
  /* 高度如果不设置, 就取决于里面的内容高度的综合 */
  padding: 20px;
}

.blog .title{
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
}

.blog .date{
  text-align: center;
  color: rgb(231, 24, 186);
  padding: 10px 0;
}

.blog .desc{
  text-indent: 2em;
}

.blog a{
  /* 设置成块级元素，方便设置尺寸和边距 */
  display: block;
  width: 140px;
  height: 40px;
  margin: 10px auto;
  border: 2px black solid;

  color: black;
  line-height: 40px;
  text-align: center;
  text-decoration: none;

  /* 过渡效果 */
  transition: all 0.5s;
}

/* 伪类选择器 表示光标移动到元素上的效果 */
.blog a:hover{
  background: rgb(97, 84, 84);
  color: #fff;
}

</style>