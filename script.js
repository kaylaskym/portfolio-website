const toggle = document.querySelector("#toggleButton");
const toggleLabel = document.querySelector("#toggleButtonLabel");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        toggleLabel.innerText = "Dark Mode";
    } else {
        document.body.classList.remove("dark-mode");
        toggleLabel.innerText = "Light Mode"
    }
});