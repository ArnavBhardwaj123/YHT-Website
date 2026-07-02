<template>
  <div
    class="hero-wrap"
    style="background-image: url(&quot;/images/bg_6.jpg&quot;)"
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
            <span>Donate</span>
          </p>
          <h1 class="mb-3 bread">Donations</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 text-center">
          <h2 class="mb-4">Make a Donation</h2>
          <p>
            Your generosity powers our mission to uplift lives across Meerut and
            beyond.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(donor, i) in recentDonors"
          :key="i"
          class="col-lg-4 d-flex mb-sm-4 ftco-animate"
        >
          <div class="staff">
            <div class="d-flex mb-4">
              <div
                class="img"
                :style="{ backgroundImage: `url(/images/person_${i + 1}.jpg)` }"
              ></div>
              <div class="info ml-4">
                <h3>
                  <a href="#">{{ donor.name }}</a>
                </h3>
                <span class="position">Donated {{ donor.time }}</span>
                <div class="text">
                  <p>
                    Donated <span>{{ donor.amount }}</span> for
                    <a href="#">{{ donor.cause }}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div
            class="ftco-section bg-white p-4"
            style="
              border-radius: 8px;
              box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
            "
          >
            <h3 class="mb-4 text-center">Donate Now</h3>
            <form @submit.prevent="submitDonation">
              <div class="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="donationForm.name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="donationForm.email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="form-group">
                <label>Donation Amount (₹)</label>
                <div class="d-flex flex-wrap mb-2">
                  <button
                    v-for="amt in amounts"
                    :key="amt"
                    type="button"
                    class="btn btn-sm mr-2 mb-2"
                    :class="
                      donationForm.amount === amt
                        ? 'btn-primary'
                        : 'btn-outline-primary'
                    "
                    @click="donationForm.amount = amt"
                  >
                    ₹{{ amt }}
                  </button>
                </div>
                <input
                  type="number"
                  class="form-control"
                  v-model="donationForm.amount"
                  placeholder="Or enter custom amount"
                  min="1"
                />
              </div>
              <div class="form-group">
                <label>Cause</label>
                <select class="form-control" v-model="donationForm.cause">
                  <option value="">Select a cause</option>
                  <option>Child Education</option>
                  <option>Medicine for Poor People</option>
                  <option>Vocational Training</option>
                  <option>Swachh Bharat Mission</option>
                  <option>Beti Bachao Beti Padhao</option>
                  <option>Women Empowerment</option>
                  <option>General Fund</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  value="Donate Now"
                  class="btn btn-primary py-3 px-5 btn-block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section-3 img">
    <div class="overlay" style="background-color: darkkhaki"></div>
    <div class="container">
      <div class="row d-md-flex">
        <div class="col-md-6 d-flex ftco-animate">
          <div
            class="img img-2 align-self-stretch"
            style="background-image: url(/images/bg_3.png)"
          ></div>
        </div>
        <div class="col-md-6 volunteer pl-md-5 ftco-animate">
          <h3 class="mb-3">Be a volunteer</h3>
          <form @submit.prevent class="volunter-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <textarea
                cols="30"
                rows="3"
                class="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-white py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const amounts = [500, 1000, 2000, 5000];

const recentDonors = [
  {
    name: "Riya Sharma",
    time: "Just now",
    amount: "₹1,500",
    cause: "Learning for Life",
  },
  {
    name: "Amit Kumar",
    time: "5 min ago",
    amount: "₹2,000",
    cause: "Women Empowerment",
  },
  {
    name: "Priya Singh",
    time: "12 min ago",
    amount: "₹800",
    cause: "Clean Water Access",
  },
  {
    name: "Suresh Verma",
    time: "30 min ago",
    amount: "₹500",
    cause: "Feed the Hungry",
  },
  {
    name: "Meera Gupta",
    time: "1 hr ago",
    amount: "₹3,000",
    cause: "Care for All",
  },
  {
    name: "Rajesh Patel",
    time: "2 hr ago",
    amount: "₹1,000",
    cause: "General Fund",
  },
];

const donationForm = ref({ name: "", email: "", amount: "", cause: "" });

function submitDonation() {
  window.open("https://www.youthhelpingtrust.org/donate-now/", "_blank");
}

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});
</script>
