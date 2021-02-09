<template>
  <div class="home">
    <loader v-if="loading" />
    <div v-else>
      <video-background />
      <head-menu />
      <main-header
        :title="{
          white: 'Монтаж ',
          red: 'Видео',
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
  import SecondMenu from '@/components/SecondMenu'
  import DefaultContent from '@/components/DefaultContent'
  import Footer from '@/components/Footer'
  import Loader from '../components/Loader'
  export default {
    name: 'Edit',
    components: {
      Loader,
      DefaultContent,
      SecondMenu,
      MainHeader,
      HeadMenu,
      VideoBackground,
      Footer
    },
    data: () => ({
      loading: true,
      info: {
        title: 'Монтаж видео',
        description:
          'Создание промо-ролика для вашего бизнеса и хобби, для дальнейшего продвижения в соц. сетях. Направленность ролика может быть любой, поможем составить сценарий, обговорим место и даты съемок. Сроки изготовления со сьемкой до 7 суток. Стоимость ролика зависит от сложности монтажа, длительности и обсуждается при заказе.',
        subheader: 'Монтаж видео',
        video: 353329261
      },
      content: [
        {title: 'Mirain promo', video: 357044394},
        {title: 'Lakhim teaser', video: 330738009},
        {title: 'Cyprus-Turkey 2018', video: 298046375},
        {title: "Karelija trip '16", video: 357043570},
        {title: 'Create a tattoo for Nuta_bokser', video: 247794447},
        {title: 'Create a tattoo for Serge', video: 334395778},
        {title: 'Create a tattoo Nataliya', video: 357043629},
        {title: 'Stella Karelija promo', video: 357043539},
        {title: "Sergiev Posad trip '16", video: 357052705},
        {title: 'Welcome School open', video: 357052931},
        {title: 'Scorpion Ink Tattoo open', video: 357052862},
        {title: 'Slideshow atrium', video: 357053842},
        {title: 'Nastya Egor wedding', video: 357053861},
        {title: 'Anelya cakes promo', video: 357054242}
      ]
    }),
    mounted() {
      this.loading = false
    }
  }
</script>

<style scoped></style>
