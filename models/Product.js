export default class Product{

    constructor(id,title,price,currency,imagesrcs,available,categoryId,description){
        this.id = id
        this.title = title
        this.price = price
        this.currency = currency
        this.available = available
        this.imagesrcs = [...imagesrcs]
        this.categoryIds = [...categoryId]
        this.description = description
    }
}