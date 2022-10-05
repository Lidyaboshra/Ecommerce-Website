<template>
  <div class="body-page">
    <div id="back">
      <!-- <img src="../../assets/WESTERN_MAIN_3024x.webp" alt="" />
      <img src="../../assets/EXCLUSIVES_main_3024x.webp" alt="" /> -->
      <!-- <img v-if="selected" :src="selected" alt="" /> -->
      <div class="np-color-preview">
        <img src="../assets/EXCLUSIVES_main_3024x.webp" alt="" srcset="" />
      </div>
    </div>

    <div class="second-section">
      <h2>Women's Dress Boutique</h2>
      <div class="boxes">
        <div class="box">
          <img
            src="../assets/7F8E20C3-F9E3-4419-8EDA-0D582FDF1BBF_360x.webp"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="../assets/8273D5C1-FD21-4EA6-9B26-72A01CB8C2BC_360x.webp"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="../assets/7F8E20C3-F9E3-4419-8EDA-0D582FDF1BBF_360x.webp"
            alt=""
          />
        </div>
        <div class="box">
          <img
            src="../assets/8273D5C1-FD21-4EA6-9B26-72A01CB8C2BC_360x.webp"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="section-four">
      <div class="top">
        <p>
          BUY ONLINE + PICK UP IN STORE- select “store pick up” at checkout +
          pick up same day!
        </p>
      </div>
      <div class="cards">
        <div class="two-cards">
          <div class="card">
            <img
              src="../assets/85B5DD9C-9698-4A43-842F-FB763ED3B675_900x.webp"
              alt=""
            />
          </div>
          <div class="card">
            <img
              src="../assets/85B5DD9C-9698-4A43-842F-FB763ED3B675_900x.webp"
              alt=""
            />
          </div>
        </div>

        <div class="two-cards">
          <div class="card">
            <img
              src="../assets/85B5DD9C-9698-4A43-842F-FB763ED3B675_900x.webp"
              alt=""
            />
          </div>
          <div class="card">
            <img
              src="../assets/85B5DD9C-9698-4A43-842F-FB763ED3B675_900x.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="gift">
        <div class="top">
          <p>shop new collections 2-3x weekly</p>
          <button>SHOP OUR LATEST RELEASE</button>
        </div>
      </div>
      <div class="cards new-collection">
        <div class="two-cards">
          <div class="card">
            <img src="../assets/download.webp" alt="" />
          </div>
          <div class="card">
            <img src="../assets/download.webp" alt="" />
          </div>
        </div>

        <div class="two-cards">
          <div class="card">
            <img src="../assets/download.webp" alt="" />
          </div>
          <div class="card">
            <img src="../assets/download.webp" alt="" />
          </div>
        </div>
      </div>
      <div class="gift">
        <div class="top">
          <p>BUY HER A GIFT CARD</p>
          <button>SHOP GIFT CARDS</button>
        </div>
      </div>
    </div>
    <div class="second-section button-quick">
      <div class="boxes">
        <div class="box">
          <img src="../assets/shopdressup_star_sneakers-30_360x.webp" alt="" />
        </div>
        <div class="box">
          <img src="../assets/shopdressup_star_sneakers-30_360x.webp" alt="" />
        </div>
        <div class="box">
          <img src="../assets/shopdressup_star_sneakers-30_360x.webp" alt="" />
        </div>
        <div class="box">
          <img src="../assets/shopdressup_star_sneakers-30_360x.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="before-footer">
      <div class="container">
        <h3>
          Trendy Clothing & Accessories at Dress Up - An Online Dress Boutique
        </h3>
        <p>
          Dress Up is a women's clothing store with new trendy and affordable
          arrivals dropping 2-3 times weekly. Shop the latest trends in women's
          fashion<a href="#"> dresses</a>, <a href="#">tops</a>,
          <a href="#">sweaters</a>, <a href="#">skirts</a>,<a href="#">jeans</a>
          , <a href="#">accessories</a> & more. At Dress Up, you can shop at one
          of the 16 <a href="#">locations</a> across the southeast, or online
          24/7 at
          <a href="#"> ShopDressup.com.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default {
  data: function () {
    return {
      images: [
        " https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg",
        "https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg",
      ],
      selected: "",
    };
  },
  // created() {
  //   const idx = Math.floor(Math.random() * this.images.length);
  //   this.selectedImage = this.images[idx];
  // },
  methods: {
    randomPhoto(imgs) {
      return imgs[Math.floor(Math.random() * imgs.length)];
    },
  },
  created() {
    this.selected = this.randomPhoto(this.images);
  },
};
</script>

<style lang="scss" scoped>
@use "../scss/Helpers/mixins" as *;
.body-page {
  #back {
    img {
      width: 100%;
      height: calc(100vh - 188px);
      object-fit: cover;
    }
  }
  .second-section {
    h2 {
      margin-bottom: 100px;
    }
    .boxes {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 100px;
      position: relative;
      overflow: hidden;

      .box {
        position: relative;
        overflow: hidden;
        max-width: 360px;
        &::before {
          @include overlay(#eee, 0.1);
        }
        &::after {
          content: "Dresses";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          overflow: hidden;
          color: white;
          font-size: 20px;
          letter-spacing: 2px;
        }
        img {
          transition: 0.5s;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .section-four {
    .top {
      padding: 20px 0 32px;
    }
    .cards {
      display: flex;
      width: 100%;
      .two-cards {
        width: 100%;
        .card {
          margin: 5px;
          position: relative;
          &:before {
            content: "SHOP PRE-FULL LOOKS";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            color: white;
            font-size: 18px;
            border: 2px solid white;
            padding: 8px 30px;
            letter-spacing: 2px;
            cursor: pointer;
            @include breakpoints(mobile) {
              font-size: 9px;
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .gift {
      .top {
        display: flex;
        justify-content: center;
        background-color: #fcf8f6;
        color: black;
        font-size: 18px;
        height: auto;
        padding: 20px 0 20px;
        button {
          margin-left: 20px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          background: transparent;
          border-color: #f4e7e0;
        }
        p {
          margin: 0;
        }
      }
    }
    .new-collection {
      .card {
        &:before {
          content: "DU EXCLUSIVE " !important;
        }
      }
    }
  }
  .button-quick {
    .box {
      transition: 0.5s;
      &::after {
        content: "Quick View" !important;
        bottom: 0 !important;
        top: auto !important;
        color: black !important;
        background-color: white;
        padding: 5px;
        width: 90%;
        display: none;
        transition: 0.5s;
      }
      &:hover {
        &::after {
          display: block;
        }
      }
    }
  }
  .before-footer {
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 15px;
      letter-spacing: 2px;
      a {
        color: black;
      }
    }
  }
}
</style>
