let products = {
    data:[
        {
            productName: "SteelSeries Apex 5",
            category: "keyboard",
            price: "459 zł",
            imageUrl:"images/klawiatura1.webp",
        },
        {
            productName: "Royal Kludge RK G68",
            category: "keyboard",
            price: "215 zł",
            imageUrl:"images/klawiatura2.webp",
        },
        {
            productName: "LOGITECH G Pro X Shroud",
            category: "keyboard",
            price: "550 zł",
            imageUrl:"images/klawiatura3.webp",
        }
    ],
}

for (let i of products.data){
    let card = document.createElement("div")
    card.classList.add("card", i.category);
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")
    let image = document.createElement("img")
    image.setAttribute("src", i.imageUrl)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    let container = document.createElement("div")
    container.classList.add("container")
    let category = document.createElement("div")
    category.innerText = "Category: " + i.category;
    container.appendChild(category)
    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name)
    let price = document.createElement("h6")
    price.innerText = i.price
    container.appendChild(price)
    
    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}








const categoryTitle = document.querySelectorAll(".category-title")

let licznik = 0

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