<template>
  <div class="home">
    <loader v-if="loading" />
    <div v-else>
      <video-background />
      <head-menu />
      <main-header
        :title="{
          white: 'Анимация ',
          red: 'Логотипов',
          subtitle: 'Видеоконтент, который продает'
        }"
      />
      <second-menu />
      <default-content :info="info" :content="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
  import VideoBackground from '@/components/VideoBackground'
  import HeadMenu from '@/components/HeadMenu'
  import MainHeader from '@/components/MainHeader'
  import DefaultContent from '@/components/DefaultContent'
  import SecondMenu from '../components/SecondMenu'
  import Footer from '../components/Footer'
  import Loader from '../components/Loader'
  export default {
    name: 'Logo',
    components: {
      Loader,
      Footer,
      SecondMenu,
      DefaultContent,
      MainHeader,
      HeadMenu,
      VideoBackground
    },
    data: () => ({
      loading: true,
      info: {
        title: 'Логотипы',
        description:
          'Анимация вашего логотипа — отличный способ оформить видео компании или личного бренда! Его можно использовать, как вступление к роликам, создавая фирменный стиль Вашего контента!',
        subheader: 'Анимированые логотипы',
        video: 244438214
      },
      content: [
        {title: 'Дневник архитектора', video: 246230509},
        {title: 'Promo for Firefox show', video: 339964430},
        {title: 'Applekeeper logo', video: 356581537},
        {title: 'Applekeeper logo v.2', video: 356581468},
        {title: 'Welcome school logo', video: 357053878},
        {title: 'D.avis minimal logo', video: 356581448},
        {title: 'D.avis minimal logo v.2', video: 356581413},
        {title: 'D.avis minimal logo v.3', video: 356581384},
        {title: 'D.avis minimal logo v.4', video: 356581352},
        {title: 'D.avis minimal logo v.5', video: 356581310},
        {title: 'D.avis intro video logo', video: 356581279},
        {title: 'D.avis intro video logo v.2', video: 356581247},
        {title: 'Fitness studio logo minimal', video: 356579309},
        {title: 'Motoposad logo', video: 356579279},
        {title: 'Fitness studio logo fire', video: 356579252},
        {title: 'D.avis logo bulb', video: 356579228}
      ]
    }),
    mounted() {
      this.loading = false
    }
  }
</script>

<style scoped></style>
