const dragElems = document.querySelectorAll(".draggable");
const containerElems = document.querySelectorAll(".container");

dragElems.forEach((dragElemsEach) => {
    dragElemsEach.addEventListener("dragstart", () => {
        dragElemsEach.classList.add("onDrag")
    })
    dragElemsEach.addEventListener("dragend", () => {
        dragElemsEach.classList.remove("onDrag")
    })
})

containerElems.forEach((containerElems) => {
    containerElems.addEventListener("dragover", (eventObj) => {
        eventObj.preventDefault();
        const onDrag = document.querySelector(".onDrag");
        containerElems.appendChild(onDrag)
    })
})

function getDragAfterElement(containerElem, yPos){
    const dragElems = [...containerElem.querySelectorAll(".draggable:not(.onDrag)")];
}