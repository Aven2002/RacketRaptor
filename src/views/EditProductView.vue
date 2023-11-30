<template>
  <div class="push-view text-center mt-5">
    <div class="CRUD-card">
      <h2 class="CRUD-card-title">Edit a product</h2>

      <!-- Display alert message if it exists -->
      <div
        v-if="alertMessage"
        class="alert alert-success rounded small-alert"
        role="alert"
      >
        {{ alertMessage }}
      </div>

      <form @submit.prevent="editProduct">
        <div class="form-group">
          <label for="ProductType">Product Type:</label>
          <div class="dropdown">
            <!-- The actual dropdown with custom styling -->
            <div class="dropdown-container">
              <!-- Display the arrow-circle-o-left icon before the dropdown is clicked -->
              <i
                v-if="!isDropdownOpen"
                class="fas fa-arrow-circle-left arrow-icon"
              ></i>

              <!-- Display the arrow-circle-down icon after the dropdown is clicked -->
              <i
                v-if="isDropdownOpen"
                class="fas fa-arrow-circle-down arrow-icon"
              ></i>

              <select
                id="productType"
                v-model="productType"
                required
                class="form-control custom-dropdown"
                @click="toggleDropdown"
              >
                <option value="" disabled>Select product type</option>
                <option value="Racket">Racket</option>
                <option value="Shuttlecock">Shuttlecock</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div class="form-group">
            <label for="ProductName">Name:</label>
            <input
              type="text"
              id="productName"
              v-model="productName"
              required
              class="form-control input-field"
              placeholder="Enter product's name..."
            />
          </div>

          <div class="form-group">
            <label for="ProductBrand">Brand:</label>
            <input
              type="text"
              id="productBrand"
              v-model="productBrand"
              required
              class="form-control input-field"
              placeholder="Enter product's brand..."
            />
          </div>

          <!-- Additional fields based on product type -->
          <div v-if="productType === 'Racket'">
            <div class="form-group">
              <label for="ProductWeight">Weight:</label>
              <input
                type="text"
                id="productWeight"
                v-model="productWeight"
                required
                class="form-control"
                placeholder="Enter product's weight..."
              />
            </div>

            <div class="form-group">
              <label for="ProductGripSize">Grip Size:</label>
              <input
                type="text"
                id="productGripSize"
                v-model="productGripSize"
                required
                class="form-control"
                placeholder="Enter product's grip size..."
              />
            </div>
          </div>

          <div v-if="productType === 'Racket' || productType === 'Shuttlecock'">
            <div class="form-group">
              <label for="Price">Price:</label>
              <input
                type="text"
                id="productPrice"
                v-model="productPrice"
                required
                class="form-control"
                placeholder="Enter product's price..."
              />
            </div>
          </div>

          <!-- Additional fields based on product type -->
          <div v-if="productType === 'Shoes'">
            <!-- Add fields specific to Shoes -->
          </div>

          <div v-if="productType === 'Accessories'">
            <!-- Add fields specific to Accessories -->
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      productType: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
