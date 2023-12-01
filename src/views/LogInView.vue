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
                <img
                  class="header-img"
                  src="../assets/ComHeader.png"
                  alt="backgroundImg"
                />

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
                  <button type="submit" class="btn btn-primary">Log in</button>
                </form>
                <div
                  class="text-center"
                  style="margin: 25px; display: flex; align-items: center"
                >
                  <hr
                    style="
                      flex: 1;
                      border-top: 1px solid black;
                      margin-right: 10px;
                    "
                  />
                  <span>or</span>
                  <hr
                    style="
                      flex: 1;
                      border-top: 1px solid black;
                      margin-left: 10px;
                    "
                  />
                </div>

                <!-- Link to the register view -->
                <p class="mt-3 text-center">
                  <router-link to="/register">
                    Sign up for RacketRadar</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegisterView() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.background-img {
  width: 100%;
  height: auto;
}
.header-img {
  width: 80%;
  height: auto;
  margin: 30px;
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
  width: 90%;
}
.btn-primary {
  width: 90%;
  margin: 20px 20px;
}
</style>
