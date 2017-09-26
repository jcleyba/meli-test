class Product {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.price = {
      currency: item.currency_id, amount: item.price, decimals: item.decimals
    };
    this.pictures = item.pictures;
    this.thumbnail = item.thumbnail;
    this.address = item.address;
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    this.sold_quantity = item.sold_quantity;
    this.description = null;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

module.exports = Product;
