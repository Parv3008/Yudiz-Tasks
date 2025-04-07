let lastScrollY = 0;
window.addEventListener("scroll", function () {
    const topNav = document.querySelector(".top-nav");
    const navbar = document.querySelector(".navbar");
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        topNav.classList.add("hidden");
        navbar.classList.add("sticky");
    } else {
        topNav.classList.remove("hidden");
        navbar.classList.remove("sticky");
    }

    lastScrollY = currentScrollY;
});

const services = [
  {
    id: 1,
    img1: "assest/img/service0.jpg",
    img2: "assest/img/p1.svg",
    title: "Plumbing Installation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    id: 2,
    img1: "assest/img/service1.jpg",
    img2: "assest/img/p2.svg",
    title: "General Plumbing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cursus viverra est tristique vitae velit odio in. Velit vestibulum porttitor vel lectus velit condimentum.",
  },
  {
    id: 3,
    img1: "assest/img/service2.jpg",
    img2: "assest/img/p3.svg",
    title: "Plumbing Maintanence ",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum amet et interdum donec integer volutpat eleifend. Elit vel nunc accumsan massa sit diam. Aliquam.",
  },
  {
    id: 4,
    img1: "assest/img/service3.jpg",
    img2: "assest/img/p4.svg",
    title: "Fixing Pipes",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies a libero mattis leo hendrerit nibh dolor. Condimentum neque in ipsum laoreet ac. Morbi suspendisse.",
  },
  {
    id: 5,
    img1: "assest/img/service4.jpg",
    img2: "assest/img/p5.svg",
    title: "Plumbing Line Consultation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar aliquet diam id sed egestas integer. At nunc aliquam cursus fames. Est in semper duis at.",
  },
  {
    id: 6,
    img1: "assest/img/service5.jpg",
    img2: "assest/img/p6.svg",
    title: "Drain Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar aliquet diam id sed egestas integer. At nunc aliquam cursus fames. Est in semper duis at.",
  },
];

const servicecontainer = document.getElementsByClassName("card-row")[0];

const service_content = services
  .map(
    (item) =>
      `<div class="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div class="card service-card">
                            <img src="${item.img1}" alt="">
                            <div class="card-body">
                                <img src="${item.img2}" alt="">
                                <h4 class="card-title">${item.title}</h4>
                                <p class="card-text">${item.description}</p>
                                <a href="#" class="">Learn More <img src="assest/img/Right Arrow.svg" alt=""></a>
                            </div>
                        </div>
                    </div>`
  )
  .join("");

servicecontainer.innerHTML = service_content;

const price = [
  {
    id: 1,
    title: "Residential Plumbing",
    subtitle: "$199",
    feature1: "Free Diagnostics & Consultation",
    feature2: "Plumbing Repairs",
    feature3: "Emergency Plumbing",
    feature4: "Sewer & Drain Cleaning",
    feature5: "Trenchless Sewer Replacement",
    feature6: "Heater Installation & Replacement, Repair",
  },
  {
    id: 2,
    title: "Commercial Plumbing",
    subtitle: "$499",
    feature1: "Installations, Repairs, And Replacements",
    feature2: "Leak Detection And Repair",
    feature3: "Water & Gas Piping",
    feature4: "Drain Cleaning & Sewer Service",
    feature5: "Plumbing Inspections & Maintenance",
    feature6: "Heater Installation & Replacement, Repair",
  },
  {
    id: 3,
    title: "Service & Repair",
    subtitle: "$399",
    feature1: "Replace Spare Parts",
    feature2: "Maintenance Services",
    feature3: "Water Heater Repair Services",
    feature4: "Free Diagnostics & Consultation",
    feature5: "Toilet Repair, Sewer Repair & Leak Repair",
    feature6: "Heater Installation & Replacement, Repair",
  },
];

const priceplan = document.getElementsByClassName("plan-row")[0];
const plans = price
  .map(
    (item) =>
      `<div class="col-lg-4 col-md-12">
                        <div class="card pricing-card">
                            <div class="plan-card">
                                <h4 class="card-title">${item.title}</h4>
                                <h1 class="card-subtitle mb-2">${item.subtitle}<span>/Month</span></h1>
                                <ul class="">
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature1}</li>
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature2}</li>
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature3}</li>
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature4}</li>
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature5}</li>
                                    <li><img src="assest/img/Check.svg" alt=""> ${item.feature6}</li>
                                </ul>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>`
  )
  .join("");

priceplan.innerHTML = plans;

// const recentwork = [
//   {
//     id: 1,
//     img: "assest/img/recent-work1.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
//   {
//     id: 2,
//     img: "assest/img/recent-work2.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
//   {
//     id: 3,
//     img: "assest/img/recent-work3.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
//   {
//     id: 4,
//     img: "assest/img/recent-work4.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
//   {
//     id: 5,
//     img: "assest/img/recent-work5.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
//   {
//     id: 6,
//     img: "assest/img/recent-work6.jpg",
//     title: "Water Line Repair",
//     subtitle: "Plumbing",
//   },
// ];

