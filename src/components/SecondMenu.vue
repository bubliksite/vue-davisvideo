<template>
  <section class="second-menu my-3">
    <div class="container">
      <div class="d-flex justify-content-between">
        <ul class="nav contacts">
          <li class="nav-item mr-3">
            <a
              href="mailto:davis@davisvideo.ru"
              class="nav-link d-flex align-items-center"
            >
              <img class="mr-2" src="@/assets/images/at.svg" alt="" />
              <p class="m-0 pl-1">davis@davisvideo.ru</p>
            </a>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <a-->
          <!--              href="tel:+7 999 520 66 16"-->
          <!--              class="nav-link d-flex align-items-center"-->
          <!--            >-->
          <!--              <img class="mr-2" src="@/assets/images/phone.svg" alt="" />-->
          <!--              <p class="m-0 pl-1">+7 999 520 66 16</p>-->
          <!--            </a>-->
          <!--          </li>-->
        </ul>
        <ul class="nav links d-flex justify-content-end">
          <li class="nav-item">
            <a href="https://vimeo.com/davisvideo" class="nav-link"
              ><img src="@/assets/images/vimeo.svg" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.youtube.com/channel/UC5JdzSbcfG8NaAtyOMKvj6w"
              class="nav-link"
              ><img src="@/assets/images/youtube.svg" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/davisvideo/" class="nav-link"
              ><img src="@/assets/images/instagram.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SecondMenu'
  }
</script>

<style scoped></style>
