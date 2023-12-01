<template>
  <button
    @click="goBack"
    class="btn btn-outline-danger mt-3"
    style="margin-left: 1000px; font-size: 15px"
  >
    <i class="fas fa-arrow-left"></i> Go Back
  </button>
  <div class="push-view text-center mt-2">
    <div class="CRUD-card">
      <h2 class="CRUD-card-title text-center mb-4">Add a product</h2>
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
              :disabled="!productType"
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
              :disabled="!productType"
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
                class="form-control input-field"
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
                class="form-control input-field"
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
                class="form-control input-field"
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
      productType: "",
      productName: "",
      productBrand: "",
      productWeight: "",
      productGripSize: "",
      productPrice: "",
      alertMessage: "",
      isDropdownOpen: false,
    };
  },
  watch: {
    productType: function () {
      // Reset values when product type changes
      this.productName = "";
      this.productBrand = "";
      this.productWeight = "";
      this.productGripSize = "";
      this.productPrice = "";
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    goBack() {
      // Alternatively, you can use this method to go back
      this.$router.go(-1);
    },
    async addProduct() {
      // Reset alert message before attempting to send a new SMS
      this.alertMessage = "";

      if (
        !this.productName.trim() ||
        !this.productBrand.trim() ||
        !this.productWeight.trim() ||
        !this.productGripSize.trim() ||
        !this.productPrice.trim() ||
        !this.productDescription.trim()
      ) {
        // Set an alert message if any of the fields is empty
        this.alertMessage = "All fields must be filled!";
        return;
      }

      try {
        // Make a POST request to add product to the database
        const response = await this.$axios.post(
          "https://dummyjson.com/products/add",
          {
            Name: this.productName,
            Brand: this.productBrand,
            Weight: this.productWeight,
            GripSize: this.productGripSize,
            Price: this.productPrice,
            Description: this.productDescription,
          }
        );

        console.log("API Response:", response.data);

        // Optionally, you can handle the response or reset the form
        this.productName = "";
        this.productBrand = "";
        this.productWeight = "";
        this.productGripSize = "";
        this.productPrice = "";
        this.productDescription = "";

        // Display a confirmation message using alert
        this.alertMessage = "Product Successfully added!";
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  },
};
</script>