// const recent = document.getElementsByClassName("recent-work-row")[0];
// const work = recentwork
//   .map(
//     (item) =>
//       `<div class="col-md-4 col-sm-12 recent-work-img">
//                         <img src="${item.img}" alt="">
//                         <div class="middle">
//                             <h4 class="text">${item.title}</h4>
//                             <p class="">${item.subtitle}</p>
//                         </div>
//                     </div>`
//   )
//   .join("");

// recent.innerHTML = work;

const service_year = [
  {
    id: 1,
    img: "assest/img/service-year1.svg",
    numbers: "1200",
    text: "Happy Customers",
  },
  {
    id: 2,
    img: "assest/img/service-year2.svg",
    numbers: "8714",
    text: "Happy Customers",
  },
  {
    id: 3,
    img: "assest/img/service-year3.svg",
    numbers: "1500",
    text: "Happy Customers",
  },
  {
    id: 4,
    img: "assest/img/service-year4.svg",
    numbers: "500",
    text: "Happy Customers",
  },
];

const year = document.getElementsByClassName("service-year-row")[0];
const service_container = service_year
  .map(
    (item) =>
      `<div class="service-content col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div class="content-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="content-text">
                            <h2>${item.numbers}<span>+</span></h2>
                            <p>${item.text}</p>
                        </div>
                    </div>`
  )
  .join("");

year.innerHTML = service_container;

const testimoial = [
  {
    id: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img1.jpg",
    name: "Michael Adam",
    post: "Hotel Manager",
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img2.jpg",
    name: "Wade Warren",
    post: "Hotel Manager",
  },
  {
    id: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img3.jpg",
    name: "Albert Flores",
    post: "President of Sales",
  },
  {
    id: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img1.jpg",
    name: "Michael Adam",
    post: "Hotel Manager",
  },
  {
    id: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img2.jpg",
    name: "Wade Warren",
    post: "Hotel Manager",
  },
  {
    id: 6,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque.",
    img: "assest/img/client-img3.jpg",
    name: "Albert Flores",
    post: "President of Sales",
  },
];

const testimoial_content = document.getElementsByClassName("your-class")[0];
console.log(testimoial_content);

const testimoial_container = testimoial
  .map(
    (item) =>
      `<div class="testimonial-card">
                        <div class="rating d-flex gap-2">
                            <img src="assest/img/Star.svg" alt="">
                            <img src="assest/img/Star.svg" alt="">
                            <img src="assest/img/Star.svg" alt="">
                            <img src="assest/img/Star.svg" alt="">
                            <img src="assest/img/Star.svg" alt="">
                        </div>
                        <div class="test-body">
                            <p>${item.review}</p>
                        </div>
                        <div class="client-info d-flex align-items-center">
                            <img src="${item.img}" alt="">
                            <div class="client-info-text">
                                <h4>${item.name}</h4>
                                <p>${item.post}</p>
                            </div>
                        </div>
                    </div>`
  )
  .join("");

testimoial_content.innerHTML = testimoial_container;

const blog = [
  {
    id: 1,
    img1: "assest/img/blog1.jpg",
    title: "The Do’s and Don’ts of Fixing a Blocked Drain",
    img2: "assest/img/Calendar.svg",
    date: "January 4, 2022",
    subtitle:
      "The Do’s and Don’ts of Fixing a Blocked Drain Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    img1: "assest/img/blog2.jpg",
    title: "8 Most Common Plumbing Problems",
    img2: "assest/img/Calendar.svg",
    date: "January 4, 2022",
    subtitle:
      "The Do’s and Don’ts of Fixing a Blocked Drain Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    img1: "assest/img/blog3.jpg",
    title: "The Best Water Filters Of Our Choice",
    img2: "assest/img/Calendar.svg",
    date: "January 4, 2022",
    subtitle:
      "The Do’s and Don’ts of Fixing a Blocked Drain Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    img1: "assest/img/blog4.jpg",
    title: "General Maintenance For Your Toilet",
    img2: "assest/img/Calendar.svg",
    date: "January 4, 2022",
    subtitle:
      "The Do’s and Don’ts of Fixing a Blocked Drain Lorem ipsum dolor sit amet consectetur",
  },
];

const blog_content = document.getElementsByClassName("blog-row")[0];
const blog_container = blog
  .map(
    (item) =>
      `<div class="col-lg-6 col-md-12">
                        <div class="blog-card">
                            <div class="row g-0">
                                <div class="col-md-5 col-sm-12">
                                    <img src="${item.img1}" alt="" class="blog-img h-100 w-100">
                                    <div class="blog-img-text text-center">
                                        <p>Tips & Tricks</p>
                                    </div>
                                </div>
                                <div class="col-md-7 col-sm-12">
                                    <div class="blog-card-text">
                                        <h4>${item.title}</h4>
                                        <span><img src="${item.img2}" alt=""> ${item.date}</span>
                                        <p>${item.subtitle}</p>
                                        <a href="#">Read More <img src="assest/img/Arrow-Up-Right blue.svg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
  )
  .join("");

blog_content.innerHTML = blog_container;
