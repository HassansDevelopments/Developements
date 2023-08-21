const search =() =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("games");
    const product = document.querySelectorAll(".container");
    const pname = document.getElementsByTagName("h1");
    
    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("h1")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else(
                product[i].style.display = "none"

            )
         }
    }
}

// const navlinkels = document.querySelectorAll('.nav_link');
// const windowPathname = window.location.pathname;

// navlinkels.forEach(nav_linkEl=>{
//     const navLinkPathname = new URL(navlinkEl.href).pathname;

//     if((windowPathname === navLinkPathname) || (windowPathname ==='/index.html' && navLinkPathname === '/')) {
//         nav_linkEl.classList.add('active');
//     }
// });