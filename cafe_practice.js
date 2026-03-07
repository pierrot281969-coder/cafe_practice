window.addEventListener("scroll",function(){
    const header=this.document.querySelector(".header");
    if(this.window.scrollY>50){
        header.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)";
    }else{
        header.style.boxShadow="none";
    }
});