<template>
  <section class="about-section">
    <div class="container">
      <div class="content has-text-centered">
        <h1 class="title is-3">About FitLife</h1>
        <p class="subtitle is-5">
          Your journey to a healthier lifestyle starts here. FitLife helps you stay on top of your fitness goals with personalized plans and expert advice.
        </p>
      </div>

      <div class="columns is-centered">
        <div class="column is-half">
          <div class="box">
            <h2 class="title is-4">Our Mission</h2>
            <p>
              To inspire and empower everyone to lead a healthier, more active lifestyle. Whether you're a beginner or an expert, we’re here to help you succeed.
            </p>
          </div>
        </div>

        <div class="column is-half">
          <div class="box">
            <h2 class="title is-4">Join Us</h2>
            <p>
              Become part of a community that values progress, not perfection. Start tracking your fitness today and achieve your goals.
            </p>
            <router-link to="/signup" class="button is-primary is-fullwidth mt-3">Sign Up Now</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.box {
  border-radius: 8px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.title {
  color: #333;
}

.button {
  border-radius: 8px;
  background-color: #00d1b2;
}

.button:hover {
  background-color: #00b89c;
}
</style>
