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
                <a class="btn btn-primary py-2 px-4" href="https://www.youthhelpingtrust.org/donate-now/" target="_blank">Donate Now</a>
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
  { title: 'Child Education', desc: 'Support education for underprivileged children — books, tuition and learning centers.', urgency: 'Help a child continue learning today.', raised: 'Your donation provides school supplies and teacher support.' },
  { title: 'Medicine for Poor People', desc: 'Provide medical assistance, free health camps and medicines to families who cannot afford care.', urgency: 'Support our health outreach programs now.', raised: 'Your gift helps cover treatment and medicines.' },
  { title: 'Vocational Training', desc: 'Train youth and women in practical skills like tailoring and trades to earn sustainable incomes.', urgency: 'Help someone gain a livelihood today.', raised: 'Sponsorships fund training materials and instructors.' },
  { title: 'Swachh Bharat Mission', desc: 'Promote sanitation, clean surroundings and hygiene awareness in communities.', urgency: 'Support our sanitation drives today.', raised: 'Contributions fund community cleanups and hygiene kits.' },
  { title: 'Beti Bachao Beti Padhao', desc: "Programs supporting girls' education, safety and welfare to secure brighter futures.", urgency: 'Help girls and young women access education.', raised: 'Your support funds scholarships and awareness programs.' },
  { title: 'Women Empowerment', desc: 'Empower women through skill development and livelihood programs.', urgency: 'Join our women empowerment initiatives.', raised: 'Programs provide training, materials and mentoring.' },
]

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
})
</script>
