class ProductManager{
    constructor(products){
        this.products = []
    }
    
    addProduct(title,description,price,thumbnail,code,stock){
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
        if(!this.products.length){
            this.products.push(newProduct)
        }else{
            const codeRepited = this.products.find(x => x.code === newProduct.code)
            if(codeRepited){
                console.log("Code repited")
            }else{
                this.products.push(newProduct)
            }
        }
    }
    
    getProductById(idSearched){
        const productSearched = this.products.find(x => x.id === idSearched)
        if(productSearched){
            console.log(productSearched)
        }else{
            console.log("Not found")
        }
    }
    getProducts(){
        console.log(this.products)
    }
    
    
}
