<template>
  <section class="video-background">
    <video autoplay loop muted ref="video">
      <source src="@/assets/video/sitevideo.mp4" type="video/mp4" />
      <source src="@/assets/video/sitevideo.webm" type="video/webm" />
    </video>
  </section>
</template>

<script>
  export default {
    name: 'VideoBackground'
  }
</script>

<style scoped></style>
