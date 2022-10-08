<!-- eslint-disable prettier/prettier -->
<template>
  <div class="product-page">
    <div class="box">
      <div class="img">
        <img :src="image" class="productImage" />

        <button class="btn btn-primary" type="button" @click="showDetails">
          Quick View
        </button>

        <div
          class="offcanvas offcanvas-start centerCard"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="all">
            <div class="left">
              <div class="availableImage">
                <img :src="image" @click="displayImageClickedItInCart" />
                <img :src="image" @click="displayImageClickedItInCart" />
                <img :src="image" @click="displayImageClickedItInCart" />
              </div>
              <div class="displayImages">
                <img :src="image" />
              </div>
            </div>
            <div class="right">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  {{ title }}
                </h5>

                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  @click="hideDetails"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="price">{{ price }}$</div>
                <div class="color">
                  Color -White
                  <span
                    class="b-color"
                    v-bind:style="{ backgroundColor: color }"
                  ></span>
                </div>
                <div class="size">
                  Size
                  <div class="sizes">
                    <button class="b-size" @click="changeClickable">
                      Small
                    </button>
                    <button class="b-size" @click="changeClickable">
                      Medium
                    </button>
                    <button class="b-size" @click="changeClickable">
                      Large
                    </button>
                    <button class="b-size" @click="changeClickable">
                      X-Large
                    </button>
                    <button class="b-size" @click="changeClickable">
                      XX-Large
                    </button>
                  </div>
                  <div class="available">
                    <span v-if="numberInStore < 10"
                      >! Available {{ numberInStore }} Only In Store</span
                    >
                  </div>
                </div>
                <div class="addToCard">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    @click="showCard"
                  >
                    Add To Card
                  </button>
                </div>
                <div class="buyNow">
                  <button type="button" class="btn btn-secondary">
                    Buy It Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="addToCard">
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Cart</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                @click="closeCard"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="product-buy">
                <div class="imageOfProduct">
                  <img :src="image" />
                </div>
                <div class="detailsOfProduct">
                  <p>{{ title }}</p>
                  <p>
                    Color: <span>{{ color }}</span>
                  </p>
                  <p>
                    Size: <span>{{ theSize }}</span>
                  </p>
                  <div class="howMuch">
                    <div class="count">
                      <div class="decrease" @click="decreaseProductNumber">
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <span>{{ count }}</span>
                      <div class="increase" @click="icreaseProductNumber">
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div class="totalPrice">$ {{ totalPrice.toFixed(2) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ####### -->
      </div>

      <div class="info">
        <p>{{ title }}</p>
        <span>{{ price }}$</span>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  props: [
    "id",
    "title",
    "description",
    "price",
    "image",
    "length",
    "color",
    "numberInStore",
  ],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "product",
  data: function () {
    return {
      clicked: false,
      theSize: "Your Didn't Chose Size",
      count: 1,
      totalPrice: this.price,
    };
  },
  methods: {
    changeClickable(e) {
      let buttons = e.currentTarget.parentElement.children;
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked");
      }
      e.currentTarget.classList.add("clicked");
      this.theSize = e.currentTarget.textContent;
    },
    showDetails(e) {
      let allProduct = document.querySelectorAll(".product-page");
      for (let i = 0; i < allProduct.length; i++) {
        allProduct[i].children[0].children[0].children[2].classList.remove(
          "show"
        );
      }
      e.currentTarget.parentElement.children[2].classList.add("show");
    },
    hideDetails(e) {
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove(
        "show"
      );
    },
    showCard(e) {
      let allProduct = document.querySelectorAll(".product-page");
      for (let i = 0; i < allProduct.length; i++) {
        allProduct[
          i
        ].children[0].children[0].children[3].children[0].classList.remove(
          "show"
        );
      }

      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].children[0].classList.add(
        "show"
      );

      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
        "show"
      );
      let redCircle = document.querySelector(".rounded-circle");
      redCircle.style.display = "block";
    },
    closeCard(e) {
      e.currentTarget.parentElement.parentElement.classList.remove("show");
    },
    icreaseProductNumber() {
      this.count++;
      var current = this.count;
      this.totalPrice = current * this.price;
    },
    decreaseProductNumber(e) {
      if (!this.count == 0) {
        this.count--;
        var current = this.count;
        this.totalPrice = current * this.price;
      }
      if (this.totalPrice === 0) {
        let redCircle = document.querySelector(".rounded-circle");
        redCircle.style.display = "none";
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
      }
    },
    calcTotalPrice() {
      var current = this.count;
      this.totalPrice = current * this.price;
    },
    displayImageClickedItInCart(e) {
      console.log(e.currentTarget);
    },
    // backVisibilityShow(e) {
    //   console.log(e.currentTarget);
    //   let backFace = document.querySelectorAll(".product-page");

    //   backFace.forEach((ele) => {
    //     ele.style = "display:none";
    //   });
    //   let filterHidden = document.querySelector(".filter");
    //   filterHidden.style = "display:none";
    //   let infoHidden = document.querySelector(".information");
    //   infoHidden.style = "display:none";
    //   let frontFace = document.querySelector(".buyNowPage");
    //   frontFace.style = "display:block";
    // },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
