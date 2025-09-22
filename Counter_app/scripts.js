
const increase_button = document.getElementById("incbutton");
const decrease_button = document.getElementById("decbutton");
const reset_button = document.getElementById("resbutton");
const countlab = document.getElementById("countlab");

let count=0;

increase_button.addEventListener("click", function() {
    count++;
    countlab.innerHTML= count;
});

decrease_button.addEventListener("click", function(){
    count--;
    countlab.innerHTML= count;
})

reset_button.addEventListener("click", function(){
    count=0;
    countlab.innerHTML= count;
});    