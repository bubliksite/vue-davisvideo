<template>
  <div class="home">
    <loader v-if="loading" />
    <div v-else>
      <video-background />
      <head-menu />
      <main-header
        :title="{
          white: 'Davis',
          red: 'Video',
          subtitle: 'Видеоконтент, который продает'
        }"
      />
      <second-menu />
      <main-content />
      <Footer />
    </div>
  </div>
</template>

<script>
  import VideoBackground from '@/components/VideoBackground'
  import HeadMenu from '@/components/HeadMenu'
  import MainHeader from '@/components/MainHeader'
  import SecondMenu from '@/components/SecondMenu'
  import MainContent from '@/components/MainContent'
  import Footer from '@/components/Footer'
  import Loader from '@/components/Loader'
  export default {
    name: 'Home',
    data: () => ({
      loading: true
    }),
    mounted() {
      this.loading = false
    },
    components: {
      Loader,
      Footer,
      MainContent,
      SecondMenu,
      MainHeader,
      HeadMenu,
      VideoBackground
    }
  }
</script>
