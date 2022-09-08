const categoryTitle = document.querySelectorAll(".category-title")
console.log(categoryTitle);

let licznik = null

for (let i =0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', () =>{
        categoryTitle[i].classList.add('active')
        licznik++
        console.log(licznik)
        if(licznik==1){
            console.log("działa");
            licznik = 0;
        }
    })
}