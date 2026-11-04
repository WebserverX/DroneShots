const images = [
    "DJI_0020.JPG",
    "DJI_0025.JPG",
    "DJI_0036.JPG",
    "DJI_0037.JPG",
    "DJI_0038.JPG",
    "DJI_0039.JPG",
    "DJI_0040.JPG",
    "DJI_0042.JPG",
    "DJI_0043.JPG",
    "DJI_0045.JPG",
    "DJI_0047.JPG",
    "DJI_0050.JPG",
    "DJI_0051.JPG",
    "DJI_0052.JPG",
    "DJI_0053.JPG",
    "DJI_0073.JPG",
    "DJI_0074.JPG",
    "DJI_0080.JPG",
    "DJI_0165.JPG",
    "DJI_0389.JPG",
    "DJI_0401.JPG"
];



const imageEl = document.querySelector("img#show-case");

function changeImage() {
    const rand = Math.floor(Math.random() * images.length);
    imageEl.src = `media/${images[rand]}`;
    imageEl.style.animation = "none";
    imageEl.offsetHeight;
    imageEl.style.animation = "";
}
imageEl.src = `media/${images[0]}`;
setInterval(changeImage, 5000);
const coverImage = document.querySelector("img#cover-img");
coverImage.style.display = "none";
setInterval(()=>{
    if (window.innerWidth < 500) {
        coverImage.style.display = "block";
    } else {
        coverImage.style.display = "none";
    }
}, 100);

function scrollToSection(id) {
    const box = document.querySelector("#scroll-box");
    const section = document.querySelector(id);

    box.scrollTo({
        top: section.offsetTop - box.offsetTop,
        behavior: "smooth"
    });
}
const imgBox = document.querySelector("div#zoom-img");
const zoomImg = document.querySelector("img#zoomed-img");
imgBox.style.display = "none";
document.querySelector("button#close-box").addEventListener("click", ()=>{
    imgBox.style.display = "none";
});

const galleryBox = document.querySelector("div#images");
images.forEach((e, c) => {
    const img = document.createElement("img");

    img.src = `media/${e}`;
    img.alt = `im${c}`;
    img.className = "galery-img";
    img.id = `img${c}`;

    img.addEventListener("click", () => {
        imgBox.style.display = "block";
        zoomImg.src = img.src;
    });

    galleryBox.appendChild(img);
});