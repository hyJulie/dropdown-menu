const backToTopBtn = document.querySelector('#back-to-top');

window.addEventListener('scroll', function(){
    //ponto da pagina que o usuario está
    const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    //se for maior que 500 pixels
    if(scrollTop > 500){
        backToTopBtn.style.display = 'block';
    } else{
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function(e){
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});