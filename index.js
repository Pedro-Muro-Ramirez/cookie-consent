// initial variables
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")

// dispaly the modal after set time
setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

// function to close the modal when clicking the closeBtn
closeBtn.addEventListener("click", function() {
    modal.style.display = 'none'
})