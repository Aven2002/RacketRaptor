<template>
  <div class="login-view">
    <div class="container-fluid">
      <div class="row">
        <!-- Left Section with Background Image -->
        <div class="col-md-6 d-none d-md-block bg-image"></div>

        <!-- Right Section with Login Card -->
        <div class="col-md-6">
          <div class="card login-card">
            <div class="card-body">
              <h1 class="card-title text-center mb-4">Login</h1>

              <!-- Your Login Form Goes Here -->
              <form @submit.prevent="login">
                <!-- Form Inputs (Example: Username and Password) -->
                <div class="mb-3">
                  <label for="username" class="form-label">Username:</label>
                  <input
                    type="text"
                    v-model="username"
                    class="form-control"
                    id="username"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password:</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    required
                  />
                </div>

                <!-- Login Button -->
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log("Logging in...");
    },
  },
};
</script>

<style scoped>
.login-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.bg-image {
  background-image: src("./assets/Background.png");
  background-size: cover;
  background-position: center;
}

.login-card {
  margin: auto;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #333;
}
</style>
