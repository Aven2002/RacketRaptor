<template>
  <div>
    <!-- First Container: ComLogo, Phone Number, Email -->
    <div class="navbar-brand-container">
      <div class="com-logo-container">
        <img
          src="./assets/ComLogo.png"
          alt="ComLogo"
          height="35"
          class="d-inline-block align-top com-logo"
        />
        <img
          class="header-img"
          src="./assets/ComHeader.png"
          alt="backgroundImg"
        />
        <span class="brand-text">
          <strong>PHONE</strong> +603 1022 4197
          <strong> EMAIL</strong> enquiry@racketradar.com
        </span>
      </div>
    </div>

    <!-- Second Part: Navigation Links -->
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #3498db"
    >
      <div class="container d-flex justify-content-between">
        <div class="navbar-collapse-container">
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
                :class="{ 'active-link': $route.path === '/accesories' }"
              >
                <i class="fas fa-shopping-bag"></i> ACCESSORIES
              </router-link>
            </ul>

            <button
              @click="goToLogInView"
              v-if="$route.meta.showLogOutBtn"
              class="btn btn-outline-danger"
              :style="{
                'margin-left': isDropdownOpen ? '0' : '380px',
                'margin-top': !isDropdownOpen ? '0' : '50px',
              }"
            >
              <i class="fas fa-sign-out-alt"></i> Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view @beforeRouteUpdate="hideDropdown" />

    <!-- Conditionally render the footer based on the route's meta field -->
    <footer
      v-if="$route.meta.showFooter"
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
    goToLogInView() {
      this.$router.push("/log-in");
    },
  },
};
</script>

<style>
/* Common styles */
.brand-text {
  font-size: 14px;
  color: #2c3e50; /* Dark text color */
}

/* Navigation bar styling */
.navbar {
  background-color: #3498db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight box shadow for depth */
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.com-logo-container img {
  height: 35px;
  margin: 20px;
}

/* Navigation links styling */
.navbar-nav .nav-link {
  color: #ffffff; /* Default font color (white) */
  margin-right: 15px;
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
  color: #2c3e50; /* Dark text color */
}

/* Underline effect for active link */
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

  .navbar-brand-container {
    flex-direction: column; /* Stack elements vertically on small screens */
    align-items: flex-start; /* Align items to the start on small screens */
    text-align: center; /* Center text on small screens */
  }

  .contact-info-container {
    align-items: center; /* Center contact info on small screens */
    margin-top: 10px; /* Add margin on top for spacing */
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

/* Footer styling */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 15px 0;
}
.brand-text {
  margin: 20px 250px;
}
</style>
