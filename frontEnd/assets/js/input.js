const form = document.querySelector('form')
const filterElement = document.querySelector('header input')
const products = document.querySelectorAll('.product-grid .product-item')

filterElement.addEventListener('input', filterProducts)


function filterProducts() {
    if (filterElement.value != '') {
        for (let product of products) {
            let title = product.querySelector('h3')
            title = title.textContent.toLocaleLowerCase()
            let filterText = filterElement.value.toLocaleLowerCase()
            if (!title.includes(filterText)) {
                product.style.display = 'none'
            }
            else {
                product.style.display = 'flex'
            }
        }
    } else {
        for (let product of products) {
            product.style.display = 'flex'
        }
    }
}
