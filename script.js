
let searchForm = document.forms["form__search"];
let searchList = document.forms["form__search"].querySelector("input");
let list = document.querySelector(".form__list");

// Closure so the function fires once only

let notFound = (function(){
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            let notFoundMessage = document.createElement("li");
            list.appendChild(notFoundMessage);
            notFoundMessage.textContent = "nothing found";
            notFoundMessage.classList.add("not-found");
        } else {
            notFoundMessage.classList.add("found");
        }
    }
})();

// Filtering List
searchList.addEventListener("keyup", function(ev){
    let searchValue = ev.target.value.toLowerCase();
    let items = document.querySelectorAll(".list__item");
    Array.from(items).forEach(function(item){
        let title = item.textContent;
        if(title.toLowerCase().indexOf(searchValue) != -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
            // notFound();
        }
    })
}); 
