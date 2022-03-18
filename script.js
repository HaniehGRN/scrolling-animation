const boxes = document.querySelectorAll(".conbox");

window.addEventListener("scroll", Checkbox);

Checkbox();

function Checkbox() {

    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach( box => {

        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }

    })

}