<!-- eslint-disable prettier/prettier -->
<template>
  <div class="footer">
    <div class="container">
      <h1>Dress Up</h1>
      <div class="foo">
        <div class="info">
          <p>QUICK LINKS</p>
          <ul>
            <li>Hudson Blake</li>
            <li>Shipping + Returns</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Gift Cards</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div class="info">
          <p>ABOUT US</p>
          <ul>
            <li>Our Story + Mission</li>
            <li>Locations</li>
            <li>Collaborations</li>
            <li>Careers</li>
            <li>Interns</li>
            <li>Blog</li>
          </ul>
        </div>

        <div class="info">
          <p>SIGN UP AND SAVE</p>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <input type="text" placeholder="Enter your email" />
          <div class="center-icon">
            <i class="fa-brands fa-instagram"></i>

            <i class="fa-brands fa-facebook"></i>

            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <i class="fa-brands fa-cc-visa"></i>
      <i class="fa-brands fa-cc-apple-pay"></i>
      <i class="fa-brands fa-cc-amazon-pay"></i>
      <span>© 2022 Dress Up</span>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script lang="ts">
export default {
  name: "App_Footer",
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
@use "../../scss/Helpers/mixins" as *;
.footer {
  background-color: black;
  color: white;
  display: flex;
  letter-spacing: 2px;

  .container {
    h1 {
      text-align: left;
      opacity: 50%;
      letter-spacing: 8px;
      margin-bottom: 50px;
    }
    .foo {
      display: flex;
      justify-content: space-between;
      @include breakpoints(mobile) {
        flex-direction: column;
        align-items: center;
      }
      .info {
        text-align: left;
        p {
          opacity: 50%;
        }
        ul {
          padding: 0;
          li {
            opacity: 50%;
            line-height: 2;
          }
        }
      }
      input {
        border: none;
        padding: 7px 20px;
        width: 50%;
        background-color: transparent;
        border-bottom: 2px solid white;
        @include breakpoints(mobile) {
          width: 100%;
        }
        &:focus {
          outline: none;
        }
      }
      .center-icon {
        svg {
          margin: 20px 15px;
          font-size: 30px;
        }
      }
    }
    svg {
      font-size: 40px;
      margin: 20px;
    }
    span {
      display: block;
    }
  }
}
</style>
