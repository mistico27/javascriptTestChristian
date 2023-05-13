//Product class constructor of a Product
class Products{
    constructor(product,description,availability){
        this.product=product;
        this.description=description;
        this.availability=availability;
    }
}


//User Interface
class UI{
    static displayProdcts(){
        const products =Store.getProducts();
        products.forEach((Products) => UI.addProductToList(Products));
        
    }

    static addProductToList(Products){
        const list = document.querySelector('#product-list');
        const row=document.createElement('tr');
        row.innerHTML= `
            <td>${Products.product}</td>
            <td>${Products.description}</td>
            <td>${Products.availability}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#product').value='';
        document.querySelector('#description').value='';
        document.querySelector('#flexCheckDefault').checked= false;

    }

    static DeleteProduct(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message,className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#product-form');
        container.insertBefore(div,form);

        //vanish in 2 seconds
        setTimeout(() =>document.querySelector('.alert').remove(),2500);
    }

}



///store class
class Store{
     static getProducts(){
        let products;
        if(localStorage.getItem('Products')===null){
            products=[];
        }else{
            products = JSON.parse(localStorage.getItem('Products'));
        }
        return products;

    }

     static addProduct(Product){
        const products = Store.getProducts();
        products.push(Product);
        localStorage.setItem('products',JSON.stringify(products));

    }

    static removeProduct(availability){
        const products = Store.getProducts();
        products.forEach((product,index) =>{
            if(product.availability=== availability){
               products.splice(index,1);     
            }
        });

        localStorage.setItem('products',JSON.stringify(products));
    }
}




//Storage class
document.addEventListener('DOMContentLoaded', UI.displayProdcts);

///Events display products
document.querySelector('#product-form').addEventListener('submit',(e) =>{

///prevent default
e.preventDefault();

    //get form values
let isAvailable=null;
const productI= document.querySelector('#product').value;
const description= document.querySelector('#description').value;


const availability= document.querySelector('#flexCheckDefault').checked;
if(availability===false){
    isAvailable=false;
} else{
    isAvailable=true;
}




///Validation
if(productI === '' || description ==='' || isAvailable===''){
    UI.showAlert('please fill all the form','danger');    

}else if(containsSpecialChars(productI) || containsSpecialChars(description) ){
    UI.showAlert('please fill with out special Characters','danger');    
}else if(containsNumbers(productI)){
    UI.showAlert('Product must not be filled with Numbers','danger');    
}else if(productI.length<4){
    UI.showAlert('Product must be at least have 4 letters','danger');    
}else{

    const product = new Products(productI,description,isAvailable);
    //add book to user
    UI.addProductToList(product);
    
    //add book to Store
    Store.addProduct(product);

    //show success Message
    UI.showAlert("Product added successFully", 'success');

    ///clear fields;
    UI.clearFields();

}

});


//special Characters
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

function containsNumbers(str){
    const numbers = /[1234567890]/;
    return numbers.test(str);

  }





//remove
document.querySelector('#product-list').addEventListener('click', (e) =>{

    if(confirm("are you sure you wanna delete the Product...") == true){
        UI.DeleteProduct(e.target);
        Store.removeProduct(e.target.parentElement.previousElementSibling.textContent);
        UI.showAlert("Product Deleted successfully", "info");
    }else{
        UI.showAlert("Product Still in Store", "info");
    }
});


ocument.querySelector('#products-ns').addEventListener('click', (e) =>{

    console.log('Soy la info');
});


///search

const userSearchInput = document.getElementById('search');


userSearchInput.addEventListener("keyup", (e) =>{
    const filter = e.target.value.toLowerCase();
    let table =document.getElementById('product-list');
    let tr =table.getElementsByTagName('tr');
    for(var i=0; i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textValue=td.textContent || td.innerHTML;
          if(textValue.includes(filter)){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";

            }

        }

    }
});



