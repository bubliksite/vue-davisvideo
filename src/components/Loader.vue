<template>
  <div class="loader d-flex align-items-center justify-content-center">
    <div class="d-flex align-items-end">
      <img src="@/assets/images/logo_loader.png" alt="" />
      <img class="ml-3 brick" src="@/assets/images/logo_brick.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
  .loader {
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: #1e1e1e;
    z-index: 999;
  }
  .brick {
    animation: rotate 1s infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
