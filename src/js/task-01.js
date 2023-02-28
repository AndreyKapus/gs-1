const categoriesEl = document.querySelector('#categories')
const listItemElement = document.querySelectorAll('.item')

const childrens = categoriesEl.children;
console.log('Number of categories:', childrens.length)
const titleEl = document.getElementsByTagName('h2');
console.log(titleEl)

const titleTextEl = [...titleEl].forEach(el => {
    console.log("Category:", el.textContent);
    const sibling = el.nextElementSibling
    const siblingChildEl = sibling.children;
    console.log("Elements:", siblingChildEl.length)
    // console.log(sibling)
})


