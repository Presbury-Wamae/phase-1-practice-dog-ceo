console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.style.width = "200px"; // Adjust size if needed
          img.style.margin = "10px";
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching images:", error));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breedList = document.getElementById("dog-breeds");
        
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error("Error fetching breeds:", error));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const breedList = document.getElementById("dog-breeds");
    
    breedList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change to any color you prefer
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const breedDropdown = document.getElementById("breed-dropdown");
    const breedList = document.getElementById("dog-breeds");
    let allBreeds = []; // Store all breeds to filter later
    
    // Fetch breeds and store them
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        updateBreedList(allBreeds);
      });
  
    // Function to update the breed list display
    function updateBreedList(breeds) {
      breedList.innerHTML = "";
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
      });
    }
  
    // Event listener for dropdown
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      updateBreedList(filteredBreeds);
    });
  });
  
  