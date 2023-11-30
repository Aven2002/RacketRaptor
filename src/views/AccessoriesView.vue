<template>
  <div class="racket-view container mt-5">
    <h1 class="mb-4">Accessories List</h1>
    <!-- Search bar aligned with the header -->
    <div class="search-bar mb-4">
      <input
        v-model="searchTerm"
        @input="filterRackets"
        type="text"
        class="form-control"
        placeholder="Search for accessories..."
      />
      <span class="search-icon" role="button" @click="filterRackets">
        <i class="bi bi-search"></i>
        <!-- Use "bi bi-search" for Bootstrap 5 -->
      </span>
    </div>

    <!-- Enclose the button in a container -->
    <div class="mb-4">
      <button @click="goToAddProductView" class="btn btn-primary">
        Add Product
      </button>
    </div>

    <!-- Check if there are products to display -->
    <div v-if="rackets.length > 0" class="row">
      <div
        v-for="racket in rackets"
        :key="racket.id"
        class="col-md-4 mb-4"
        @click="showProductDetails(racket)"
        style="cursor: pointer"
      >
        <div class="card">
          <img
            :src="racket.thumbnail"
            alt="Racket Thumbnail"
            class="card-img-top"
            style="max-height: 200px; object-fit: cover"
          />
          <div class="card-body">
            <h5 class="card-title">{{ racket.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Display a message when no products are found -->
    <div v-else>
      <p>No products found.</p>
    </div>

    <!-- Modal for Product Details -->
    <div
      ref="productDetailsModal"
      class="modal fade"
      id="productDetailsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productDetailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productDetailsModalLabel">
              Product Details
            </h5>
            <button
              type="button"
              class="close-btn"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeProductDetailsModal"
            >
              <span aria-hidden="true" class="fas fa-times"></span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Check if selectedProduct is not null before accessing its properties -->
            <template v-if="selectedProduct">
              <img
                :src="selectedProduct.thumbnail"
                alt="Racket Thumbnail"
                class="img-fluid mb-3"
              />
              <h5>{{ selectedProduct.title }}</h5>
              <p><strong>Brand:</strong> {{ selectedProduct.brand }}</p>
              <p><strong>Weight:</strong> {{ selectedProduct.weight }}</p>
              <p><strong>Grip Size:</strong> {{ selectedProduct.gripSize }}</p>
              <p><strong>Price:</strong> ${{ selectedProduct.price }}</p>
              <p>
                <strong>Description:</strong> {{ selectedProduct.description }}
              </p>
              <!-- "Edit" and "Delete" buttons within the modal body -->
              <div class="mt-3">
                <button
                  @click="goToEditProductView"
                  class="btn btn-warning btn-lg"
                >
                  Edit
                </button>
                <button
                  @click="goToDeleteProductView"
                  class="btn btn-danger btn-lg ml-2"
                >
                  Delete
                </button>
              </div>
            </template>
            <template v-else>
              <p>No product selected.</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rackets: [],
      selectedProduct: null,
      searchTerm: "",
    };
  },
  mounted() {
    this.getRackets();
  },
  methods: {
    getRackets() {
      axios
        .get("https://dummyjson.com/products") // Update the endpoint if needed
        .then((response) => {
          this.rackets = response.data.products;
        })
        .catch((error) => {
          console.error("Error getting rackets:", error);
        });
    },
    goToAddProductView() {
      this.$router.push("/add-product");
    },
    goToEditProductView() {
      this.$router.push("/edit-product");
    },
    goToDeleteProductView() {
      this.$router.push("/delete-product");
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      this.$refs.productDetailsModal.classList.add("show");
      this.$refs.productDetailsModal.style.display = "block";
    },
    closeProductDetailsModal() {
      this.selectedProduct = null;
      this.$refs.productDetailsModal.classList.remove("show");
      this.$refs.productDetailsModal.style.display = "none";
    },
    filterRackets() {
      // If searchTerm is empty, reset the list to the original set of products
      if (this.searchTerm === "") {
        this.getRackets();
        return;
      }

      // Filter the rackets based on the searchTerm
      const filteredRackets = this.rackets.filter((racket) => {
        return (
          racket.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          racket.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });

      // Update the rackets with the filtered results
      this.rackets = filteredRackets;
    },
  },
};
</script>

<style scoped>
body,
h1,
h2,
h3,
p,
img,
ul,
li {
  margin: 0;
  padding: 0;
}

/* Enhanced overall design for racket-view */
.racket-view {
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9; /* Light gray background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Increased max-width for a more spacious feel */
  margin-top: 20px;
  background-color: #4285f4; /* Google Blue for a vibrant look */
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out; /* Smooth transition for background color */
}

.search-bar input {
  width: calc(100% - 60px);
  padding: 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  color: #333;
  transition: width 0.3s ease-in-out; /* Smooth transition for width */
}

.search-bar input:focus {
  width: calc(100% - 80px);
}

.search-icon {
  margin: 0 15px;
  color: #fff;
}

.racket-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.racket-card {
  width: 300px;
  margin: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.racket-card:hover {
  transform: scale(1.05);
}

.racket-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.racket-card .card-body {
  padding: 15px;
}

.product-details {
  text-align: left;
  background-color: #f0f0f0; /* Light gray background for product details */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.product-details img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-details p {
  margin: 5px 0;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .racket-card {
    width: 100%;
  }
  .search-bar input:focus {
    width: calc(100% - 40px);
  }
}
</style>
