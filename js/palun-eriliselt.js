document.addEventListener('DOMContentLoaded', function() {

    const karusell = document.querySelector(".karusell");
    firstImg = karusell.querySelectorAll("img")[0];
    arrowIcons = document.querySelectorAll(".mida i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
   

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        karusell.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});


const DragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = karusell.scrollLeft;
}
    
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    karusell.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    karusell.scrollLeft = prevScrollLeft - positionDiff;
    }

const dragStop = () => {
    isDragStart = false;
    karusell.classList.remove("dragging");


}

    karusell.addEventListener("mousedown", DragStart);
    karusell.addEventListener("mousemove", dragging);
    karusell.addEventListener("mouseup", dragStop);


   
});




let more = document.querySelectorAll('.rohkem');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    })
}



