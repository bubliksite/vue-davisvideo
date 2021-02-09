<template>
  <div class="main-content">
    <div class="container">
      <section class="my-5">
        <h3 class="font-weight-light text-uppercase">Видеоролики</h3>
      </section>
    </div>
    <hr class="hr" />
    <div class="container">
      <div
        class="row mb-5"
        v-for="(item, index) in mainScreenContent"
        :key="item.vimeo"
      >
        <div class="col-lg-6 col-12" :class="{'order-lg-last': index % 2 != 0}">
          <vue-vimeo-player
            ref="player"
            :video-id="item.vimeo"
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
            <h2 class="font-weight-bolder mt-3">{{ item.title }}</h2>
            <hr />
            <p class="mt-3 text-muted font-weight-light">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {vueVimeoPlayer} from 'vue-vimeo-player'
  export default {
    name: 'MainContent',
    data: () => ({
      mainScreenContent: [
        {
          vimeo: 357044394,
          title: 'Рекламное промо',
          description:
            'Создание промо-ролика для вашего бизнеса с целью рекламы вашего продукта/товара или услуги. Может быть использован в продвижении в соц.сетях.'
        },
        {
          vimeo: 345635106,
          title: 'Промо-ролик для Instagram',
          description:
            'Видео для инстаграма (лента) в формате 4:5, что позволяет делать картинку более высокой, занимая большую часть пространства экрана смартфона, делая видеоролик более заметным. Суть проекта очень проста – каждую неделю вы выкладываете на страницу минутное видео, и не просто квадратное, которое пролистают и забудут, а на которое обратят внимание и остановятся, чтобы досмотреть до конца. В каждом видео вы сможете рассказать о своем бизнесе и услугах настолько подробно и интересно, что у клиента не останется сомнений в выборе компании!)'
        },
        {
          vimeo: 353329261,
          title: 'Видео из отпуска',
          description:
            'Памятное видео с ваших каникул, отпуска, собираем в один ролик, которым после можно будет похвастаться в соцсетях перед подписчиками. Вы присылаете фото и видео, выбираете музыку и после этого мы приступаем к монтажу.'
        },
        {
          vimeo: 334913517,
          title: 'Промо-ролик',
          description:
            'Создание промо-ролика для вашего бизнеса и хобби, для дальнейшего продвижения в соц. сетях.'
        },
        {
          vimeo: 246230509,
          title: 'Анимация логотипа',
          description:
            'Анимация логотипа, используем их в качестве интро для ваших видео. Длина ролика, в среднем, до 15 секунд.'
        },
        {
          vimeo: 321851222,
          title: 'Видео-открытка',
          description:
            'Видео-открытка, поздравление с памятными датами. За основу видео берутся частные фотографии, составляется слайдшоу, возможно выбрать ту музыку, которую вы бы хотели слышать на видеоряде.'
        }
      ]
    }),
    components: {vueVimeoPlayer}
  }
</script>

<style scoped></style>
