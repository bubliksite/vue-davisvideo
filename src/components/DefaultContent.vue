<template>
  <div class="main-content">
    <div class="container">
      <section class="my-5">
        <h3 class="font-weight-light text-uppercase">{{ info.title }}</h3>
      </section>
    </div>
    <hr class="hr" />
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6 col-12">
          <vue-vimeo-player
            ref="player"
            :video-id="info.video"
            :options="{
              byline: false,
              responsive: true,
              pip: true,
              playsinline: false,
              title: false,
              portrait: false
            }"
          />
        </div>
        <div class="col-lg-6 col-12 d-flex align-items-center bg-light">
          <div>
            <h2 class="font-weight-bolder mt-3">{{ info.subheader }}</h2>
            <hr />
            <p class="mt-3 text-muted font-weight-light">
              {{ info.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-lg-4 col-md-6 col-12 mb-4"
          v-for="item in content"
          :key="item.video"
        >
          <h5 class="font-weight-bolder">{{ item.title }}</h5>
          <vue-vimeo-player
            ref="player"
            :video-id="item.video"
            :options="{
              byline: false,
              responsive: true,
              pip: true,
              playsinline: false,
              title: false,
              portrait: false
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {vueVimeoPlayer} from 'vue-vimeo-player'
  export default {
    name: 'DefaultContent',
    props: {
      info: {
        type: Object,
        required: true
      },
      content: {
        type: Array,
        required: true
      }
    },
    components: {vueVimeoPlayer}
  }
</script>

<style scoped></style>
