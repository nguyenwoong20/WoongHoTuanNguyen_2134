// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, >= 2 danh mục)
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phones", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 0, "Phones", true),
  new Product(3, "MacBook Pro M3", 52000000, 3, "Laptops", true),
  new Product(4, "Dell XPS 13", 32000000, 2, "Laptops", false),
  new Product(5, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(6, "Apple Watch", 12000000, 0, "Accessories", false),
];

// Câu 3: Tạo mảng mới chỉ chứa name, price
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm thuộc category "Accessories" có isAvailable = true không
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price * quantity)
const totalInventoryValue = products.reduce((total, p) => {
  return total + p.price * p.quantity;
}, 0);
console.log("Câu 7:", totalInventoryValue.toLocaleString("vi-VN"), "VND");

// Câu 8: Dùng for...of duyệt mảng và in: Tên – Danh mục – Trạng thái
console.log("Câu 8:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} – ${p.category} – ${status}`);
}

// Câu 9: Dùng for...in để in tên thuộc tính và giá trị tương ứng của 1 sản phẩm
console.log("Câu 9:");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", availableAndInStockNames);
