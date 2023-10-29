document.addEventListener('DOMContentLoaded', function() {
    const targetDiv = document.querySelector('.product-page__aside');

    if (targetDiv) {
        const testDiv = document.createElement('div');
        testDiv.textContent = 'This is a test div!';
        testDiv.style.backgroundColor = 'yellow'; 

        targetDiv.appendChild(testDiv);
    }
});
