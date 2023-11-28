<template>
  <div class="racket-view container mt-5">
    <div class="search-bar mb-4">
      <input
        v-model="searchTerm"
        @input="filterRackets"
        type="text"
        class="form-control"
        placeholder="Search for rackets..."
      />
    </div>
    <h1 class="mb-4">Racket List</h1>
    <div class="row">
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
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeProductDetailsModal"
            >
              <span aria-hidden="true">&times;</span>
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
/* You can remove the custom styling, Bootstrap will handle it */

.racket-view {
  font-family: "Arial", sans-serif;
}
.search-bar {
  width: 200px;
}
</style>
