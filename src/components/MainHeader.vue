<template>
  <section class="header d-flex justify-content-center align-items-center">
    <div class="h text-center">
      <p class="m-0">{{ title.subtitle }}</p>
      <h1 class="text-uppercase">
        {{ title.white }}<span>{{ title.red }}</span>
      </h1>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MainHeader',
    props: {
      title: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped></style>
