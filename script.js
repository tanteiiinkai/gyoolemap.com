const loadimg = document.querySelector(".loadimg");
const mapimg = document.querySelector(".mapimg");
const download = document.querySelector(".download");

function loaded() {
    loadimg.style.display = "none";
    mapimg.style.display = "block";
    console.log("loaded.")

}
document.addEventListener('load', loaded());
