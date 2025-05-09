function addItem() {
    const input = document.getElementById("textInput");
    const itemText = input.value.trim();

    if (itemText === "") return;


    const li = document.createElement("li");
    li.textContent = itemText;


    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    
    li.addEventListener("click", () => {
        li.classList.toggle("added");
        removeBtn.style.display = li.classList.contains("added") ? "none" : "inline";
    });
    
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(removeBtn);
    document.getElementById("shoppingList").appendChild(li);
    input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("textInput");

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                addItem();
            }
        });
    }    
} );