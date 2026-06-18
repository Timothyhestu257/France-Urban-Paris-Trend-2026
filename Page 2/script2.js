
// Untuk scrolling otomatis ke atas saat tombol scroll to top di pencet
const dropdown = document.getElementById("styleFilter");

dropdown.addEventListener("change", function() {

    const targetCard = document.getElementById(this.value);

    if(targetCard){
        targetCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.classList.add("show");
    }
    else{
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});