<!-- eslint-disable prettier/prettier -->
<template>
  <div class="exclusive-page">
    <div class="row">
      <div class="col-lg-3">
        <div class="filter">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  AVAILABILITY
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      In Stock
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Out Stock
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PRICE
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    step="0.5"
                    id="customRange3"
                  />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  COLOR
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <button
                    type="button"
                    class="btn btn-primary colors"
                    v-for="color in arrColor"
                    :key="color"
                    :colorSpe="color"
                    :id="color"
                    v-bind:style="{ backgroundColor: color }"
                    @click="filterTheColor"
                  ></button>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  SIZE
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Small
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Medium
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Large
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      X-Large
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      XX-Large
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      XXX-Large
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 information">
        <div>
          <div class="container">
            <h1>{{ posts.length }}</h1>
          </div>
          <div class="container">
            <div class="product-area">
              <productVue
                v-for="post in posts"
                :key="post.id"
                :id="post.id"
                :title="post.title"
                :description="post.description"
                :price="post.price"
                :image="post.image"
                :class="post.color"
                :color="post.color"
                :numberInStore="post.rating.count"
              ></productVue>
            </div>
          </div>
          <div class="container">
            <div class="pagintaion">
              <ul class="pagintaionElements" createPagnition></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import productVue from "@/components/global/product.vue";
import productJson from "../json/product.json";

export default {
  name: "exclusive-page",
  data: function () {
    return {
      posts: productJson,
      jsp_records_per_page: 10,
      arr: [],
      arrColor: [],
    };
  },
  // displayPageLimit(this.jsp_records_per_page),
  methods: {
    ProductsColor() {
      for (let i = 0; i < this.posts.length; i++) {
        if (!this.arrColor.includes(this.posts[i].color)) {
          this.arrColor.push(this.posts[i].color);
        }
      }
    },
    jsp_num_pages() {
      return Math.ceil(this.posts.length / this.jsp_records_per_page);
    },
    displayPageLimit(jsp_records_per_page) {
      var productDisplayNon = document.querySelector(".product-area");
      var product = document.querySelectorAll(".product-page");
      for (let i = 0; i < product.length; i++) {
        this.arr.push(product[i]);
      }
      productDisplayNon.innerHTML = "";
      for (var i = 0; i < jsp_records_per_page; i++) {
        productDisplayNon.appendChild(this.arr[i]);
      }
    },
    createPagnition() {
      this.displayPageLimit(this.jsp_records_per_page);
      var pagintaionElement = document.querySelector(".pagintaionElements");
      for (var i = 1; i <= this.jsp_num_pages(); i++) {
        var pagintaionItem = document.createElement("li");
        pagintaionItem.style =
          "background: #d8a48e; padding: 1px 7px;margin-right: 10px;color: white;cursor: pointer;";
        pagintaionItem.setAttribute("data-index", i);
        pagintaionItem.appendChild(document.createTextNode(i));
        pagintaionElement.appendChild(pagintaionItem);
        pagintaionItem.addEventListener("click", (e) => {
          var productDisplayNon = document.querySelector(".product-area");
          let getaSelected = e.currentTarget.getAttribute("data-index");
          productDisplayNon.innerHTML = "";
          getaSelected--;
          let start = this.jsp_records_per_page * getaSelected;
          let end = start + this.jsp_records_per_page;
          let page = this.arr.slice(start, end);
          for (let i = 0; i < page.length; i++) {
            let item = page[i];
            productDisplayNon.appendChild(item);
          }
        });
      }
    },
    filterTheColor(e) {
      for (let i = 0; i < this.posts.length; i++) {
        var product = document.querySelectorAll(".product-page");
        if (e.currentTarget.id == this.posts[i].color) {
          for (let j = 0; j < product.length; j++) {
            product[j].style = "display:none";
            if (product[j].classList[1] == e.currentTarget.id) {
              product[j].style = "display:flex";
            }
          }
        }
      }
    },
  },

  mounted() {
    this.createPagnition();
    this.ProductsColor();
  },

  components: { productVue },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
@use "../scss/Helpers/mixins" as *;

.exclusive-page {
  min-height: calc(100vh - 186px - 528px);
  display: flex;
  align-content: center;
  justify-content: center;
  .buyNowPage {
    display: none;
  }
  .filter {
    margin-top: 60px;

    .colors {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin: 5px;
    }
    .accordion {
      --bs-accordion-border-color: transparent;
    }
    .accordion-body {
      max-width: 200px;
    }
  }
  h1 {
    text-align: left;
    margin: 25px;
    font-size: 18px;
  }

  .row {
    margin-right: 0;
    > * {
      padding-right: 0;
      padding-left: 0;
    }
  }
  .container {
    display: flex;
    justify-content: space-around;
    padding-right: 0;

    .product-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @include breakpoints(large) {
        width: 1500px;
      }
      @include breakpoints(medium) {
        width: 1000px;
      }
      @include breakpoints(small) {
        width: 700px;
      }
      .product-page {
        display: flex;
        max-width: 300px;
        margin: 5px;
      }
    }
  }
  .pagintaion {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    .pagintaionElements {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }
  }
}
</style>
