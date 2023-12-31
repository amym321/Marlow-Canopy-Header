// tagetting set
var urlCheck = window.location.pathname;
if (urlCheck.includes("bundle-save") || urlCheck.includes("marlow-tampons")) {
  document.querySelector("body").classList.add("bundle-marlow");

  function live(selector, event, callback, context) {
    /****Helper Functions****/
    // helper for enabling IE 8 event bindings
    function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent("on" + type, handler);
      else el.addEventListener(type, handler);
    }
    // live binding helper using matchesSelector
    function live(selector, event, callback, context) {
      addEvent(context || document, event, (e) => {
        let found,
          el = e.target || e.srcElement;
        while (
          el &&
          el.matches &&
          el !== context &&
          !(found = el.matches(selector))
        )
          el = el.parentElement;
        if (found) callback.call(el, e);
      });
    }
    live(selector, event, callback, context);
  }

  // remove class function
  function removeClassBySelectors(className, selectors) {
    const elements = document.querySelectorAll(selectors);

    elements.forEach((element) => {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    });
  }

  function addhideClass() {
    document
      .querySelectorAll(".description-wrapper .varient-description")
      .forEach(function (el) {
        el.classList.add("hide");
      });
  }

  // var varientText;
  document.querySelectorAll(".varient").forEach(function (el) {
    el.addEventListener("click", function () {
      removeClassBySelectors("active", ".varient");
      this.classList.add("active");
    });
  });

  function addClickListener(varientSelector, dropbtnSelector) {
    document.querySelectorAll(varientSelector).forEach(function (el) {
      el.addEventListener("click", function () {
        var checkClass = this.getAttribute("class").split(" ");

        document.querySelectorAll(dropbtnSelector).forEach(function (dropbtn) {
          checkClass.forEach(function (className) {
            if (dropbtn.textContent.includes(className)) {
              dropbtn.closest(".input").click();
            }
          });
        });
      });
    });
  }

  // by default one time click

  setTimeout(() => {
    document.querySelector(".smartrr-otp.smartrr-grp-input label").click();
    document.querySelector(".varient-wrapper .varient.Light").click();
    


  }, 800);

   setTimeout(() => {
  window.scrollTo(0, 0);
  },1000);



  
  //    // For .varient-wrapper.subscription .varient elements
  addClickListener(
    ".varient-wrapper.subscription .varient",
    "#dropdownSelections .dropdown-select:not(.hide) label > div"
  );

  setTimeout(() => {
  //   // For .varient-wrapper.bm-one-time .varient elements
    addClickListener(
      ".varient-wrapper.bm-one-time .varient",
      "#dropdownSelections .dropdown-select:not(.hide) label > div"
    );
  }, 1000);

  live(".scroll-link", "click", function (el) {
    if (document.querySelector("#station-tabs-tab_ht-i1-t11:not(.is-active)")) {
      setTimeout(() => {
        document.querySelector("#station-tabs-tab_ht-i1-t11").click();
      }, 500);
    }

    if (document.querySelector("#station-tabs-tab_ht-i1-t17:not(.is-active)")) {
      setTimeout(() => {
        document.querySelector("#station-tabs-tab_ht-i1-t17").click();
      }, 500);
    }
  });
  

  // // Find the element to scroll to
  var targetElement = document.querySelector(".quantity");

  // Find the element that triggers the scroll
  var scrollLink = document.querySelector(".scroll-link");

  // Add a click event listener to the scrollLink
  scrollLink.addEventListener("click", function (event) {
    // Scroll to the target element, stopping a bit before the top
    targetElement.scrollIntoView({
      behavior: "smooth", // Use smooth scrolling
      inline: "nearest", // Keep the target element as close to the vertical center as possible
    });
  });

  function chosseOption() {
    var controlOption = document.querySelectorAll(
      "#dropdownSelections .dropdown-select:not(.hide) label"
    );
    var varient = document.querySelectorAll(".varient-wrapper .varient");
    varient.forEach(function (el) {
      if (el.classList.contains("active")) {
        var id = el.getAttribute("data-id");
        controlOption[id].click();
        if (el.closest(".bm-one-time")) {
          detailText(el, ".bm-description-wrapper.otp .varient-description");
        }
        if (el.closest(".subscription")) {
          detailText(el, ".bm-description-wrapper.sub .varient-description");
        }
      }
    });
  }

  function detailText($this, params) {
    var getVarient = $this.getAttribute("data-id");
    document.querySelectorAll(params).forEach(function (el) {
      if (el.getAttribute("data-id") == getVarient) {
        addhideClass();
        el.classList.remove("hide");
      }
    });
  }

  live(".smartrr-otp.smartrr-grp-input label", "click", function () {
    document
      .querySelector(".varient-wrapper.data-smartrr-label-sub")
      .classList.add("bm-one-time");
    if (
      document
        .querySelector(".varient-wrapper .varient.Combo")
        .classList.contains("active")
    ) {
      document.querySelector(".bm-one-time .varient.Light").click();
    }
    document
      .querySelector(".varient-wrapper.data-smartrr-label-sub")
      .classList.remove("subscription");

    document
      .querySelector(".bm-description-wrapper.sub")
      .classList.add("bm-hide");
    document
      .querySelector(".bm-description-wrapper.otp ")
      .classList.remove("bm-hide");

    chosseOption();
  });

  live('.smartrr-grp-input[value="sub"] label', "click", function () {
    document
      .querySelector(".varient-wrapper.data-smartrr-label-sub")
      .classList.remove("bm-one-time");
    document
      .querySelector(".varient-wrapper.data-smartrr-label-sub")
      .classList.add("subscription");

    document
      .querySelector(".bm-description-wrapper.sub")
      .classList.remove("bm-hide");
    document
      .querySelector(".bm-description-wrapper.otp ")
      .classList.add("bm-hide");

    chosseOption();
  });

  live(".varient-wrapper .varient", "click", function (el) {
    detailText(this, ".bm-description-wrapper.sub .varient-description");
  });

  live(".bm-one-time .varient ", "click", function (el) {
    detailText(this, ".bm-description-wrapper.otp .varient-description");
  });

  live(".bm-one-time .Combo", "click", function () {
    document.querySelector('.smartrr-grp-input[value="sub"] label').click();
  });

  // for varient image
  document
    .querySelectorAll(
      ".smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div label"
    )
    .forEach(function (el) {
      el.addEventListener("click", function () {
        removeClassBySelectors(
          "color-active",
          ".smartrr-purchase-options div[data-smartrr-selling-plan-groups] > div"
        );
        this.closest(".smartrr-grp-input").classList.add("color-active");
      });
    });
}
// end targetting
