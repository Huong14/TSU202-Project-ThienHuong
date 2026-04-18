let categories = JSON.parse(localStorage.getItem("categories")); // null
if (!categories) {
    categories = [
        { id: "DM001", productName: "Quần Áo", status: "Đang hoạt động" },
        { id: "DM002", productName: "Kính mắt", status: "Ngừng hoạt động" },
        { id: "DM003", productName: "Giày dép", status: "Đang hoạt động" },
        { id: "DM004", productName: "Thời trang nam", status: "Ngừng hoạt động" },
        { id: "DM005", productName: "Thời trang nữ", status: "Ngừng hoạt động" },
        { id: "DM006", productName: "Hoa quả", status: "Ngừng hoạt động" },
        { id: "DM007", productName: "Rau", status: "Đang hoạt động"},
        { id: "DM008", productName: "Điện thoại", status: "Ngừng hoạt động"}
    ];
}
localStorage.setItem("categories", JSON.stringify(categories));


function renderCategories(arr) {
    let tableCategories = document.getElementById("table-categories");
    tableCategories.innerHTML = "";
    let newCategories = arr.map((c) => {
        return `
            <tr style="border: none;">
                <td>${c.id}</td>
                <td>${c.productName}</td>
                <td>${c.status}</td>
                 <td>
                    <button onclick="handleDelete('${c.id}')" style="background-color: white; border: none;"><img height="50" width="50" src="https://thumbs.dreamstime.com/b/%C3%ADcone-vermelho-da-linha-lixeira-no-fundo-branco-ilustra%C3%A7%C3%A3o-vetorial-de-estilo-plano-171177844.jpg" alt="Xoa"></button>
                    <button onclick="update('${c.id}')" style="background-color: white; border: none;"><img height="30" width="30" src="https://static.vecteezy.com/system/resources/previews/050/307/148/large_2x/pencil-icon-design-illustration-vector.jpg" alt="Sua"></button>
                </td>
                
            </tr>
    `
    }).join("");

    tableCategories.innerHTML = newCategories;
}


let formAddProduct = document.getElementById("form-addProduct");
formAddProduct.addEventListener("submit", (event) => {
    event.preventDefault();
    let productIdInput = formAddProduct.productId.value.trim();
    let productNameInput = formAddProduct.productName.value.trim();

    let checkId = categories.some((c) => {
        return c.id === productIdInput;
    })
    console.log(checkId);

    if (checkId) {
        alert("Khong duoc nhap id trung!");
        return;
    }
    
    if (productIdInput === "") {
        document.getElementById("test-id").textContent = "Mã danh mục không được để trống";
    }

    if (productNameInput === "") {
        document.getElementById("test-name").textContent = "Tên danh mục không được để trống";
    }

    console.log(productIdInput, productNameInput);
    let newCategory = {
        id: productIdInput,
        productName: productNameInput,
        status: "Đang hoạt động",
    }

    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories(categories);
});


function handleDelete(id) {
    categories = categories.filter((c) => {
        return c.id !== id;

    });
      
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories(categories);
}




let inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("input", (event) => {
    let value = inputSearch.value.trim();
    let newArr = categories.filter((c) => {
        return c.productName.includes(value);
    });
    console.log(newArr);
    renderCategories(newArr);

});


 let isLogin = JSON.parse(localStorage.getItem("isLogin"));
 if (!isLogin) {
     window.location.href = "./pages/login.html";
 }

 let btnLogout = document.getElementById("btn-logout");

 btnLogout.addEventListener("click", () => {
     if (confirm("Ban chac chan logout khong")) {
         localStorage.removeItem("isLogin");
        window.location.href = "./pages/login.html";
     }
 });

 renderCategories(categories);


let btnOpen = document.querySelector('.btn-add');
let btnClose = document.querySelector('.btn-close');
let overlay = document.querySelector('.overlay');
btnOpen.onclick = function () {
    console.log("Đã vào đây");
    
  overlay.style.display = 'block';
};

btnClose.onclick = function () {
  overlay.style.display = 'none';
};



let update = document.getElementById('btn-update');
let btnSave = document.getElementById('btn-save');
let formEdit = document.getElementById('form-edit');
let fieldInput = document.getElementById('field-input');

update.addEventListener('click',function() {
    formEdit.style.display = 'block';
    update.style.display = 'none';
});

btnSave.addEventListener('click', function() {
    let newValue = fieldInput.ariaValueMax;
    categories.textContent = newValue;
    formEdit.style.display = 'none';
    update.style.display = 'block';
});
