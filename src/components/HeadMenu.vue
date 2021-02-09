<template>
  <section class="menu">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-4">
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img src="@/assets/images/logo.png" width="50%" alt="" />
          </router-link>
        </div>
        <div class="desktop-menu">
          <ul class="nav">
            <li class="nav-item" v-for="item in menu" :key="item.name">
              <router-link :to="{name: item.name}" class="nav-link">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="mobile-menu">
          <ul class="nav">
            <li
              v-for="item in menu"
              :key="item.name"
              class="nav-item"
              :class="{visible: showMobileMenu, hidden: !showMobileMenu}"
            >
              <router-link :to="{name: item.name}" class="nav-link">{{
                item.title
              }}</router-link>
            </li>
          </ul>
          <img
            src="@/assets/images/burger.svg"
            alt=""
            @click.prevent="toggleMobileMenu"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HeadMenu',
    data: () => ({
      showMobileMenu: false,
      menu: [
        {title: 'логотипы', name: 'Logo'},
        {title: 'монтаж', name: 'Edit'},
        {title: 'инстаграм', name: 'Instagram'}
      ]
    }),
    methods: {
      toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu
      }
    }
  }
</script>

<style scoped></style>
