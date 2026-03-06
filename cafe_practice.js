const links=document.querySelectorAll('nav a');

links.forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();

        const id=this.getAttribute('href');
        const target=document.querySelector(id);

        target.scrollIntoView({
            behabior:'smooth'
        });
    });
});