<template>
  <div class="blog">
    <div class="title">
      {{ props.post.title }}
    </div>
    <div class="date">
      {{ props.post.date }}
    </div>
    <div class="desc" v-html="props.post.content"></div>
    <div class="remain-date">
      <compute-remain-tiem-view :timestamp="props.post.date" />
    </div>
  </div>
</template>

<script setup>
import ComputeRemainTiemView from "@/components/ComputeRemainTiemView.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

</script>

<style scoped>
/* 这个文件中专门写和博客列表页相关的样式 */
.blog {
  width: 98%;
  /* 高度如果不设置, 就取决于里面的内容高度的综合 */
  padding: 20px;
  background-color: #fff;
  width: 80%;
  border-radius: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s;
}

.blog:hover {
  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3), 10px 10px 20px rgba(0, 0, 0, 0.3);
}

.blog .title {
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
  color: #333;
}

.blog .date {
  text-align: left;
  color: rgb(231, 24, 186);
  padding: 5px 0 10px;
}

.blog .desc {
  text-align: center;
  text-indent: 2em;
  color: #666;
}

.blog a {
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
.blog a:hover {
  background: rgb(97, 84, 84);
  color: #fff;
}

.blog .remain-date {
  text-align: right;
  padding-top: 20px;
}
</style>