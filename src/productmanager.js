const fs = require('fs');

const getProducts = []

class ProductManager{
    static id = 1;
    
     constructor(title , descriptions , price , thumbnail , code , stock , id){
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock,
        ProductManager.id;
     }
   
    
addProduct(){

    const productos = {
       
        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock,
        id : ProductManager.id,
        
        }
       
       



        const verificarCodigo = getProducts.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            getProducts.push(productos);
            
        }

       
    
    }

     getById(id){
       const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
        obtenerproductos.map((element)=>{ if(element.id == id)
            console.log(element) })


    }


    guardaEnArchivo(){
        try{
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
    
        }catch(err){
            throw new Error (err);
    
        }
    
    }
    cargarElArchivo(){
        try{
            
            const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
            console.log(obtenerproductos);
        }catch(err){
            throw new Error(err);
        }
    }
    modificarArchivo(id , nuevosDatos){
        
        getProducts.map((element)=>{
            if(element.id == id ){
              element.title = nuevosDatos.title;
              element.description = nuevosDatos.description;
              element.price = nuevosDatos.price;
              element.thumbnail = nuevosDatos.thumbnail;
              element.code = nuevosDatos.code;
              element.stock = nuevosDatos.stock;
              element.id = id;

                console.log(id);
            }
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
            
        })
    }

        borrarProductos(id){
            const productoborrar = [];
            getProducts.map((element)=>{
                if(element.id !== id){
                    productoborrar.push(element);


                }
                fs.writeFileSync('productos.json', JSON.stringify(productoborrar));
            })

        }
        
     
    }






