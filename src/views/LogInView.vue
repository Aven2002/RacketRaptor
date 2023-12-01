<template>
  <div class="logo-container">
    <img
      class="background-img"
      src="../assets/LogInBackground.png"
      alt="backgroundImg"
    />

    <div class="login-view">
      <div class="container-fluid">
        <div class="row">
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
                      class="form-control input-field"
                      id="username"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control input-field"
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
  </div>
</template>

<style scoped>
.logo-container {
  position: relative;
}

.background-img {
  width: 100%;
  height: auto;
}

.login-view {
  position: absolute;
  top: 20px;
  margin-left: 650px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.login-card {
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
