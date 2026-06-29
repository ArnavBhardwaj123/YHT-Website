<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <router-link to="/">
        <img src="/images/angry-youth-ngo-bah-agra-ngos-avmiaeifb9-removebg-preview.png"
          alt="Angry_Youth_NGO" class="d-inline-block align-top" style="max-height:60px;">
      </router-link>
      <button class="navbar-toggler" type="button" id="mobile-menu-toggle" aria-label="Toggle navigation"
        @click="openMobileMenu">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/about' }">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="impactDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Impact
            </a>
            <div class="dropdown-menu" aria-labelledby="impactDropdown">
              <router-link to="/causes" class="dropdown-item">Causes</router-link>
              <router-link to="/gallery" class="dropdown-item">Gallery</router-link>
              <router-link to="/events" class="dropdown-item">Events</router-link>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="involvedDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Get Involved
            </a>
            <div class="dropdown-menu" aria-labelledby="involvedDropdown">
              <router-link to="/donate" class="dropdown-item">Donate</router-link>
              <router-link to="/blog" class="dropdown-item">Blog</router-link>
            </div>
          </li>

          <li class="nav-item" :class="{ active: $route.path === '/contact' }">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Mobile Overlay Menu -->
  <div class="mobile-overlay" id="mobile-overlay" :class="{ active: mobileMenuOpen }">
    <div class="mobile-menu-container">
      <div class="mobile-menu-header">
        <img src="/images/angry-youth-ngo-bah-agra-ngos-avmiaeifb9-removebg-preview.png"
          alt="Angry_Youth_NGO" style="max-height:50px;">
        <button class="mobile-close-btn" @click="closeMobileMenu">
          <span class="oi oi-x"></span>
        </button>
      </div>
      <ul class="mobile-nav-list">
        <li><router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About</router-link></li>

        <li class="mobile-dropdown">
          <a href="#" class="mobile-nav-link mobile-dropdown-toggle" @click.prevent="toggleMobileDropdown('impact')">
            Impact <span class="dropdown-arrow">▼</span>
          </a>
          <ul class="mobile-dropdown-menu" :class="{ open: mobileDropdowns.impact }">
            <li><router-link to="/causes" class="mobile-nav-link mobile-sub-link" @click="closeMobileMenu">Causes</router-link></li>
            <li><router-link to="/gallery" class="mobile-nav-link mobile-sub-link" @click="closeMobileMenu">Gallery</router-link></li>
            <li><router-link to="/events" class="mobile-nav-link mobile-sub-link" @click="closeMobileMenu">Events</router-link></li>
          </ul>
        </li>

        <li class="mobile-dropdown">
          <a href="#" class="mobile-nav-link mobile-dropdown-toggle" @click.prevent="toggleMobileDropdown('involved')">
            Get Involved <span class="dropdown-arrow">▼</span>
          </a>
          <ul class="mobile-dropdown-menu" :class="{ open: mobileDropdowns.involved }">
            <li><router-link to="/donate" class="mobile-nav-link mobile-sub-link" @click="closeMobileMenu">Donate</router-link></li>
            <li><router-link to="/blog" class="mobile-nav-link mobile-sub-link" @click="closeMobileMenu">Blog</router-link></li>
          </ul>
        </li>

        <li><router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const mobileDropdowns = ref({ impact: false, involved: false })

function openMobileMenu() {
  mobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function toggleMobileDropdown(key) {
  mobileDropdowns.value[key] = !mobileDropdowns.value[key]
}
</script>
