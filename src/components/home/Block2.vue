<template>
  <div class="content-base-desktop-box">
    <div class="content-base-desktop home-block2">
      <div class="header-left-box">
        <span class="header-left-big">we have a problem</span>
        <span class="header-left-little">устал от кучи скриншотов с правками, метками и постоянным вопросом как это систематизировать?</span>
      </div>
      <div class="problem-video-box">
        <div class="problem-video-left-box">
          <span class="problem-video-title">Productium</span>
          <span class="problem-video-text">решает все эти проблемы и дает возможность легко обсуждать дизайн, формировать задачи и идеи с клиентом либо командой, онлайн либо офлайн</span>
          <div class="problem-beta-box">
            <span class="problem-beta-text">Бета версия</span>
            <img src="@/assets/img/home/arrowLine.svg" alt="">
          </div>
        </div>
        <div class="problem-video-right">
          <video width="540" height="538"
                 controls="controls" poster="/video/videoPoster.png">
            <source src="/video/productView.mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block2",
}
</script>