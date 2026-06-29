<template>
  <div class="overlay"></div>
  <div class="hero-wrap" style="background-image: url('/images/wmremove-transformed.jpeg');"
    data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
        <div class="col-md-6 ftco-animate text-right" data-scrollax="properties: { translateY: '70%' }">
          <h1 class="mb-4 animated-text" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
            <span class="mobile-line">Turning Compassion</span>
            <span class="mobile-line">into</span>
            <span class="mobile-line">Lasting Change</span>
          </h1>
          <p class="subtitle animated-text-delay">
            <span class="mobile-line">Harnessing passion, power, and purpose</span>
            <span class="mobile-line">to uplift the voiceless</span>
          </p>
          <p class="text-right" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
            <router-link to="/donate" class="btn btn-gold-outline px-4 py-3 mr-2">Volunteer</router-link>
            <router-link to="/donate" class="btn btn-gold px-4 py-3">Donate</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Counter Section -->
  <section class="ftco-counter ftco-intro" id="section-counter">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
          <div class="block-18 color-1 align-items-stretch">
            <div class="text">
              <span>Reached Over</span>
              <strong class="number" data-number="175000">0</strong>
              <span>People with Meals, Education Support, Health Awareness &amp; Skill Training Across Meerut &amp; Nearby Areas</span>
            </div>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div class="block-18 color-2 align-items-stretch">
            <div class="text">
              <h3 class="mb-4">Donate Money</h3>
              <p>Your contribution directly impacts the lives of people in need across Meerut.</p>
              <p><router-link to="/donate" class="btn btn-white px-3 py-2 mt-2">Donate Now</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div class="block-18 color-3 align-items-stretch">
            <div class="text">
              <h3 class="mb-4">Be a Volunteer</h3>
              <p>Join our team of passionate volunteers making a difference every day.</p>
              <p><router-link to="/contact" class="btn btn-white px-3 py-2 mt-2">Be A Volunteer</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="ftco-section" style="padding-top: 56px; padding-bottom: 0px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 d-flex services p-3 py-4 d-block">
            <div class="icon d-flex mb-3"><span class="flaticon-donation-1"></span></div>
            <div class="media-body pl-4">
              <h3 class="heading">Make Donation</h3>
              <p>Your generosity funds meals, education, healthcare, and empowerment programs.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 d-flex services p-3 py-4 d-block">
            <div class="icon d-flex mb-3"><span class="flaticon-charity"></span></div>
            <div class="media-body pl-4">
              <h3 class="heading">Become A Volunteer</h3>
              <p>Give your time and skills to help us create lasting change in communities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 d-flex services p-3 py-4 d-block">
            <div class="icon d-flex mb-3"><span class="flaticon-donation"></span></div>
            <div class="media-body pl-4">
              <h3 class="heading">Sponsorship</h3>
              <p>Partner with us to sponsor specific programs and multiply your social impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Causes Section -->
  <section class="ftco-section bg-light" style="padding-top: 56px;">
    <div class="container-fluid">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-5 heading-section ftco-animate text-center">
          <h2 class="donations-title">Our Causes</h2>
          <p>Feeding, educating, empowering, and healing for a stronger Meerut.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 ftco-animate">
          <div class="carousel-cause owl-carousel">
            <div class="item">
              <div class="cause-entry skills-card">
                <a href="#" class="img skills-img" style="background-image: url(/images/cause-1.jpg);"></a>
                <div class="text p-3 p-md-2">
                  <h3><a href="#"><i class="flaticon-charity"></i> Skills for Stronger Women</a></h3>
                  <p>Empower women with skills in tailoring, crafts, and entrepreneurship to build financial independence.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">Only ₹1,600 to reach this week's goal!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹2,000 funds skill training for one woman.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-empower">Empower Now →</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cause-entry learning-card">
                <a href="#" class="img learning-img" style="background-image: url(/images/cause-2.jpg);"></a>
                <div class="text p-3 p-md-2">
                  <h3><a href="#"><i class="ion-ios-book"></i> Learning for Life</a></h3>
                  <p>Give every child the right to dream — fund their education, books, and future.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">Only ₹1,200 to reach this week's goal!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹1,000 keeps a child in school for a month.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-sponsor">Sponsor Now →</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cause-entry care-card">
                <a href="#" class="img care-img" style="background-image: url(/images/cause-3.jpg);"></a>
                <div class="text p-3 p-md-2">
                  <h3><a href="#"><i class="ion-ios-medical"></i> Care for All</a></h3>
                  <p>Bring free medical check-ups, medicine, and health awareness to underserved families.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">₹1,050 more to heal 3 families this week!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹1,500 brings healthcare to 3 families.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-health">Give Health →</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cause-entry water-card">
                <a href="#" class="img water-img" style="background-image: url(/images/cause-4.jpg);"></a>
                <div class="text p-3 p-md-2">
                  <h3><a href="#"><i class="ion-ios-water"></i> Clean Water Access</a></h3>
                  <p>Install handpumps and filters so families can drink safe water year-round.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">Just ₹600 more for clean water this week!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹3,000 gives clean water to a family for a year.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-water">Give Water →</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cause-entry hunger-card">
                <a href="#" class="img hunger-img" style="background-image: url(/images/cause-5.jpg);"></a>
                <div class="text p-3 p-md-2">
                  <h3><a href="#"><i class="flaticon-donation"></i> Feed the Hungry</a></h3>
                  <p>Serve warm, nutritious meals to children and families in need.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">₹900 more will feed 50 more plates!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹500 serves a full meal to 10 people.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-meal">Serve a Meal →</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cause-entry relief-card">
                <a href="#" class="img relief-img" style="background-image: url(/images/cause-6.jpg);"></a>
                <div class="text p-3 p-md-4">
                  <h3><a href="#"><i class="ion-ios-pulse"></i> Relief in Emergencies</a></h3>
                  <p>Provide fast relief during natural disasters with food, shelter, and medical aid.</p>
                  <div class="urgency-line mb-2">
                    <small class="text-danger font-weight-bold">₹2,500 more to reach emergency aid goal!</small>
                  </div>
                  <div class="card-footer-info mb-3">
                    <span class="fund-raised d-block">₹5,000 supports 5 families during a crisis.</span>
                  </div>
                  <div class="sponsor-button-container">
                    <router-link to="/donate" class="btn btn-emergency">Help Now →</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Donations Section -->
  <section class="ftco-section" id="latest-donations" style="padding-top: 56px; padding-bottom: 0px;">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 text-center">
          <h2 class="donations-title">Latest Donations</h2>
          <p class="donations-subtitle">Join our community of changemakers making a real difference</p>
        </div>
      </div>

      <div class="donations-container">
        <div class="stats-container">
          <div class="stats-card">
            <div class="stats-header">
              <div class="header-icon">
                <span class="icon-bar-chart"></span>
                <div class="pulse-ring"></div>
              </div>
              <div class="header-content">
                <h4>Live Impact Statistics</h4>
                <p>Real-time data from our community</p>
              </div>
            </div>

            <div class="stats-content">
              <div class="stat-item" data-aos="fade-up" data-aos-delay="100">
                <div class="stat-icon"><span class="flaticon-donation-1"></span></div>
                <div class="stat-details">
                  <div class="stat-number">₹2,45,000</div>
                  <div class="stat-label">Total Donations Raised</div>
                  <div class="stat-progress"><div class="progress-bar" style="width: 85%"></div></div>
                </div>
              </div>
              <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
                <div class="stat-icon"><span class="flaticon-charity"></span></div>
                <div class="stat-details">
                  <div class="stat-number">12,300</div>
                  <div class="stat-label">Meals Shared</div>
                  <div class="stat-progress"><div class="progress-bar" style="width: 92%"></div></div>
                </div>
              </div>
              <div class="stat-item" data-aos="fade-up" data-aos-delay="300">
                <div class="stat-icon"><span class="flaticon-education"></span></div>
                <div class="stat-details">
                  <div class="stat-number">480</div>
                  <div class="stat-label">Children Educated</div>
                  <div class="stat-progress"><div class="progress-bar" style="width: 78%"></div></div>
                </div>
              </div>
              <div class="stat-item" data-aos="fade-up" data-aos-delay="400">
                <div class="stat-icon"><span class="flaticon-heart"></span></div>
                <div class="stat-details">
                  <div class="stat-number">120</div>
                  <div class="stat-label">Women Empowered</div>
                  <div class="stat-progress"><div class="progress-bar" style="width: 65%"></div></div>
                </div>
              </div>
            </div>

            <div class="impact-message">
              <span class="icon-quote-left"></span>
              <span>"Every number represents a life changed"</span>
            </div>
          </div>
        </div>

        <div class="right-containers">
          <div class="donor-container" data-aos="fade-left" data-aos-delay="300">
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
                <div class="donor-status" :class="donor.status">{{ donor.status.toUpperCase() }}</div>
              </div>
            </div>
            <div class="donors-footer">
              <div class="total-donors">
                <span class="icon-users"></span>
                <span>Total donors this week: 47</span>
              </div>
            </div>
          </div>

          <div class="cta-container" data-aos="fade-left" data-aos-delay="400">
            <div class="cta-content">
              <h5>Ready to Make a Difference?</h5>
              <p>Join our mission to create positive change</p>
              <div class="cta-buttons">
                <router-link to="/donate" class="btn btn-gold">
                  <span class="icon-heart"></span> Donate Now
                </router-link>
                <router-link to="/contact" class="btn btn-outline-dark">
                  <span class="icon-user"></span> Volunteer
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Section -->
  <section class="ftco-section bg-light" style="padding-top: 56px; padding-bottom: 0px;">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section ftco-animate text-center">
          <h2 class="mb-4">Our Latest Events</h2>
          <p>Stay updated with our upcoming events and relive the memories of past ones</p>
        </div>
      </div>
      <div class="row">
        <div class="events-container">
          <div class="left-containers">
            <div class="upcoming-events-container" data-aos="fade-right" data-aos-delay="200">
              <div class="events-header">
                <span class="icon-calendar"></span>
                <h5>Upcoming Events</h5>
              </div>
              <div class="upcoming-events-list">
                <div class="event-item upcoming">
                  <div class="event-date"><span class="day">15</span><span class="month">Dec</span></div>
                  <div class="event-info">
                    <div class="event-title">Community Health Camp</div>
                    <div class="event-time"><i class="icon-clock-o"></i> 9:00 AM - 4:00 PM</div>
                    <div class="event-location"><i class="icon-map-o"></i> Community Center, Meerut</div>
                    <div class="event-description">Free health checkups and medical consultation for families in need.</div>
                  </div>
                  <div class="event-status">UPCOMING</div>
                </div>
                <div class="event-item upcoming">
                  <div class="event-date"><span class="day">22</span><span class="month">Dec</span></div>
                  <div class="event-info">
                    <div class="event-title">Education Workshop</div>
                    <div class="event-time"><i class="icon-clock-o"></i> 10:00 AM - 2:00 PM</div>
                    <div class="event-location"><i class="icon-map-o"></i> Angry Youth NGO Office</div>
                    <div class="event-description">Skill development workshop for women and youth empowerment.</div>
                  </div>
                  <div class="event-status">UPCOMING</div>
                </div>
              </div>
              <div class="add-event-section">
                <router-link to="/events" class="btn btn-add-event">
                  <span class="icon-plus"></span> View All Events
                </router-link>
              </div>
            </div>

            <div class="testimonials-container" data-aos="fade-right" data-aos-delay="300">
              <div class="testimonials-header">
                <span class="icon-quote-left"></span>
                <h5>What People Say</h5>
              </div>
              <div class="testimonials-slider">
                <div v-for="(t, i) in testimonials" :key="i" class="testimonial-item" :class="{ active: currentTestimonial === i }">
                  <div class="testimonial-content">
                    <p>{{ t.text }}</p>
                    <div class="testimonial-author">
                      <div class="author-avatar">{{ t.initial }}</div>
                      <div class="author-info">
                        <div class="author-name">{{ t.name }}</div>
                        <div class="author-location">{{ t.location }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonials-controls">
                <button class="testimonial-nav prev" @click="changeTestimonial(-1)">
                  <span class="icon-arrow-left"></span>
                </button>
                <div class="testimonial-dots">
                  <span v-for="(t, i) in testimonials" :key="i" class="dot"
                    :class="{ active: currentTestimonial === i }" @click="currentTestimonial = i"></span>
                </div>
                <button class="testimonial-nav next" @click="changeTestimonial(1)">
                  <span class="icon-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>

          <div class="previous-events-container" style="padding-bottom: 20px;">
            <div class="previous-events-card" style="padding-bottom: 20px;">
              <div class="events-header">
                <span class="icon-history"></span>
                <h4>Previous Events</h4>
              </div>
              <div class="previous-events-list">
                <div v-for="(ev, i) in previousEvents" :key="i" class="event-item previous">
                  <div class="event-date">
                    <span class="day">{{ ev.day }}</span>
                    <span class="month">{{ ev.month }}</span>
                  </div>
                  <div class="event-info">
                    <div class="event-title">{{ ev.title }}</div>
                    <div class="event-time"><i class="icon-clock-o"></i> {{ ev.time }}</div>
                    <div class="event-location"><i class="icon-map-o"></i> {{ ev.location }}</div>
                    <div class="event-description">{{ ev.description }}</div>
                    <div class="event-stats">
                      <span v-for="(s, j) in ev.stats" :key="j" class="stat">{{ s }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="events-footer">
                <div class="total-events">
                  <span class="icon-calendar"></span>
                  <span>Total Events This Year: 24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Volunteer Form Section -->
  <section class="ftco-section-3 img">
    <div class="overlay" style="background-color: darkkhaki;"></div>
    <div class="container">
      <div class="row d-md-flex">
        <div class="col-md-6 d-flex ftco-animate">
          <div class="img img-2 align-self-stretch" style="background-image: url(/images/bg_3.png);"></div>
        </div>
        <div class="col-md-6 volunteer pl-md-5 ftco-animate">
          <h3 class="mb-3">Be a volunteer</h3>
          <form @submit.prevent="submitVolunteer" class="volunter-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name" v-model="volunteerForm.name">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Your Email" v-model="volunteerForm.email">
            </div>
            <div class="form-group">
              <textarea cols="30" rows="3" class="form-control" placeholder="Message" v-model="volunteerForm.message"></textarea>
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
import { ref, onMounted, onUnmounted } from 'vue'

const donors = [
  { initial: 'R', name: 'Riya Sharma', amount: '₹1,500', message: '"For children\'s education"', time: 'Just now', status: 'new' },
  { initial: 'A', name: 'Amit Kumar', amount: '₹2,000', message: '"Supporting women empowerment"', time: '5 min ago', status: 'recent' },
  { initial: 'P', name: 'Priya Singh', amount: '₹800', message: '"For clean water project"', time: '12 min ago', status: 'recent' },
]

const testimonials = [
  { initial: 'S', name: 'Sunita Devi', location: 'Meerut, UP', text: '"The health camp organized by Angry Youth NGO was a blessing for our family. The doctors were very caring and provided free medicines. We are truly grateful for their support."' },
  { initial: 'R', name: 'Rahul Kumar', location: 'Volunteer', text: '"I\'ve been volunteering with this organization for 2 years. The impact we create in communities is truly remarkable. Every event brings hope and change to people\'s lives."' },
  { initial: 'P', name: 'Priya Singh', location: '', text: '"The education support program helped my daughter continue her studies. We\'re forever grateful to Angry Youth NGO for giving us hope and opportunity."' },
]

const previousEvents = [
  { day: '08', month: 'Dec', title: 'Food Distribution Drive', time: '8:00 AM - 6:00 PM', location: 'Various Locations', description: 'Successfully distributed food packets to 500+ families across Meerut.', stats: ['👥 500+ Families', '❤️ 25 Volunteers'] },
  { day: '01', month: 'Dec', title: 'Women Empowerment Workshop', time: '10:00 AM - 4:00 PM', location: 'Community Hall', description: 'Skill training workshop for 80 women in tailoring and crafts.', stats: ['👥 80 Women', '⭐ 4.8/5 Rating'] },
  { day: '25', month: 'Nov', title: "Children's Education Fair", time: '9:00 AM - 3:00 PM', location: 'School Ground', description: 'Educational activities and book distribution for 200+ children.', stats: ['👥 200+ Children', '📚 500 Books'] },
  { day: '18', month: 'Nov', title: 'Clean Water Initiative', time: '7:00 AM - 5:00 PM', location: 'Village Areas', description: 'Installed water filters and handpumps in 3 villages.', stats: ['🏘️ 3 Villages', '💧 15 Filters'] },
]

const currentTestimonial = ref(0)
let testimonialTimer = null

const volunteerForm = ref({ name: '', email: '', message: '' })

function changeTestimonial(dir) {
  currentTestimonial.value = (currentTestimonial.value + dir + testimonials.length) % testimonials.length
}

function submitVolunteer() {
  alert('Thank you for your interest in volunteering! We will get back to you soon.')
  volunteerForm.value = { name: '', email: '', message: '' }
}

onMounted(() => {
  testimonialTimer = setInterval(() => changeTestimonial(1), 5000)

  if (window.$ && window.$.fn.owlCarousel) {
    window.$('.carousel-cause').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 }
      }
    })
  }

  if (window.$ && window.$.fn.stellar) {
    window.$(document).stellar({ responsive: true, parallaxBackgrounds: true, parallaxElements: false })
  }

  if (window.AOS) window.AOS.refresh()

  if (window.$ && window.$.fn.waypoint) {
    window.$('.number').each(function () {
      const $this = window.$(this)
      const target = parseInt($this.data('number'), 10)
      $this.waypoint(function () {
        $this.animateNumber({ number: target, easing: 'easeInQuad' }, 3000)
      }, { offset: '95%' })
    })
  }
})

onUnmounted(() => {
  clearInterval(testimonialTimer)
})
</script>
