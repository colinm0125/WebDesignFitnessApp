<template>
  <section class="hero is-info is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Welcome to FitLife!
        </h1>
        <h2 class="subtitle">
          Your journey to fitness starts here.
        </h2>

        <div class="buttons is-centered">
          <RouterLink to="/expertise-level" class="button is-primary is-large">
            Explore Workouts
          </RouterLink>
          <RouterLink to="/nutrition" class="button is-light is-large">
            Learn about Nutrition
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section has-info">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-dumbbell fa-3x"></i>
            </span>
            <h3 class="title is-4">Workout Plans</h3>
            <p>Choose from a variety of professionally designed workout plans to suit all fitness levels.</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-apple-alt fa-3x"></i>
            </span>
            <h3 class="title is-4">Healthy Nutrition</h3>
            <p>Access personalized meal plans to fuel your workouts and maintain your health.</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-heartbeat fa-3x"></i>
            </span>
            <h3 class="title is-4">Track Progress</h3>
            <p>Keep track of your progress with easy-to-use tracking tools and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-body {
  background-size: cover;
  background-position: center;
}

.has-info {
  background-color: whitesmoke;
}
</style>
