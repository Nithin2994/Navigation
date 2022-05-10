export default class Product{

    constructor(id,title,price,currency,imagesrc,available,categoryId,description){
        this.id = id
        this.title = title
        this.price = price
        this.currency = currency
        this.available = available
        this.imagesrc = imagesrc
        this.categoryIds = [...categoryId]
        this.description = description
    }
}