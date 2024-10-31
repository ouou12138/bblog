<template>
  <span class="date">距离我写下这篇文章已经过去了:{{ formattedTimeDifference }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 接收时间戳作为prop
const props = defineProps({
  timestamp: {
    type: String,
    required: true
  }
});

// 计算时间差并格式化
const formattedTimeDifference = ref('');

// 更新时间差的方法
const updateTimeDifference = () => {
  const pastTimeUTC = new Date(props.timestamp);
  const pastTimeBeijing = new Date(pastTimeUTC.getTime() - 8 * 60 * 60 * 1000); // 加 8 小时

  const now = new Date();

  // 计算时间差
  const difference = now - pastTimeBeijing; // 以毫秒为单位的时间差

  if (difference < 0) {
    return { hours: 0, minutes: 0, seconds: 0 }; // 如果目标时间是将来的时间
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  formattedTimeDifference.value = `${hours}h${minutes}m${seconds}s`
};

// 设置定时器
let timer;

onMounted(() => {
  // 初始化时立即更新一次
  updateTimeDifference();
  // 每秒更新一次
  timer = setInterval(updateTimeDifference, 1000);
});

// 清理定时器
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.date{
  text-align: center;
  color: rgb(231, 24, 186);
  padding: 10px 0;
}
</style>