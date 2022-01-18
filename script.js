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

const stateAbbreviations = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const totalPriceEl = document.querySelector(".total-price");
const sushiSetEl = document.querySelector(".sushi-set");
const descEl = document.querySelector(".desc");
const form = document.querySelector(".needs-validation");
const onSelect = () => {
  let value = document.querySelector("#selectSet").value;
  if (sushiSet.hasOwnProperty(value)) {
    totalPriceEl.innerHTML = "$" + sushiSet[value].price.toFixed(2);
    sushiSetEl.innerHTML = "Sushi Set: " + value.toUpperCase();
    descEl.innerHTML = sushiSet[value].desc;
  }
};

form.addEventListener("submit", e => {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add("was-validated");
});

const stateSelect = document.querySelector("#state");

stateAbbreviations.forEach(abbrev => {
  let option = document.createElement("option");
  option.value = abbrev;
  option.innerHTML = abbrev;
  stateSelect.appendChild(option);
});
