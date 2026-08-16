

const filterButtons =
document.querySelectorAll('.filter-btn');

const portfolioItems =
document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {

button.addEventListener('click', () => {

filterButtons.forEach(btn =>
btn.classList.remove('active')
);

button.classList.add('active');

const filter =
button.getAttribute('data-filter');

portfolioItems.forEach(item => {

if (
filter === 'all' ||
item.classList.contains(filter)
){

item.style.display = 'block';

setTimeout(() => {
item.style.opacity = '1';
item.style.transform = 'scale(1)';
},100);

}
else{

item.style.opacity = '0';
item.style.transform = 'scale(.9)';

setTimeout(() => {
item.style.display = 'none';
},300);

}

});

});

});

