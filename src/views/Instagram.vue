<template>
  <div class="home">
    <loader v-if="loading" />
    <div v-else>
      <video-background />
      <head-menu />
      <main-header
        :title="{
          white: 'Промо ',
          red: 'Instagram',
          subtitle: 'Видеоконтент, который продает'
        }"
      />
      <second-menu />
      <insta-content />
      <Footer />
    </div>
  </div>
</template>

<script>
  import VideoBackground from '@/components/VideoBackground'
  import HeadMenu from '@/components/HeadMenu'
  import MainHeader from '@/components/MainHeader'
  import SecondMenu from '../components/SecondMenu'
  import InstaContent from '../components/InstaContent'
  import Footer from '@/components/Footer'
  import Loader from '../components/Loader'
  export default {
    name: 'Instagram',
    data: () => ({
      loading: true
    }),
    mounted() {
      this.loading = false
    },
    components: {
      Loader,
      Footer,
      InstaContent,
      SecondMenu,
      MainHeader,
      HeadMenu,
      VideoBackground
    }
  }
</script>

<style scoped></style>
