document.querySelector(".btn").onclick = () => {
    stars = document.querySelector(".rating-btn-container input:checked + label");
    if (stars == null) {
        return;
    }
    document.querySelector(".rating-card").style.display = "none";
    document.querySelector(".thank-you-card").style.display = "block";
    document.querySelector(".you-selected-text").innerHTML = "You selected " + parseInt(stars.innerText) + " out of 5";
}
