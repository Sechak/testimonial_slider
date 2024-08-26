const carouselImages = document.querySelectorAll(".carousel-image");
const contentTitle = document.querySelector(".carousel-content h2");
const contentText = document.querySelector(
  ".carousel-content p:nth-of-type(1)"
);
const contentVillage = document.querySelector(
  ".carousel-content p:nth-of-type(2)"
);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const contentlink = document.querySelector(".carousel-button");
const contentcrop_image = document.querySelector(".crop-image");

const data = [
  {
    img: "imgs/Sambhu.webp",
    name: "Sambhu Singh",
    statement:
      "“Fasal Amrit and my crops survived for longer periods without water. I will definitely use it again in the future.”",
    village: "Village: Bansiwara",
    crop: "Crop: Maize",
    cropImage: '<img src="imgs/maize.webp" />',
    link: '<a href="https://www.youtube.com/watch?v=-LB2jzzVDb0&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=27" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/Sohan.webp",
    name: "Sohan Singh",
    statement:
      "“Fasal Amrit has helped me keep the soil moist and soft and has helped maize crops grow for more than 15-20 days without water.”",
    village: "Village: Bansiwara",
    crop: "Crop: Maize",
    cropImage: '<img src="imgs/maize.webp" />',
    link: '<a href="https://www.youtube.com/watch?v=7z7AfqkP8Fs&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=28" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/Jetu.webp",
    name: "Jetu Bai",
    statement:
      "“Fasal Amrit has made my plants tall and dense, helping them retain water after heavy rains.”",
    village: "",
    crop: "Occupation: Forestry labour",
    cropImage: '',
    link: '<a href="https://www.youtube.com/watch?v=TpsPxEX2NfA&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=23" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/khumaji.webp",
    name: "Khuma Ji",
    statement:
      "There has been no rain in the area for more than 40 days, yet my plants have grown taller and better.",
    village: "",
    crop: "Occupation: Forestry labour",
    cropImage: '',
    link: '<a href="https://www.youtube.com/watch?v=1Id7_wcYDRE&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=25" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/bansidhar.webp",
    name: "Banshi Dhar Sharma",
    statement:
      "Fasal Amrit helped me maintain a balance between water and moisture levels in the soil. It also helped my plants grow better and live longer.",
    village: "",
    crop: "Organization: Arpan Seva Sansthan",
    cropImage: '',
    link: '<a href="https://www.youtube.com/watch?v=hRDOjCtaTCM&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=26" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/ramesh.webp",
    name: "Ramesh Chand Sharma",
    statement:
      "“With the help of Fasal Amrit, I was able to help my plants grow better even with less water.”",
    village: "",
    crop: "Organization: Arpan Seva Sansthan",
    cropImage: '',
    link: '<a href="https://www.youtube.com/watch?v=mwYup4rmQg8&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=27" target="_blank">Watch Full Video</a>',
  },
  {
    img: "imgs/shyamlal.webp",
    name: "Shyamlal Dangi",
    statement:
      "“Recently, with Fasal Amrit, my tomato profits increased by almost 45%! My tomatoes grew bigger, taller, and I used 15% less water.”",
    village: "Village: Mirzapur",
    crop: "Crop: Tomato",
    cropImage: '<img src="imgs/tomato.webp" />',
    link: '<a href="https://www.youtube.com/watch?v=17W_BG948SI&list=PLWBP8RwYJuR6fHeU1kAa97mupkejhXCW0&index=22" target="_blank">Watch Full Video</a>',
  },
  // Add additional data for new images
];

let currentIndex = 0;
const visibleItems = 3;
const totalItems = carouselImages.length;

function updateCarousel(index) {
  // Remove the active class from all images
  carouselImages.forEach((image) => image.classList.remove("active"));

  // Add the active class to the selected image
  carouselImages[index].classList.add("active");

  // Update the text content
  contentTitle.textContent = data[index].name;
  contentText.textContent = data[index].statement;
  contentVillage.innerHTML = `${data[index].village} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${data[index].crop}`;
  contentlink.innerHTML = data[index].link;
  contentcrop_image.innerHTML = data[index].cropImage;

  // Calculate the offset to center the active image
  const offset = -(
    (index - Math.floor(visibleItems / 2)) *
    (carouselImages[0].offsetWidth + 30)
  ); // Adjust for center alignment
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}px)`;

  // Reset animations
  gsap.fromTo(
    ".carousel-image img",
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.6 }
  );
  gsap.fromTo(
    ".carousel-content",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  );
}

function autoPlay() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel(currentIndex);
  }, 3000); // Change slide every 3 seconds
}

// Add event listeners to each image
carouselImages.forEach((image) => {
  image.addEventListener("click", () => {
    currentIndex = parseInt(image.getAttribute("data-index"));
    updateCarousel(currentIndex);
  });
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel(currentIndex);
});

// Initialize the carousel with the first slide
updateCarousel(currentIndex);

// Start autoplay
// autoPlay();
