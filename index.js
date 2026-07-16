// Available Products
let availableProducts = [
    "Milk",
    "Bread",
    "Eggs",
    "Rice",
    "Sugar",
    "Tea",
    "Coffee",
    "Butter",
    "Juice"
];

// Shopping List Array
let shoppingItems = [];

// Add Item Function
function addItem() {

    let input = document.getElementById("itemInput");
    let item = input.value.trim();

    // Empty Input Check
    if (item === "") {
        alert("Please enter a product name.");
        return;
    }

    // First Letter Capital
    let product = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

    // Product Available Check
    if (!availableProducts.includes(product)) {
        alert("Sorry! Product not available.");
        input.value = "";
        input.focus();
        return;
    }

    // Duplicate Check
    if (shoppingItems.includes(product)) {
        alert("Product already added.");
        input.value = "";
        input.focus();
        return;
    }

    // Add in Array
    shoppingItems.push(product);

    // Create List Item
    let li = document.createElement("li");

    // Product Name
    let span = document.createElement("span");
    span.innerText = product;

    // Delete Button
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete";

    // Delete Function
    btn.onclick = function () {

        let index = shoppingItems.indexOf(product);

        if (index !== -1) {
            shoppingItems.splice(index, 1);
        }

        li.remove();

        alert(product + " removed successfully.");
    };

    // Add Elements
    li.appendChild(span);
    li.appendChild(btn);

    // Show in List
    document.getElementById("shoppingList").appendChild(li);

    alert(product + " added successfully.");

    // Clear Input
    input.value = "";
    input.focus();
}