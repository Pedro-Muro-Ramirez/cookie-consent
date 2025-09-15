// initial variables
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const formModal = document.getElementById("form-modal")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById('modal-choice-btns')

// dispaly the modal after set time
setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

// function to close the modal when clicking the closeBtn
closeBtn.addEventListener("click", function() {
    modal.style.display = 'none'
})

// function that prevents the default form behavior and update the modal text on submit
formModal.addEventListener("submit", function(e) {
    e.preventDefault()

    const loginFormData = new FormData(formModal)
    const formName = loginFormData.get('fullName')

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
        <h2>Thanks <span class="modal-display-name">${formName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
        closeBtn.disabled = false
    }, 3000)
})

//function that flips the flex-direction of the modal-choice-btns
declineBtn.addEventListener("mouseenter", function() {
    modalChoiceBtns.classList.toggle('row-reverse')
})
