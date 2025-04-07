const cardData = [
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
];


const heroContainer = document.querySelector(".hero-container");

cardData.map((card) => {
  const cardElement = document.createElement("div");
  const cardContent = `
        <div class="row slider">
                  <div class="col-md-12 col-lg-7 left">
                      <h1 class="fw-bold w-100 fw-semibold">${card.title}<span>${card.spantitle}</span></h1>
                      <p class="pb-2 pt-2 fw-normal">${card.description}</p>
                      <button class="mybtn register">Register</button>

                  </div>
                  <div class="slider-img col-md-12 col-lg-5 pt-xs-0">
                      <img src="${card.imageUrl}" alt="" id="my-Image mx-auto">
                  </div>
              </div>
      `;
  cardElement.innerHTML = cardContent;
  heroContainer.appendChild(cardElement);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector(".navbar-collapse");

  toggler.addEventListener("click", function () {
    menu.classList.toggle("show"); // Toggle the 'show' class
  });
});
