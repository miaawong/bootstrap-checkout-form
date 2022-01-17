const sushiSet = {
  a: {
    price: 31.0,
    desc: "Set A comes with miso soup and salad. Includes 6 pieces of crab nigiri and 1 spicy salmon roll",
  },
  b: {
    price: 32.5,
    desc: "Set B comes with miso soup and salad. Includes 2 pieces of ikura nigiri, 2 tuna, 2 salmon, and 1 spicy tuna roll",
  },
  c: {
    price: 29.0,
    desc: "Set C comes with miso soup and salad. Includes 1 spicy tuna roll, 1 salmon roll, and 1 avocado cucumber roll",
  },
  d: {
    price: 29.75,
    desc: "Set D comes with miso soup and salad. Includes 2 shrimp nigiri, 2 crab nigiri, 2 salmon nigri, and 1 crab roll",
  },
};

const totalPriceEl = document.querySelector(".total-price");
const sushiSetEl = document.querySelector(".sushi-set");
const descEl = document.querySelector(".desc");
const onSelect = () => {
  // probably better to have an id since you could have multiple selects
  let value = document.querySelector("#selectSet").value;
  // if object has property of value
  // return the value
  if (sushiSet.hasOwnProperty(value)) {
    totalPriceEl.innerHTML = "$" + sushiSet[value].price.toFixed(2);
    sushiSetEl.innerHTML = "Sushi Set: " + value.toUpperCase();
    descEl.innerHTML = sushiSet[value].desc;
  }
};
