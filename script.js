const radiusEle = document.getElementById("enter-Radius");
const result = document.getElementById("result");
const calc = document.getElementById("calculate");



calc.addEventListener("click",()=>
{
    const radius = radiusEle.value;
    radiusEle.value = "";
    const ans = calculateArea(radius);
 console.log(ans);
    result.textContent = `The area is : ${ans}`;
});


