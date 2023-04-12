const numReviewsInputs = document.querySelectorAll("input[type=number]");
const fiveStarRatingSpan = document.querySelector("#average");

function calculateFiveStarRating() {
  let totalRating = 0;
  let totalReviews = 0;
  numReviewsInputs.forEach((input) => {
    const numReviews = parseInt(input.value);
    const rating = parseInt(input.id.split("-")[2]); // get rating from id
    totalRating += numReviews * rating;
    totalReviews += numReviews;
  });
  const fiveStarRating = totalRating / totalReviews || 0; // prevent divide by zero
  fiveStarRatingSpan.textContent = fiveStarRating.toFixed(2); // round to two decimal places
}

numReviewsInputs.forEach((input) => {
  input.addEventListener("input", () => {
    calculateFiveStarRating();
  });
});

calculateFiveStarRating();
