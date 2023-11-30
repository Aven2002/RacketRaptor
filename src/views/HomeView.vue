<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Welcome to SMS App</h1>
    </div>

    <div class="content">
      <div class="logo-container">
        <img src="../assets/ComLogo.png" alt="Sms Logo" class="welcome-image" />
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <ol class="carousel-indicators">
          <li
            v-for="(item, index) in carouselItems"
            :key="index"
            :data-bs-target="'#' + carouselId"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            v-for="(item, index) in carouselItems"
            :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }"
          >
            <img
              class="d-block w-100"
              :src="require(`@/assets/${item.src}`)"
              :alt="item.alt"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselId: "carouselExampleIndicators",
      carouselItems: [
        { src: "LCW.png", alt: "First slide" },
        { src: "LZJ.png", alt: "Second slide" },
        { src: "LD.png", alt: "Third slide" },
      ],
    };
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-image: url("../assets/Background.png");
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
}

.header h1 {
  font-size: 24px; /* Adjust as needed */
  font-weight: bold;
  color: #333; /* Adjust text color */
  margin: 0;
  padding-top: 20px; /* Adjust padding as needed */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Adjust padding as needed */
}

.logo-container {
  margin-bottom: 20px; /* Adjust margin as needed */
}

.welcome-image {
  max-width: 100%;
  max-height: 200px; /* Adjust as needed */
}

/* Custom styling for the carousel */
.carousel {
  max-width: 60%; /* Adjust as needed */
}

.carousel-inner {
  border-radius: 10px; /* Optional: Add rounded corners to the carousel items */
  overflow: hidden; /* Hide overflow for rounded corners */
}

.carousel-item img {
  object-fit: cover; /* Cover the entire carousel item with the image */
  max-height: 300px; /* Adjust the maximum height of the carousel items */
}
</style>
