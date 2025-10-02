// JavaScript Document
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

// klik-events
prevBtn.addEventListener("click", () => scrollToItem(currentIndex - 1));
nextBtn.addEventListener("click", () => scrollToItem(currentIndex + 1));

// startpositie
scrollToItem(0);









// // OUDE CODE HIERONDER!!!!

// // CODEPEN CAROUSEL CODE

// function createCaroCarrousel(carrouselID) {
// 	let carrousel = document.querySelector("#"+carrouselID);
//   let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
// 	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
//   let bolletjes = carrousel.querySelectorAll(":scope > nav a");
	
  
//   /****************/
// 	/* DE BOLLETJES */
// 	/****************/
  
//   // de bolletjes activeren
//   function iniBolletjes() {
//     for (bolletje of bolletjes) {
// 			// elk bolletje laten luisteren naar kliks
//       bolletje.addEventListener("click", function(e){
// 				// als er geklikt wordt
        
// 				// de default-actie (de link volgen) niet uitvoeren
//         // anders verplaatst de hele carrousel naar boven in het scherm
// 				e.preventDefault();

// 				// het nieuwe element opzoeken
// 				let newElement = carrousel.querySelector(this.hash);
        
//         // de linker offset van het nieuwe element bepalen 
//         let newElementOffset = newElement.offsetLeft;

//         // de carousel naar de berekende positie scrollen
//         carrouselElementsContainer.scrollTo({
//           left: newElementOffset
//         });
        
//         // nieuwe element current element maken
// 		    updateCurrentElement(newElement);
        
//         // de bolletjes updaten
// 		    updateBolletjes(newElement);
//       });
//     }
// 	}
  
  
//   /*****************/
// 	/* START POSITIE */
// 	/*****************/
  
// 	// het eerste element en bolletje actief maaken
//   function iniStartPosition() {
//     // eerste element current maken
//     carrouselElements[0].classList.add("current");
//     // eerste bolletje current maken
// 		bolletjes[0].classList.add("current");
// 		// aan het begin van de container starten
//     carrouselElementsContainer.scrollLeft = 0;
//   }
  
  
//   /*********************/
// 	/* ALGEMENE FUNCTIES */
// 	/*********************/
  
//   ////////////////////////////
// 	// update current element //
// 	function updateCurrentElement(newElement) {
// 		// het huidige current element opzoeken
// 		let currentElement = carrousel.querySelector(":scope > ul > .current");
// 		// de class current verwijderen
// 		currentElement.classList.remove("current");

// 		// aan nieuwe element de class current toevoegen
// 		newElement.classList.add("current");
// 	}

  
//   //////////////////////
//   // update bolletjes //
//   function updateBolletjes(newElement){
// 		// het huidige current bolletje opzoeken
// 		let currentBolletje = carrousel.querySelector(":scope > nav .current");
// 		// de class current verwijderen
// 		currentBolletje.classList.remove("current");
		
// 		// het nieuwe bolletje opzoeken
//     let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
// 		// de class current toevoegen
// 		newBolletje.classList.add("current");
//   }

  

// 	// de bolletjes activeren
//   iniBolletjes();	
//   // de carrousel bij het begin starten
//   iniStartPosition();
// }


// /************************/
// /* DE CARROUSEL CREËREN */
// /************************/

// // nadat de pagina geladen is, de carrousels activeren
// (function() {
//   // hier de id gebruiken van de section in de html
//   createCaroCarrousel("justBolletjes");
//   //je kunt hier ook meerdere carrousellen activeren
// })();
  

// // CODE VOOR MENU LOCK /// werkt nog niet??
// const menuToggle = document.getElementById('check');
// const body = document.body;

// menuToggle.addEventListener('change', function() {
//   if(this.checked) {
//     body.classList.add('menu-open');  // voorkomt scrollen
//   } else {
//     body.classList.remove('menu-open'); // scrollen weer toegestaan
//   }
// });

