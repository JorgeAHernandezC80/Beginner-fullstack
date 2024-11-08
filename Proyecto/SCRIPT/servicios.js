let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages - 2) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        pages[currentPage + 1].style.transform = 'rotateY(0deg)';
        currentPage += 2;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage -= 2;
        pages[currentPage].style.transform = 'rotateY(0deg)';
        pages[currentPage + 1].style.transform = 'rotateY(-180deg)';
    }
});
