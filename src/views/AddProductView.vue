<template>
  <div class="push-view text-center mt-5">
    <div class="card mx-auto" style="max-width: 400px">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Add a product</h2>

        <!-- Display alert message if it exists -->
        <div
          v-if="alertMessage"
          class="alert alert-success rounded small-alert"
          role="alert"
        >
          {{ alertMessage }}
        </div>

        <form @submit.prevent="addProduct">
          <div class="form-group">
            <label for="ProductName">Name:</label>
            <input
              type="text"
              id="productName"
              v-model="productName"
              required
              class="form-control"
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
              class="form-control"
              placeholder="Enter product's brand..."
            />
          </div>

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

          <div class="form-group">
            <label for="Description">Description:</label>
            <input
              type="text"
              id="productDescription"
              v-model="productDescription"
              required
              class="form-control"
              placeholder="Enter product's description..."
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            Upload
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: "",
      productBrand: "",
      productWeight: "",
      productGripSize: "",
      productPrice: "",
      productDescription: "",
      alertMessage: "",
    };
  },
  methods: {
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

<style scoped>
.input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
}

.input:focus {
  border-color: #3498db;
}
.card {
  border: none;
  border-radius: 10px;
  background-color: red;
}

.card-title {
  color: #333333;
}

.alert {
  font-size: 14px;
  padding: 15px;
  margin: 20px 0;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
}
</style>
