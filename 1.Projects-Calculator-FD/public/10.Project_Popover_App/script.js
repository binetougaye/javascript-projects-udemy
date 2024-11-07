const btn = document.getElementById("myBtn")
const myPopover = document.getElementById("myPopover")
const close = document.getElementById("closeBtn")

btn.addEventListener("click", function () {
    myPopover.classList.add("active")
})
close.addEventListener("click", function () {
    myPopover.classList.remove("active")
})