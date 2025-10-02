console.log("hi");

// Eerste carousel (section:nth-of-type(2))
const firstSection = document.querySelector("section:nth-of-type(2)");
const firstItems = firstSection.querySelector("ul").querySelectorAll("li");
const firstButtons = firstSection.querySelectorAll("div > button");

firstButtons.forEach((btn, index) => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    firstItems[index].scrollIntoView({ behavior: "smooth", inline: "start" });
    firstButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Tweede carousel (section:nth-of-type(4))
const secondSection = document.querySelector("section:nth-of-type(4)");
const secondItems = secondSection.querySelector("ul").querySelectorAll("li");
const secondButtons = secondSection.querySelectorAll("div > button");

secondButtons.forEach((btn, index) => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    secondItems[index].scrollIntoView({ behavior: "smooth", inline: "start" });
    secondButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


// CODE CAROUSEL3 - SECTION6

const thirdSection = document.querySelector("section:nth-of-type(6)");
const thirdItems = thirdSection.querySelectorAll("ul > li");
const [prevBtn, nextBtn] = thirdSection.querySelectorAll("div > button");

let currentIndex = 0;

function scrollToItem(index) {
  if (index < 0) index = 0;
  if (index >= thirdItems.length) index = thirdItems.length - 1;
  currentIndex = index;
  thirdItems[currentIndex].scrollIntoView({ behavior: "smooth", inline: "start" });
}

prevBtn.addEventListener("click", () => scrollToItem(currentIndex - 1));
nextBtn.addEventListener("click", () => scrollToItem(currentIndex + 1));

scrollToItem(0);



