<template>
  <AppNavbar />
  <router-view />
  <AppFooter />
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import { onMounted } from 'vue'

onMounted(() => {
  if (window.AOS) window.AOS.init({ duration: 800, easing: 'slide' })
})
</script>

<style>
</style>
