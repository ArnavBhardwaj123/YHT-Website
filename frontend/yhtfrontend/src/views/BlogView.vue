<template>
  <div class="hero-wrap" style="background-image: url('/images/bg_1.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
        <div class="col-md-7 ftco-animate text-center">
          <p class="breadcrumbs"><span class="mr-2"><router-link to="/">Home</router-link></span> <span>Blog</span></p>
          <h1 class="mb-3 bread">Our Blog</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div v-for="(post, i) in posts" :key="i" class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry align-self-stretch">
            <a href="#" class="block-20" :style="{ backgroundImage: `url(/images/${post.image})` }"></a>
            <div class="text p-4 d-block">
              <div class="meta mb-3">
                <div><a href="#">{{ post.date }}</a></div>
                <div><a href="#">{{ post.author }}</a></div>
                <div><a href="#" class="meta-chat"><span class="icon-chat"></span> {{ post.comments }}</a></div>
              </div>
              <h3 class="heading mb-4"><a href="#">{{ post.title }}</a></h3>
              <p>{{ post.excerpt }}</p>
              <p><a href="#" class="btn btn-primary py-2 px-4 mt-2">Read More</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const posts = [
  { image: 'image_1.jpg', date: 'Dec 10, 2025', author: 'Admin', comments: 5, title: 'How We Reached 175,000 People with Our Food Drive', excerpt: 'In our biggest initiative yet, Angry Youth NGO distributed meals to over 175,000 people across Meerut and nearby regions.' },
  { image: 'image_2.jpg', date: 'Nov 28, 2025', author: 'Admin', comments: 3, title: 'Women Empowerment Through Skill Training', excerpt: 'Our tailoring and crafts workshops have transformed the lives of 120 women, giving them financial independence.' },
  { image: 'image_3.jpg', date: 'Nov 15, 2025', author: 'Admin', comments: 7, title: 'Clean Water for Villages: Our Water Project', excerpt: 'We installed 15 water filters and handpumps across 3 villages, giving 500+ families access to clean water.' },
  { image: 'cause-1.jpg', date: 'Nov 1, 2025', author: 'Admin', comments: 4, title: 'Education Support: 480 Children Back in School', excerpt: 'Through book donations and tuition support, 480 children are now continuing their education thanks to our donors.' },
  { image: 'cause-2.jpg', date: 'Oct 20, 2025', author: 'Admin', comments: 6, title: 'Emergency Relief: Supporting Flood Victims', excerpt: 'When floods struck nearby areas, we responded swiftly with food, shelter, and medical aid for affected families.' },
  { image: 'cause-3.jpg', date: 'Oct 5, 2025', author: 'Admin', comments: 2, title: 'Health Camp Success: 1,000+ People Screened', excerpt: 'Our community health camp screened over 1,000 people for common ailments and distributed free medicines.' },
]

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
})
</script>
