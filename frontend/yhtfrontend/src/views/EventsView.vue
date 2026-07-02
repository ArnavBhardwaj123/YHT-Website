<template>
  <div
    class="hero-wrap"
    style="background-image: url(&quot;/images/bg_1.jpg&quot;)"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        class="row no-gutters slider-text align-items-center justify-content-center"
        data-scrollax-parent="true"
      >
        <div class="col-md-7 ftco-animate text-center">
          <p class="breadcrumbs">
            <span class="mr-2"><router-link to="/">Home</router-link></span>
            <span>Events</span>
          </p>
          <h1 class="mb-3 bread">Events</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div
          v-for="(ev, i) in events"
          :key="i"
          class="col-md-4 d-flex ftco-animate"
        >
          <div class="blog-entry align-self-stretch">
            <a
              href="#"
              class="block-20"
              :style="{ backgroundImage: `url(/images/event-${i + 1}.jpg)` }"
            ></a>
            <div class="text p-4 d-block">
              <div class="meta mb-3">
                <div>
                  <a href="#">{{ ev.date }}</a>
                </div>
                <div><a href="#">Admin</a></div>
                <div>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> {{ ev.comments }}</a
                  >
                </div>
              </div>
              <h3 class="heading mb-4">
                <a href="#">{{ ev.title }}</a>
              </h3>
              <p class="time-loc">
                <span class="mr-2"
                  ><i class="icon-clock-o"></i> {{ ev.time }}</span
                >
                <span><i class="icon-map-o"></i> {{ ev.location }}</span>
              </p>
              <p>{{ ev.desc }}</p>
              <p>
                <a href="#">Join Event <i class="ion-ios-arrow-forward"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const events = [
  {
    date: "Upcoming",
    title: "Community Health Camp",
    time: "9:00AM–4:00PM",
    location: "Community Center",
    comments: 5,
    desc: "Free health checkups and medical consultation for families in need.",
  },
  {
    date: "Upcoming",
    title: "Education Workshop",
    time: "10:00AM–2:00PM",
    location: "Learning Centre",
    comments: 3,
    desc: "Workshops focusing on children's education and vocational skills.",
  },
  {
    date: "Upcoming",
    title: "Sanitation Drive",
    time: "7:00AM–1:00PM",
    location: "City Areas",
    comments: 2,
    desc: "Community cleanups and hygiene awareness under Swachh Bharat initiative.",
  },
];

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});
</script>
