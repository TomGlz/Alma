const body = document.querySelector("body");

const createHeart = () => {
    const heart = document.createElement("div");
    heart.className = "bi bi-suit-heart-fill";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*10)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    let heartArr = document.querySelectorAll(".bi-suit-heart-fill")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)
