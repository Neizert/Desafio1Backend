class Product {
    
    constructor(title,description,price,thumbnail,code,stock,id){
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
        this.id=ProductManager.productId;
    }
  
}
  


class ProductManager{
    static productId = 0;
    constructor(){
         this.products = new Array();
    
    }
    
  

    addProduct = (title,description,price,thumbnail,code,stock,id) => {   
        let nuevoProducto = new Product(title,description,price,thumbnail,code,stock,id);
        this.products.push(nuevoProducto);
        ProductManager.productId++;

    }

    getProducts = () =>{
        return this.products;
    }

    
    
    getProductById = (idf) =>{       if(this.products.find(i =>i.id === idf)) {
        console.log("Encontrado") }
        else{
            console.error("Not found")
        }
    }
    


    

    

}




let productManager = new ProductManager();
console.log(productManager);
productManager.addProduct("Manzana","Manzana roja", 150, "https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11490598-stock-photo-red-apple-fruit.jpg", "1xlf", 5);
productManager.addProduct("Naranja","Naranaja sin semillas", 120, "https://www.lechepuleva.es/documents/13930/203222/naranja_g.jpg/374b25a1-2f66-4c7a-b7d1-d123cb310073?t=1423215361000", "1zlf", 4);
productManager.addProduct("Banana","Banana ecuatoriana", 100, "https://img.freepik.com/foto-gratis/disparo-alto-angulo-platano-aislado-sobre-superficie-blanca_181624-29513.jpg?auto=format&h=200", "1ylf", 2);

productManager.getProducts();


productManager.getProductById(2);
productManager.getProductById(4);

console.log(productManager)






