/* Events needed in page
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick`
    */

let imgSize1 = document.querySelector(".bus");
imgSize1.addEventListener("mouseenter", () => {
    imgSize1.style.transform = "scale(1.2)";
})

let imgSize2 = document.querySelector(".adventure");
imgSize2.addEventListener("mouseover", () => {
    imgSize2.style.transform = "scale(1.1)";
})

let imgSize3 = document.querySelector(".fun");
imgSize3.addEventListener("mouseenter", () => {
    imgSize3.style.transform = "scale(1.2)";
})

let imgSize4 = document.querySelector(".destination");
imgSize4.addEventListener("wheel", () => {
    imgSize4.style.transform = "scale(1.1)";
})

let btnText = document.querySelector(".b1");
btnText.addEventListener("mouseenter", () => {
    btnText.textContent = "IM IN!";
})

let btnText2 = document.querySelector(".b2");
btnText2.addEventListener("click", () => {
    btnText2.textContent = "Can i think about this?";
})

let btnText3 = document.querySelector(".b3");
btnText3.addEventListener("dblclick", () => {
    btnText3.textContent = "YESSSS!";
})

