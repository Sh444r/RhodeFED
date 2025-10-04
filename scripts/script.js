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


