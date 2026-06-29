<template>
  <div class="hero-wrap" style="background-image: url('/images/bg_5.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
        <div class="col-md-7 ftco-animate text-center">
          <p class="breadcrumbs"><span class="mr-2"><router-link to="/">Home</router-link></span> <span>Causes</span></p>
          <h1 class="mb-3 bread">Our Causes</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div v-for="(cause, i) in causes" :key="i" class="col-md-4 ftco-animate">
          <div class="cause-entry">
            <a href="#" class="img" :style="{ backgroundImage: `url(/images/cause-${i+1}.jpg)` }"></a>
            <div class="text p-3 p-md-4">
              <h3><a href="#">{{ cause.title }}</a></h3>
              <p>{{ cause.desc }}</p>
              <div class="urgency-line mb-2">
                <small class="text-danger font-weight-bold">{{ cause.urgency }}</small>
              </div>
              <span class="fund-raised d-block">{{ cause.raised }}</span>
              <div class="sponsor-button-container mt-3">
                <router-link to="/donate" class="btn btn-primary py-2 px-4">Donate Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
import { onMounted } from 'vue'

const causes = [
  { title: 'Skills for Stronger Women', desc: 'Empower women with skills in tailoring, crafts, and entrepreneurship to build financial independence.', urgency: 'Only ₹1,600 to reach this week\'s goal!', raised: '₹2,000 funds skill training for one woman.' },
  { title: 'Learning for Life', desc: 'Give every child the right to dream — fund their education, books, and future.', urgency: 'Only ₹1,200 to reach this week\'s goal!', raised: '₹1,000 keeps a child in school for a month.' },
  { title: 'Care for All', desc: 'Bring free medical check-ups, medicine, and health awareness to underserved families.', urgency: '₹1,050 more to heal 3 families this week!', raised: '₹1,500 brings healthcare to 3 families.' },
  { title: 'Clean Water Access', desc: 'Install handpumps and filters so families can drink safe water year-round.', urgency: 'Just ₹600 more for clean water this week!', raised: '₹3,000 gives clean water to a family for a year.' },
  { title: 'Feed the Hungry', desc: 'Serve warm, nutritious meals to children and families in need.', urgency: '₹900 more will feed 50 more plates!', raised: '₹500 serves a full meal to 10 people.' },
  { title: 'Relief in Emergencies', desc: 'Provide fast relief during natural disasters with food, shelter, and medical aid.', urgency: '₹2,500 more to reach emergency aid goal!', raised: '₹5,000 supports 5 families during a crisis.' },
]

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
})
</script>
