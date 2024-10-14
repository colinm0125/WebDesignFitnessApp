<template>
    <section class="section expertise-section">
      <div class="container">
        <h1 class="title has-text-centered page-title">Choose Your Expertise Level</h1>
        <p class="subtitle has-text-centered page-subtitle">Pick the option that best describes your fitness level</p>
  
        <div class="columns is-centered">
          <!-- Beginner Option -->
          <div class="column is-one-third has-text-centered">
            <div class="box">
              <p class="heading">Beginner</p>
              <p class="title">I'm brand new to working out!</p>
              <router-link to="/beginnerWorkouts" class="button is-primary is-fullwidth beginner-btn">Select</router-link>
            </div>
          </div>
  
          <!-- Intermediate Option -->
          <div class="column is-one-third has-text-centered">
            <div class="box">
              <p class="heading">Intermediate</p>
              <p class="title">I have some experience working out!</p>
              <router-link to="/intermediateWorkouts" class="button is-primary is-fullwidth intermediate-btn">Select</router-link>
            </div>
          </div>
  
          <!-- Advanced Option -->
          <div class="column is-one-third has-text-centered">
            <div class="box">
              <p class="heading">Advanced</p>
              <p class="title">I'm a fitness pro!</p>
              <router-link to="/advancedWorkouts" class="button is-primary is-fullwidth advanced-btn">Select</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .expertise-section {
    background-color: lightblue; 
    min-height: 100vh;        
    display: flex;
    align-items: center;       
    justify-content: center;   
  }
  
 
  .beginner-btn {
    color: white;            
    background-color: #00d1b2; 
    border: none;
  }
  
  .intermediate-btn {
    color: white;             
    background-color: #ffdd57; 
    border: none;
  }
  
  .advanced-btn {
    color: white;              
    background-color: #ff3860; 
    border: none;
  }
  
  /* Hover effects */
  .button:hover,
  .button:focus {
    opacity: 0.9;
  }
  
  .beginner-btn:hover {
    background-color: #00c4a7;
  }
  
  .intermediate-btn:hover {
    background-color: #ffd83b;
  }
  
  .advanced-btn:hover {
    background-color: #ff2944;
  }
  
  .page-title {
    margin-bottom: 1.5rem;
    color: black;
  }

  .page-subtitle {
    margin-bottom: 2rem;
    color: darkgray;
  }
  </style>
  