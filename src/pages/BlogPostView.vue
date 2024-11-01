<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Post from "@/components/Post.vue";

const targetDate = new Date('2024-10-30T22:03:45'); // 目标时间
const elapsedTime = ref('');

const updateTime = () => {
  const now = new Date();
  const difference = targetDate - now;

  // 计算已经过去的时间
  const elapsedDifference = Math.abs(difference);
  const hoursElapsed = Math.floor((elapsedDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesElapsed = Math.floor((elapsedDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsElapsed = Math.floor((elapsedDifference % (1000 * 60)) / 1000);
  elapsedTime.value = `${hoursElapsed}h${minutesElapsed}m${secondsElapsed}s`;
};

let intervalId;

onMounted(() => {
  updateTime(); // 初始更新
  intervalId = setInterval(updateTime, 1000); // 每秒更新
});

onUnmounted(() => {
  clearInterval(intervalId); // 清理定时器
});


const posts = ref([
  {
    title: '我的第一篇作文',
    date: '2024-09-22 15:34:00',
    content: `所有的流浪都是归程<br>
        红尘路远，岁月无声，我们不过是行路之人，以过客身份，找寻归依。远方，应该是有诗的。——题记<br>
        从山脚到山顶需要走多久？从望岳到登高，便是杜甫的一生。李白天赋难学，<br>`,

  },
  {
    title: '我的第二篇作文',
    date: '2024-10-22 15:34:00',
    content: `一草一木皆是情<br>
        人生中最好的境界，来自于内心的丰盈。——题记<br>
        读《人间草木》，感受的是作者汪曾祺的草木情怀，更是他的诗意人生。《人间草木》是汪曾祺禁<br>`
  }
])


</script>

<template>
  <div class="right">
    <Post v-for="post in posts" :key="post.title" :post="post" />
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>