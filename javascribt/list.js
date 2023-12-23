
let productName = document.getElementById("productName");
let add = document.getElementById("add");
let Done = document.getElementById("update");
let product = [];

if (localStorage.getItem("product") != null) {
    product = JSON.parse(localStorage.getItem("product"));
    displayElement(product);
}


function addelement() {
    let obj =
    {
        name:productName.value,
    }
    product.push(obj);
    localStorage.setItem("product", JSON.stringify(product));
    clearForm();
    document.querySelector("#tableBody").innerHTML = ""
    displayElement(product)
    console.log(product);
    
}
function displayElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tableRow = document.createElement("tr");
        let nameTd = document.createElement("td");
        let textName = document.createTextNode(arr[i].name);
        nameTd.append(textName);
        tableRow.append(nameTd)
        let upBtnTd = document.createElement("td");
        let upBtn = document.createElement("button");
        upBtn.textContent = "Done";
        upBtnTd.append(upBtn);
        tableRow.append(upBtnTd);
        upBtn.addEventListener("click", function (i) {
            let task = i.target.parentElement.parentElement.firstChild;
            task.style.color=(task.style.color === 'green') ? '' : 'green';
        })
        let delBtnTd = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.setAttribute("num", i)
        delBtn.addEventListener("click", function (i) {
            let tr = this.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
            let index = i.target.getAttribute("num");
            deleteElement(index);
            
        })
        
        delBtnTd.append(delBtn);
        tableRow.append(delBtnTd);
        let tabBody = document.getElementById("tableBody");
        tabBody.append(tableRow);
    }
}
        
add.addEventListener("click", function () {
    addelement();
})
function clearForm() {
    productName.value = "";
}

function deleteElement(elementDelete) {
    product.splice(elementDelete, 1);
    localStorage.setItem("product", JSON.stringify(product));
    console.log(product);
    document.querySelector("#tableBody").innerHTML = "";
    displayElement(product);
}



