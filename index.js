// initial variables
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const formModal = document.getElementById("form-modal")
const modalText = document.getElementById("modal-text")

// dispaly the modal after set time
setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

// function to close the modal when clicking the closeBtn
closeBtn.addEventListener("click", function() {
    modal.style.display = 'none'
})

// function that prevents the default form behavior and update the modal text
formModal.addEventListener("submit", function(e) {
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading" />
        <p id="uploadText">Uploading your data to the dark web...</p>
    </div>`
    setTimeout(function() {
        document.getElementById("uploadText").textContent = "Making the sale..."
    }, 1500)
    setTimeout(function() {
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
    }, 3000)
})
