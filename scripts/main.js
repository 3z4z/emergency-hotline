const cardsContainer = document.getElementById("cards-container");
const coinWrap = document.getElementById("coin-wrap");
const heartWrap = document.getElementById("heart-wrap");
let coinCount = parseInt(coinWrap.innerText);
let heartCount = parseInt(heartWrap.innerText);

const cards = [
  {
    title: "National Emergency Number",
    subtitle: "National Emergency",
    contactNo: "999",
    serviceType: "All",
    iconUrl: "assets/emergency.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Police Helpline Number",
    subtitle: "Police",
    contactNo: "999",
    serviceType: "Police",
    iconUrl: "assets/police.png",
    iconColor: "#DFEFFF",
  },
  {
    title: "Fire Service Number",
    subtitle: "Fire Service",
    contactNo: "999",
    serviceType: "Fire",
    iconUrl: "assets/fire-service.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Ambulance Service",
    subtitle: "Ambulance",
    contactNo: "1994-999999",
    serviceType: "Health",
    iconUrl: "assets/ambulance.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Women & Child Helpline",
    subtitle: "Women & Child Helpline",
    contactNo: "109",
    serviceType: "Help",
    iconUrl: "assets/emergency.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Anti-Corruption Helpline",
    subtitle: "Anti-Corruption",
    contactNo: "106",
    serviceType: "Govt.",
    iconUrl: "assets/emergency.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Electricity Helpline",
    subtitle: "Electricity Outage",
    contactNo: "16216",
    serviceType: "16216",
    iconUrl: "assets/emergency.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Brac Helpline",
    subtitle: "Brac",
    contactNo: "16445",
    serviceType: "NGO",
    iconUrl: "assets/brac.png",
    iconColor: "#FFE3E2",
  },
  {
    title: "Bangladesh Railway Helpline ",
    subtitle: "Bangladesh Railway",
    contactNo: "163",
    serviceType: "Travel",
    iconUrl: "assets/fire-service.png",
    iconColor: "#FFE3E2",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "bg-white", "card-md", "shadow-sm");
    cardElement.innerHTML = `
        <div class="card-body flex flex-col justify-between">
            <div>
                <div class="mb-4 flex justify-between items-start">
                    <figure class="w-14 h-14 flex items-center justify-center rounded-xl bg-[${card.iconColor}]">
                        <img src=${card.iconUrl} alt="police" class="w-8">
                    </figure>
                    <button class="cursor-pointer mark-fav-btn"><i class="bi bi-heart"></i></button>
                </div>
                <h2 class="card-title font-bold">${card.title}</h2>
                <h3 class="text-gray-600 mt-[-0.25rem]">${card.subtitle}</h3>
                </div>
                <div>
                <div class="mt-2 mb-3">
                    <h4 class="text-3xl font-bold contact-no">${card.contactNo}</h4>
                    <h5 class="font-medium px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full w-max">${card.serviceType}</h5>
                </div>
                <div class="grid grid-cols-2 card-actions">
                    <button class="btn cursor-pointer w-full copy-btn transition-all">
                        <i class="bi bi-copy"></i>
                        <span class="me-2 font-normal">Copy</span>
                    </button>
                    <button class="btn cursor-pointer w-full bg-[#00A63E] hover:bg-[#057e32] text-white call-btn">
                        <i class="bi bi-telephone"></i>
                        <span class="me-2 font-normal">Call</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    cardsContainer.appendChild(cardElement);
  }
  const callBtns = document.getElementsByClassName("call-btn");
  for (const btn of callBtns) {
    btn.addEventListener("click", function (e) {
      if (coinCount < 20) {
        alert("Coin is too low, recharge now!");
      } else {
        alert(
          `Calling... ${
            e.target.closest(".card-body").querySelector(".card-title")
              .innerText
          }: ${
            e.target.closest(".card-body").querySelector(".contact-no")
              .innerText
          }`
        );
        coinCount = coinCount - 20;
        coinWrap.innerText = coinCount;
      }
    });
  }
  const markFavBtns = document.getElementsByClassName("mark-fav-btn");
  for (const btn of markFavBtns) {
    btn.addEventListener("click", function (e) {
      e.target.classList.remove("bi-heart");
      e.target.classList.add("bi-heart-fill", "text-red-600");
      heartCount++;
      heartWrap.innerText = heartCount;
    });
  }
  const copyBtns = document.getElementsByClassName("copy-btn");
  for (const btn of copyBtns) {
    btn.addEventListener("click", function (e) {
      navigator.clipboard.writeText(
        e.target.closest(".card-body").querySelector(".contact-no").innerText
      );
      btn.classList.add("bg-[#006747]", "text-white");
      btn.innerHTML = `
        <i class="bi bi-check2-all"></i>
        <span class="me-2 font-normal">Copied</span>
      `;

      setTimeout(function () {
        btn.classList.remove("bg-[#006747]", "text-white");
        btn.innerHTML = `
          <i class="bi bi-copy"></i>
          <span class="me-2 font-normal">Copy</span>
        `;
      }, 1500);
    });
  }
});
