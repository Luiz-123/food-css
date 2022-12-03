function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

// Video Modal
const modalBtn = document.querySelector(".video-modal-btn");
const modal = document.querySelector(".modal-bg");

// Video Click Event
modalBtn.addEventListener('click', () => {
    modal.innerHTML =`
        <div class="modal">
            <iframe
                src="./video/video.mp4";
                title="Pratos";
                frameborder="0";
                allow="accelerometer";
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                allowfullscreen
            >
            </iframe>
        </div>
    `;

    // Show The Modal
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 50);    
});

// Video Click Modal BG
modal.addEventListener('click', () => {
    modal.innerHTML = '';
    // Smooth Opacity Transition
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 50);
});