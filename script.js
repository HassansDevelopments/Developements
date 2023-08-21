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

const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const downloadLink = button.getAttribute('data-download-link');
        window.location.href = downloadLink;
    });
});
