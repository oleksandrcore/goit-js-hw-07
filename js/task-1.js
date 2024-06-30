const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2');
  categoryName.classList.add('category-title');

  const categoryList = category.querySelector('ul');
  categoryList.classList.add('category-list');

  const categoryItems = category.querySelectorAll('ul li');
  categoryItems.forEach(item => {
    item.classList.add('category-item');
  });

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
