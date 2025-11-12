let btn = document.querySelector("#add-btn");
let ul = document.querySelector("#task-list");
let inp = document.querySelector("#task-input");

// Add task on button click
btn.addEventListener("click", function () {
    let task = inp.value.trim();
    if (task === "") return; // prevent empty tasks

    let item = document.createElement("li");
    item.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-btn");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

// Delete task on clicking delete button
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task deleted");
    }
});

// Optional: Add task on Enter key press
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btn.click();
    }
});