@use "../../scss/Helpers/mixins" as *;
.product-page {
  .box {
    margin-bottom: 100px;
    .img {
      border: 2px solid #eee;
      height: 100%;
      display: flex;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
      }
      .productImage {
        transition: 0.5s;
        object-fit: contain;
      }
      .btn.btn-primary {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px;
        width: 90%;
        margin-bottom: 10px;
        display: none;
        transition: 0.5s;
        background: black;
        color: white;
        border: none;
      }

      &:hover {
        .productImage {
          transform: scale(1.2);
        }
        .btn.btn-primary {
          display: block;
        }
      }
      .centerCard {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 50px;
        height: fit-content;
        padding: 100px;
        @include breakpoints(mobile) {
          padding-left: 0px;
          padding-right: 0px;
          margin: 0px;
        }
        @include breakpoints(small) {
          padding-left: 0px;
          padding-right: 0px;
          margin: 0px;
        }
      }
      .price {
        margin: 10px;
        border-bottom: 2px solid #eee;
        text-align: left;
        padding: 6px;
      }
      .color {
        text-align: left;
        margin: 10px;
        span {
          width: 40px;
          height: 40px;
          border: 2px solid black;
          border-radius: 50%;
          display: block;
          margin-top: 11px;
        }
      }
      .size {
        text-align: left;
        margin: 10px;
        .sizes {
          display: flex;
          @include breakpoints(mobile) {
            flex-wrap: wrap;
            gap: 12px;
          }
          @include breakpoints(small) {
            flex-wrap: wrap;
            gap: 12px;
          }
          button {
            display: block;
            margin-right: 2px;
            border: 2px solid #eee;
            padding: 5px;
            cursor: pointer;
            &.clicked {
              border: 2px solid black;
            }
            &.notClicked {
              border: 2px solid #eee;
            }
          }
        }
      }
      .available {
        span {
          color: red;
          margin-top: 10px;
        }
      }
      .all {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        overflow-y: auto;
        @include breakpoints(mobile) {
          flex-wrap: wrap;
        }
        @include breakpoints(small) {
          flex-wrap: wrap;
        }
        @include breakpoints(medium) {
          flex-wrap: wrap;
        }

        .left {
          display: flex;
          align-content: center;
          justify-content: center;
          align-items: center;
          margin: 15px;
          @include breakpoints(mobile) {
            flex-wrap: wrap;
          }
          @include breakpoints(small) {
            flex-wrap: wrap;
          }
          .availableImage {
            img {
              width: 100px;
              border: 2px solid #eee;
              margin-bottom: 5px;
              padding: 5px;
              cursor: pointer;
              @include breakpoints(mobile) {
                display: none;
              }
              @include breakpoints(small) {
                display: none;
              }
            }
          }
          .displayImages {
            img {
              width: 300px;
              border: 2px solid #eee;
              margin: 20px 26px 26px;
              padding: 10px;
              cursor: pointer;
              @include breakpoints(mobile) {
                width: 140px;
                margin: 0;
              }
              @include breakpoints(small) {
                width: 300px;
                margin: 0;
              }
            }
          }
        }
      }
      .offcanvas {
        &.offcanvas-start {
          width: auto;
          box-shadow: 0 15px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .offcanvas-header {
          align-items: baseline;
          .btn-close {
            margin-left: 30px;
          }
        }
      }
      .addToCard {
        button {
          width: 100%;
          background-color: transparent;
          color: black;
          &:hover {
            color: #706f6f;
          }
        }
        .product-buy {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          .imageOfProduct {
            width: 140px;
            margin-right: 10px;
          }
        }
        .detailsOfProduct {
          width: 100%;
          p:not(:nth-child(1)) {
            font-weight: bold;
            span {
              font-weight: normal;
            }
          }
          .howMuch {
            display: flex;
            justify-content: space-between;
            align-items: center;
            justify-content: space-evenly;

            .count {
              display: flex;
              justify-content: center;
              align-items: center;
              align-content: center;
              border: 2px solid #eee;
              padding: 0px 5px;
              span {
                padding: 2px 10px;
                border: 2px solid #eee;
              }
            }
            .decrease {
              svg {
                margin-right: 8px;
                padding: 5px 7px;
                &:hover {
                  color: white;
                  background-color: black;
                }
              }
            }
            .increase {
              svg {
                margin-left: 8px;
                padding: 5px 7px;
                &:hover {
                  color: white;
                  background-color: black;
                }
              }
            }
          }
        }
      }
      .buyNow {
        button {
          margin-top: 5px;
          width: 100%;
          color: black;
          background-color: transparent;
          border: none;
          &:hover {
            color: #706f6f;
          }
        }
      }
    }
    .info {
      font-size: 15px;
    }
  }
  .showDetails {
    visibility: visible;
  }
}
</style>
