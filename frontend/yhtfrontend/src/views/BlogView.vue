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
              <p><a :href="post.url" target="_blank" class="btn btn-primary py-2 px-4 mt-2">Read More</a></p>
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
  { image: 'image_1.jpg', date: 'Aug 28, 2021', author: 'Youth Helping Trust', comments: 12, title: 'How NGOs are ensuring their social responsibility commitment in the Covid-19 pandemic?', excerpt: 'Insights into NGO responses during COVID-19 and how Youth Helping Trust supported communities.', url: 'https://www.youthhelpingtrust.org/how-ngos-are-ensuring-their-social-responsibility-commitment-in-the-covid-19-pandemic/' },
  { image: 'image_2.jpg', date: 'Aug 02, 2021', author: 'Youth Helping Trust', comments: 8, title: 'Top Ways to Help Poor and Homeless Children', excerpt: 'Practical actions and programs that make an immediate difference to children in need.', url: 'https://www.youthhelpingtrust.org/top-ways-to-help-poor-and-homeless-children/' },
  { image: 'image_3.jpg', date: 'Jul 15, 2021', author: 'Youth Helping Trust', comments: 5, title: 'Our Programs: Child Education, Health & Women Empowerment', excerpt: 'Overview of Youth Helping Trust core programs and impact.', url: 'https://www.youthhelpingtrust.org/our-program/' },
]

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
})
</script>
