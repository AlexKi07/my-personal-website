document.body.style.backgroundColor = "lightgrey"


const link = document.querySelector("a"); // Selects the first <a> tag

link.addEventListener("mouseover", function() {
    this.style.color = "red"; // Change color on hover
});

link.addEventListener("mouseout", function() {
    this.style.color = "blue"; // Change back when not hovering
});


document.querySelectorAll("a").forEach(link => {
    link.style.padding = "20px"; // Adds space inside the <a> element
});
