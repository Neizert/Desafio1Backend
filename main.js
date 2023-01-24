class Product {
    constructor(title,description,price,thumbnail,code,stock){
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
    }
  
}
  


class ProductManager{
    constructor(){
         this.products = new Array();
    
    }
    
  

    addProduct = (title,description,price,thumbnail,code,stock) => {
        let nuevoProducto = new Product(title,description,price,thumbnail,code,stock);
        this.products.push(nuevoProducto);

    }

    getProducts = () =>{
        return this.products;
    }

    
    getProductById = (id) =>{
        for(let i=0;i<this.products.length;i++){
            if(this.products.includes(id,i)){
                console.log("Se ha encontrado un producto que coincide con ese id")
            }
            else{
                console.error("Not found")
            }
        }
    }


}




let productManager = new ProductManager();
console.log(productManager);
productManager.addProduct("Manzana","manzana roja", 150, "https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11490598-stock-photo-red-apple-fruit.jpg", "1xlf", 5);
productManager.getProducts();
productManager.getProductById();

console.log(productManager)



