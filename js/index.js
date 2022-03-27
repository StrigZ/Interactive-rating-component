//initializing variable
let selectedSpan = $("#selected");
let thanksCard = $("#thanks-card");
let rateCard = $("#rate-card");
let selectedValue;
let canSubmit = true;

//onclick styles
$("label").click(function (e) {
  e.preventDefault();

  if (!this.firstElementChild.checked === true) {
    this.firstElementChild.checked = true;
    this.firstElementChild.setAttribute("checked", "checked");
  }
});

//hover styles
$(".checkbox").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//on submit actions
$("form").submit(function (e) {
  e.preventDefault();

  //If the rating is not selected, prevent further submissions
  //and add error <p>
  if (!selectedValue && canSubmit) {
    canSubmit = false;
    $("form").append(`<p class='error'>Please rate us 😊</p>`);
  }

  selectedValue = $("input:checked")[0].value;
  //get value of the checked input and insert it into span
  $(".thanks p").append(`You selected ${selectedValue} out of 5`);

  //hide rate-card, show thanks-card
  rateCard.addClass("hidden");
  thanksCard.removeClass("hidden");
});
