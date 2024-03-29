document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("dateForm").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.addEventListener("mousemove", moveButton);
});

document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var place = document.getElementById("place").value;
    var time = document.getElementById("time").value;
    // Simulate sending answers to your device
    alert("Your crush wants to go to: " + place + ", at: " + time);
});

function moveButton(event) {
    var button = document.getElementById("noBtn");
    button.style.left = event.clientX + "px";
    button.style.top = event.clientY + "px";
}
