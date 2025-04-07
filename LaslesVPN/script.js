setTimeout(() => {
    document.getElementById("skeleton-loader").style.display = "none";  
    document.getElementById("skeleton-img").style.display = "none";  
    document.getElementById("main-content").style.display = "block"; 
}, 2000);

function showSidebar() {
    document.querySelector(".navbaritems").classList.add("show");
    document.querySelector(".openmenu").style.display = "none"; 
}

function hideSidebar() {
    document.querySelector(".navbaritems").classList.remove("show");
    document.querySelector(".openmenu").style.display = "block"; 
}