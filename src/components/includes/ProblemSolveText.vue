<template>
  <div class="problem-video-left-box">
    <span class="problem-video-title">Productium</span>
    <span class="problem-video-text">это Agile-среда для запуска IT-проектов. Позволяет командам и стейкхолдерам создавать проекты от этапа проектирования и до релиза продукта</span>
    <div @click="action && action()"
         class="problem-beta-box">
      <span class="problem-beta-text">Beta-версия</span>
      <div class="problem-beta-img"></div>
<!--      <img src="@/assets/img/home/arrowLine.svg"-->
<!--           class="problem-beta-img"-->
<!--           alt="">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProblemSolveText",
  props: {
    action: Function
  }
}
</script>