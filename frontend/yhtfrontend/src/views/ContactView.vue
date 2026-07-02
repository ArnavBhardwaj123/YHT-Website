<template>
  <div
    class="hero-wrap"
    style="background-image: url(&quot;/images/bg_2.jpg&quot;)"
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
            <span>Contact</span>
          </p>
          <h1 class="mb-3 bread">Contact Us</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section contact-section ftco-degree-bg">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-12 mb-4">
          <h2 class="h4">Contact Information</h2>
        </div>
        <div class="w-100"></div>
        <div class="col-md-3">
          <p>
            <span>Address:</span> A-51/2, G/F, Gali No. 2, Guru Nanakpura, Laxmi
            Nagar, Opp. V3S Mall Wali Gali, New Delhi - 110092
          </p>
        </div>
        <div class="col-md-3">
          <p>
            <span>Phone:</span> <a href="tel:+919411948783">+91 9411948783</a>
          </p>
        </div>
        <div class="col-md-3">
          <p>
            <span>Email:</span>
            <a href="mailto:info@youthhelpingtrust.org"
              >info@youthhelpingtrust.org</a
            >
          </p>
        </div>
        <div class="col-md-3">
          <p>
            <span>Website:</span>
            <a href="https://www.youthhelpingtrust.org/"
              >youthhelpingtrust.org</a
            >
          </p>
        </div>
      </div>

      <div class="row block-9">
        <div class="col-md-6 pr-md-5">
          <h4 class="mb-4">Do you have any questions?</h4>
          <form @submit.prevent="submitContact">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name"
                v-model="form.name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email"
                v-model="form.email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Subject"
                v-model="form.subject"
              />
            </div>
            <div class="form-group">
              <textarea
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Message"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary py-3 px-5"
              />
            </div>
          </form>

          <div v-if="submitted" class="alert alert-success mt-3">
            Thank you! Your message has been sent. We'll get back to you soon.
          </div>
        </div>

        <div class="col-md-6">
          <div
            style="
              width: 100%;
              height: 400px;
              border-radius: 8px;
              overflow: hidden;
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.527252012365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1f5ba8f40903%3A0x58a13b8d9ff09a18!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const form = ref({ name: "", email: "", subject: "", message: "" });
const submitted = ref(false);

function submitContact() {
  submitted.value = true;
  form.value = { name: "", email: "", subject: "", message: "" };
  setTimeout(() => {
    submitted.value = false;
  }, 5000);
}

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});
</script>
