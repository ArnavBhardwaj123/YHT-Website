<template>
  <div
    class="hero-wrap"
    style="background-image: url(&quot;/images/bg_7.jpg&quot;)"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        class="row no-gutters slider-text align-items-center justify-content-center"
        data-scrollax-parent="true"
      >
        <div
          class="col-md-7 ftco-animate text-center"
          data-scrollax="properties: { translateY: '70%' }"
        >
          <p class="breadcrumbs">
            <span class="mr-2"><router-link to="/">Home</router-link></span>
            <span>About</span>
          </p>
          <h1 class="mb-3 bread">About Us</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-6 d-flex ftco-animate">
          <div
            class="img img-about align-self-stretch"
            style="background-image: url(/images/bg_3.jpg); width: 100%"
          ></div>
        </div>
        <div class="col-md-6 pl-md-5 ftco-animate">
          <h2 class="mb-4">
            Youth Helping Trust — Child Healthcare NGO in Delhi
          </h2>
          <p>
            Youth Helping Trust is a non-profitable organization working to
            combat child poverty and support underprivileged children. We focus
            on Child Health &amp; Nutrition, Child Protection, Education, Women
            Empowerment and Humanitarian Response to improve the quality of life
            for vulnerable communities.
          </p>
          <p>
            We pursue community mobilization and participatory programs that
            promote education, protection, and sustainable livelihoods. Our
            initiatives include health camps, vocational training, educational
            support, and relief operations.
          </p>
          <p>
            Join us in empowering communities through education, health
            services, and skill development. Together we can create meaningful,
            long-lasting change.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-counter ftco-intro ftco-intro-2" id="section-counter">
    <div class="container">
      <div class="row no-gutters">
        <div
          class="col-md-5 d-flex justify-content-center counter-wrap ftco-animate"
        >
          <div class="block-18 color-1 align-items-stretch">
            <div class="text">
              <span>Reached Over</span>
              <strong class="number" data-number="175000">0</strong>
              <span
                >People with Meals, Education Support, Health Awareness &amp;
                Skill Training</span
              >
            </div>
          </div>
        </div>
        <div
          class="col-md d-flex justify-content-center counter-wrap ftco-animate"
        >
          <div class="block-18 color-2 align-items-stretch">
            <div class="text">
              <h3 class="mb-4">Donate Money</h3>
              <p>
                Your contribution directly impacts lives in Meerut and nearby
                areas.
              </p>
              <p>
                <a
                  class="btn btn-white px-3 py-2 mt-2"
                  href="https://www.youthhelpingtrust.org/donate-now/"
                  target="_blank"
                  >Donate Now</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md d-flex justify-content-center counter-wrap ftco-animate"
        >
          <div class="block-18 color-3 align-items-stretch">
            <div class="text">
              <h3 class="mb-4">Be a Volunteer</h3>
              <p>
                Join our passionate team of changemakers making a real
                difference.
              </p>
              <p>
                <router-link to="/contact" class="btn btn-white px-3 py-2 mt-2"
                  >Be A Volunteer</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section ftco-animate text-center">
          <h2 class="mb-4">Latest Donations</h2>
          <p>Join our community of changemakers making a real difference</p>
        </div>
      </div>

      <div class="donations-container">
        <div class="donor-container" data-aos="fade-up" data-aos-delay="300">
          <div class="donor-header">
            <span class="icon-user"></span>
            <h5>Latest Donors</h5>
          </div>
          <div class="donors-list">
            <div v-for="(donor, i) in donors" :key="i" class="donor-item">
              <div class="donor-avatar">
                <span class="donor-initial">{{ donor.initial }}</span>
              </div>
              <div class="donor-info">
                <div class="donor-name">{{ donor.name }}</div>
                <div class="donor-amount">{{ donor.amount }}</div>
                <div class="donor-message">{{ donor.message }}</div>
                <div class="donor-time">{{ donor.time }}</div>
              </div>
              <div class="donor-status" :class="donor.status">
                {{ donor.status.toUpperCase() }}
              </div>
            </div>
          </div>
          <div class="donors-footer">
            <div class="total-donors">
              <span class="icon-users"></span>
              <span>Total donors this week: 47</span>
            </div>
          </div>
        </div>

        <div class="cta-container" data-aos="fade-up" data-aos-delay="400">
          <div class="cta-content">
            <h5>Ready to Make a Difference?</h5>
            <p>Join our mission to create positive change</p>
            <div class="cta-buttons">
              <a
                class="btn btn-gold"
                href="https://www.youthhelpingtrust.org/donate-now/"
                target="_blank"
                ><span class="icon-heart"></span> Donate Now</a
              >
              <router-link to="/contact" class="btn btn-outline-dark"
                ><span class="icon-user"></span> Volunteer</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const donors = [
  {
    initial: "R",
    name: "Riya Sharma",
    amount: "₹1,500",
    message: '"For children\'s education"',
    time: "Just now",
    status: "new",
  },
  {
    initial: "A",
    name: "Amit Kumar",
    amount: "₹2,000",
    message: '"Supporting women empowerment"',
    time: "5 min ago",
    status: "recent",
  },
  {
    initial: "P",
    name: "Priya Singh",
    amount: "₹800",
    message: '"For clean water project"',
    time: "12 min ago",
    status: "recent",
  },
];

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
  if (window.$ && window.$.fn.stellar) {
    window.$(document).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: false,
    });
  }
  if (window.$ && window.$.fn.waypoint) {
    window.$(".number").each(function () {
      const $this = window.$(this);
      const target = parseInt($this.data("number"), 10);
      $this.waypoint(
        function () {
          $this.animateNumber({ number: target, easing: "easeInQuad" }, 3000);
        },
        { offset: "95%" },
      );
    });
  }
});
</script>
