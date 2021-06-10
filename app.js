const productsDinamicContent = [
    {
        photo: "./../Images/capuccino.jpg",
        productName: "Capuccino |",
        productPrice: this.productName + "5,99$",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam minus quasi, qui officiis eius culpa, doloremque molestiae alias deleniti, neque libero exercitationem aspernatur voluptate excepturi eveniet doloribus dolorum dolore enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos qui. Recusandae facilis officiis eum laboriosam aliquam iusto vitae suscipit placeat eos labore modi corporis odio ea, sapiente itaque eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur obcaecati consectetur dolor porro! Animi assumenda architecto sit odio rem eius soluta, quas dolorem a ad, aut maxime vero quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia odit quo alias inventore, quaerat exercitationem ex necessitatibus, voluptatibus quidem at aut sit ducimus corporis. Laborum atque illo repellat hic magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non magni ad laboriosam est nisi ipsa a accusantium. Incidunt reiciendis quos inventore beatae eos recusandae consequuntur cupiditate labore tempora quaerat!"
    }
]

const $template = document.getElementById('product-template')

const $productsPages = document.querySelectorAll(".product-window")
const $gridItems = document.querySelectorAll(".grid-item")
console.info($gridItems)
const $firstFragment = document.createDocumentFragment()

console.info($productsPages)

productsDinamicContent.forEach(productPage => {
    console.log(document.$gridItems.querySelectorAll(".grid-item:nth-child(1)"))
})