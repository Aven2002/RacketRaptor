<template>
  <div class="logo-container">
    <img
      class="background-img"
      src="../assets/MainBackground.png"
      alt="backgroundImg"
    />

    <div class="container-view">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="card-view">
              <div class="card-body">
                <h2 class="card-title text-center mb-4">Register</h2>

                <!-- Your registration form goes here -->
                <form @submit.prevent="register">
                  <!-- Form Inputs (e.g., Name, Email, Password) -->
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name:</label>
                    <input
                      type="text"
                      v-model="name"
                      class="form-control"
                      id="name"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control"
                      id="email"
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

                  <!-- Registration Button -->
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
                  </button>
                </form>
              </div>
            </div>

            <!-- Link to go back to the login view -->
            <p class="mt-3 text-center">
              Already have an account?
              <router-link to="/log-in">Login</router-link>
            </p>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      // Implement your registration logic here
      // Typically involves making an API call to register the user
    },
  },
};
</script>

<style scoped>
.background-img {
  width: 100%;
  height: auto;
}

.container-view {
  position: absolute;
  top: 170px;
  margin-left: 50px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.card-view {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
}

.card-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
}

.input-field {
  width: 95%;
}
</style>
