<template>
  <div class="hero-wrap" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
        <div class="col-md-7 ftco-animate text-center">
          <p class="breadcrumbs"><span class="mr-2"><router-link to="/">Home</router-link></span> <span>Gallery</span></p>
          <h1 class="mb-3 bread">Galleries</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section ftco-gallery">
    <div class="container">
      <div class="d-md-flex">
        <a v-for="img in row1" :key="img" :href="`/images/${img}`"
          class="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          :style="{ backgroundImage: `url(/images/${img})` }">
          <div class="icon d-flex justify-content-center align-items-center">
            <span class="icon-search"></span>
          </div>
        </a>
      </div>
      <div class="d-md-flex">
        <a v-for="img in row2" :key="img" :href="`/images/${img}`"
          class="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          :style="{ backgroundImage: `url(/images/${img})` }">
          <div class="icon d-flex justify-content-center align-items-center">
            <span class="icon-search"></span>
          </div>
        </a>
      </div>
      <div class="d-md-flex">
        <a v-for="img in row3" :key="img" :href="`/images/${img}`"
          class="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
          :style="{ backgroundImage: `url(/images/${img})` }">
          <div class="icon d-flex justify-content-center align-items-center">
            <span class="icon-search"></span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Lightbox overlay -->
  <div v-if="lightboxImg" class="lightbox-overlay" @click="lightboxImg = null">
    <img :src="lightboxImg" class="lightbox-img" @click.stop>
    <button class="lightbox-close" @click="lightboxImg = null">&times;</button>
  </div>

  <section class="ftco-section-3 img">
    <div class="overlay" style="background-color: darkkhaki;"></div>
    <div class="container">
      <div class="row d-md-flex">
        <div class="col-md-6 d-flex ftco-animate">
          <div class="img img-2 align-self-stretch" style="background-image: url(/images/bg_3.png);"></div>
        </div>
        <div class="col-md-6 volunteer pl-md-5 ftco-animate">
          <h3 class="mb-3">Be a volunteer</h3>
          <form @submit.prevent class="volunter-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Your Email">
            </div>
            <div class="form-group">
              <textarea cols="30" rows="3" class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn btn-white py-3 px-5">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const row1 = ['cause-2.jpg', 'cause-3.jpg', 'cause-4.jpg', 'cause-5.jpg']
const row2 = ['cause-6.jpg', 'image_3.jpg', 'image_1.jpg', 'image_2.jpg']
const row3 = ['event-1.jpg', 'event-2.jpg', 'image_4.jpg', 'event-4.jpg']

const lightboxImg = ref(null)

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
  if (window.$ && window.$.fn.magnificPopup) {
    window.$('.image-popup').magnificPopup({ type: 'image', gallery: { enabled: true } })
  }
})
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
.lightbox-close {
  position: absolute;
  top: 20px; right: 30px;
  font-size: 40px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
