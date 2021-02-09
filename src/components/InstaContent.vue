<template>
  <div class="main-content">
    <div class="container">
      <section class="my-5">
        <h3 class="font-weight-light text-uppercase">
          Промо-ролик для продвижения
        </h3>
      </section>
    </div>
    <hr class="hr" />
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-4 col-12">
          <vue-vimeo-player
            ref="player"
            video-id="345635106"
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
        <div class="col-lg-8 col-12 d-flex align-items-center bg-light">
          <div>
            <h2 class="font-weight-bolder mt-3">Промо-ролик для Instagram</h2>
            <hr />
            <p class="mt-3 text-muted font-weight-light">
              Изготавливаем пост и сторис к нему, чтобы ваши подписчики ни в
              коем случае не пропускали ваши выпуски. В сторис можно прикрепить
              конпку перехода на страницу с видео.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-lg-3 col-md-4 col-6 mb-5"
          v-for="item in content"
          :key="item.video"
        >
          <h5 class="font-weight-bolder text-center">{{ item.title }}</h5>
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
      <div class="row mb-5">
        <div class="col-lg-4 col-12">
          <vue-vimeo-player
            ref="player"
            video-id="339960192"
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
        <div
          class="col-lg-8 col-12 order-lg-first d-flex align-items-center bg-light"
        >
          <div>
            <h2 class="font-weight-bolder mt-3">Weekly English</h2>
            <hr />
            <p class="mt-3 text-muted font-weight-light">
              Видео для инстаграма (лента) в формате 4:5, что позволяет делать
              картинку более высокой, занимая большую часть пространства экрана
              смартфона, делая видеоролик более заметным. Суть проекта очень
              проста – каждую неделю вы выкладываете на страницу минутное видео,
              и не просто квадратное, которое пролистают и забудут, а на которое
              обратят внимание и остановятся, чтобы досмотреть до конца. В
              каждом видео вы сможете рассказать о своем бизнесе и услугах
              настолько подробно и интересно, что у клиента не останется
              сомнений в выборе компании!)
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-lg-3 col-md-4 col-6 mb-5"
          v-for="item in weeklyEnglishContent"
          :key="item.video"
        >
          <h5 class="font-weight-bolder text-center">{{ item.title }}</h5>
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
      <p class="bg-light">
        Изготавливаем пост и сторис к нему, чтобы ваши подписчики ни в коем
        случае не пропускали ваши выпуски. В сторис можно прикрепить конпку
        перехода на страницу с видео.
      </p>
      <div class="row mt-5">
        <div
          class="col"
          v-for="item in weeklyEnglishSmallContent"
          :key="item.video"
        >
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
    name: 'InstaContent',
    data: () => ({
      content: [
        {title: 'Hepojarvi trip', video: 345637358},
        {title: 'Mirain Coats Shot', video: 345635152},
        {title: 'Firefox Promo', video: 345635129},
        {title: 'Creating tattoo', video: 345635108},
        {title: 'Озорные белки Instagram', video: 356575034},
        {title: 'Mad.Stomatolog post', video: 356574992},
        {title: 'Le glamour post', video: 356574970},
        {title: 'Berkhov_doc post promo', video: 357054757}
      ],
      weeklyEnglishContent: [
        {title: 'Episode 1', video: 339960192},
        {title: 'Episode 3', video: 339960511},
        {title: 'Episode 5', video: 339960542},
        {title: 'Episode 7', video: 346158419}
      ],
      weeklyEnglishSmallContent: [
        {video: 339961584},
        {video: 339961601},
        {video: 339961640},
        {video: 356581581},
        {video: 346159071}
      ]
    }),
    components: {vueVimeoPlayer}
  }
</script>

<style scoped></style>
