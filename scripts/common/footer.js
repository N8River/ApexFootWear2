document.querySelector(".footer-container").innerHTML = `
<div class="footer-wrap container">
  <div class="footer-grid-1">
    <h>VISIT STORE</h>
    <p>Sector 17, Chandigarh:</p>
    <p><a class="directions-link">Get Directions</a></p>
  </div>
  <div class="footer-grid-2">
    <p><a href="about.html">About Us</a></p>
    <p>FAQ</p>
    <p>Blogs</p>
  </div>
  <div class="footer-grid-3">
    <p>Track Order</p>
    <p>Return/Replace</p>
    <p>Returns/Replace Policy</p>
  </div>
  <div class="footer-grid-4">
    <h>CUSTOMER CARE</h>
    <p>Timings: 9 AM - 8 PM ( Mon - Sat )</p>
    <p>Instagram: @apexftwear</p>
    <p>WhatsApp: +91 98765 43210</p>
  </div>
  <div class="footer-signup">
    <h>SIGN UP AND SAVE</h>
    <p>
      Be the first to know about exclusive offers, latest trends & style tips!
    </p>
    <div class="newsletter">
      <input type="email" placeholder="Enter your email here" />
      <button type="submit" class="newsletter-btn">
        <img src="images/logos/svg/email.svg" />
      </button>
    </div>
  </div>
</div>
`;

document.querySelector(".footer-mobile").innerHTML = `
<div class="visit-store">
  <h
    >VISIT STORE
    <img class="visit-store-arrow" src="images/logos/svg/arrow-down-lightteal.svg" />
  </h>

  <div class="visit-store-drpdwn hide">
    <p>Sector 17, Chandigarh:</p>
    <p><a class="directions-link">Get Directions</a></p>
  </div>
</div>
<div class="customer-care">
  <h
    >CUSTOMER CARE
    <img class="customer-care-arrow" src="images/logos/svg/arrow-down-lightteal.svg" />
  </h>

  <div class="customer-care-drpdwn hide">
    <div class="return-replace">
      <p>Track Order</p>
      <p>Return/Replace</p>
      <p>Returns/Replace Policy</p>
    </div>
    <div class="contact-info">
      <p>Timings: 9 AM - 8 PM ( Mon - Sat )</p>
      <p>Instagram: @apexftwear</p>
      <p>WhatsApp: +91 98765 43210</p>
    </div>
  </div>
</div>
<div class="sign-up">
  <h
    >SIGN UP AND SAVE
    <img class="sign-up-arrow" src="images/logos/svg/arrow-down-lightteal.svg" />
  </h>

  <div class="sign-up-drpdwn hide">
    <p>
      Be the first to know about exclusive offers, latest trends & style
      tips!
    </p>
    <div class="newsletter">
      <input type="email" placeholder="Enter your email here" />
      <button type="submit" class="newsletter-btn">
        <img src="images/logos/svg/email.svg" />
      </button>
    </div>
  </div>
</div>
`;

const mobSignUp = document.querySelector(".sign-up");
const mobCustCare = document.querySelector(".customer-care");
const mobVisitStore = document.querySelector(".visit-store");

const mobSignUpDrpdwn = document.querySelector(".sign-up-drpdwn");
const mobCustCareDrpdwn = document.querySelector(".customer-care-drpdwn");
const mobVisitStoreDrpdwn = document.querySelector(".visit-store-drpdwn");

mobSignUp.addEventListener("click", () => {
  if (mobSignUpDrpdwn.classList.contains("hide")) {
    mobSignUpDrpdwn.classList.remove("hide");
    mobSignUpDrpdwn.classList.add("active");

    document.querySelector(".sign-up-arrow").style.transform = "rotate(180deg)";
  } else {
    mobSignUpDrpdwn.classList.remove("active");
    mobSignUpDrpdwn.classList.add("hide");

    document.querySelector(".sign-up-arrow").style.transform = "rotate(0deg)";
  }
});

mobCustCare.addEventListener("click", () => {
  if (mobCustCareDrpdwn.classList.contains("hide")) {
    mobCustCareDrpdwn.classList.remove("hide");
    mobCustCareDrpdwn.classList.add("active");

    document.querySelector(".customer-care-arrow").style.transform =
      "rotate(180deg)";
  } else {
    mobCustCareDrpdwn.classList.remove("active");
    mobCustCareDrpdwn.classList.add("hide");

    document.querySelector(".customer-care-arrow").style.transform =
      "rotate(0deg)";
  }
});

mobVisitStore.addEventListener("click", () => {
  if (mobVisitStoreDrpdwn.classList.contains("hide")) {
    mobVisitStoreDrpdwn.classList.remove("hide");
    mobVisitStoreDrpdwn.classList.add("active");

    document.querySelector(".visit-store-arrow").style.transform =
      "rotate(180deg)";
  } else {
    mobVisitStoreDrpdwn.classList.remove("active");
    mobVisitStoreDrpdwn.classList.add("hide");

    document.querySelector(".visit-store-arrow").style.transform =
      "rotate(0deg)";
  }
});
