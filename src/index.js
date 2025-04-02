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
  