let UpButton = document.querySelector(".up");
let OurGallaryImage = document.querySelectorAll(".gallary img");
let sections = document.querySelectorAll('section');

window.onscroll = function() {
    // Scroll-to-top button logic
    if (window.scrollY >= 500) {
        UpButton?.classList.add("appeared");
    } else {
        UpButton?.classList.remove("appeared");
    }

    // Animation logic
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};
 // up
 UpButton.onclick = function()
{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
} 


let gallaryContainer = document.querySelector(".gallary");

gallaryContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        let img = event.target;

        // Create overlay
        let overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");
        document.body.appendChild(overlay);

        // Create popup box
        let popupBox = document.createElement("div");
        popupBox.classList.add("popup-box");

        // Add image heading
        if (img.alt !== null) {
            let imgHeading = document.createElement("h4");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading);
        }

        // Create close button
        let closeButton = document.createElement("span");
        closeButton.classList.add("button");
        let closeSign = document.createTextNode("X");
        closeButton.appendChild(closeSign);
        popupBox.appendChild(closeButton);

        // Add image
        let popupImg = document.createElement("img");
        popupImg.src = img.src;
        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);
    }
});

// Close popup box
document.addEventListener("click", function (event) {
    if (event.target.className === "button") {
        event.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});

//Sheet script 