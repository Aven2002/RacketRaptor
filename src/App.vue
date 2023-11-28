<template>
  <div>
    <!-- Bootstrap Navigation Bar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #3498db"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/ComLogo.png"
            alt="ComLogo"
            height="35"
            class="d-inline-block align-top"
          />
          <span class="brand-text">
            <strong>PHONE</strong> +603 1022 4197
            <strong> EMAIL</strong> enquiry@racketradar.com
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          :aria-expanded="isDropdownOpen"
          aria-controls="navbarNav"
          @click="toggleDropdown"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          :class="{ show: isDropdownOpen }"
          id="navbarNav"
        >
          <ul class="navbar-nav ml-auto">
            <router-link
              to="/"
              class="nav-link"
              @click="hideDropdown"
              :class="{ 'active-link': $route.path === '/' }"
            >
              <i class="fas fa-home"></i> Home
            </router-link>
            <router-link
              to="/racket"
              class="nav-link"
              @click="hideDropdown"
              :class="{ 'active-link': $route.path === '/racket' }"
            >
              <i class="fas fa-medal"></i> RACKET
            </router-link>
            <router-link
              to="/shuttlecock"
              class="nav-link"
              @click="hideDropdown"
              :class="{ 'active-link': $route.path === '/shuttlecock' }"
            >
              <i class="fas fa-futbol"></i> SHUTTLECOCK
            </router-link>
            <router-link
              to="/shoes"
              class="nav-link"
              @click="hideDropdown"
              :class="{ 'active-link': $route.path === '/shoes' }"
            >
              <i class="fas fa-shoe-prints"></i> SHOES
            </router-link>
            <router-link
              to="/accesories"
              class="nav-link"
              @click="hideDropdown"
              :class="{ 'active-link': $route.path === '/accessories' }"
            >
              <i class="fas fa-shopping-bag"></i> ACCESSORIES
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view @beforeRouteUpdate="hideDropdown" />
    <!-- Footer Section -->
    <footer
      class="footer mt-auto py-3"
      style="background-color: #2c3e50; color: #ecf0f1; text-align: center"
    >
      <div class="container">
        <span>&copy; 2023 Racket Radar. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    hideDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style>
/* Brand text styling */
.brand-text {
  font-size: 14px;
  color: #ecf0f1; /* Light text color */
  margin-left: 20px;
}

/* Navbar styling */
.navbar-nav {
  margin-left: auto;
}

/* Navigation links styling */
.navbar-nav .nav-link {
  color: #ffffff; /* Default font color (white) */
  margin-right: 15px;
  position: relative;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

/* Keyframes animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Active link styling with increased specificity */
.navbar-nav .nav-link.active-link {
  color: black;
  text-decoration: none;
}

.active-link::before {
  content: " ";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e67e22; /* Active link underline color */
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.active-link:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Adjustments to the toggler button */
.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-color: transparent !important;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .navbar-nav {
    margin-top: 10px;
  }

  .navbar-toggler {
    margin-right: 15px;
  }

  .navbar-collapse {
    margin-top: 15px;
  }
}

/* Dropdown menu styling */
.navbar-nav .dropdown-menu {
  text-align: center;
}

.navbar-nav .dropdown-menu .nav-link {
  display: block;
  width: 100%;
  text-align: left;
}

/* Font Awesome icons styling */
.nav-link i {
  margin-right: 8px;
}
</style>
