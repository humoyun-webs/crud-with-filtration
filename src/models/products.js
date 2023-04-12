const {fetchOne, fetch}  = require("../utils/pg")


const getProductbytitle = 'select * from product where product_title = $1';
const getallproducts = `select * from product  offset 0 limit 10`
const filter = ' select * from product order by product_created_at desc'
// SELECT * FROM product WHERE product_created_at < $1 ORDER BY product_created_at DESC LIMIT $2 OFFSET
const cadd = 'Insert into product ( product_name,product_title, product_desc,product_created_at)values($1, $2, $3,current_date) returning *';
const deleteid = 'Delete from product WHERE product_id = $1'
const update = 'UPDATE product SET product_name = $1,product_title = $2, product_desc = $3, product_Status = $4  WHERE product_id = $5';

// const paginattion = 'select * from product  offcet 0 limit 10'

const productadd = (title, desc, name) => fetchOne(cadd , title, desc, name);
const findbytitle = (title) => fetchOne(getProductbytitle, title);
const allproducts = () => fetch(getallproducts);
const filterproduct = () =>fetch(fetch)
const updateproduct = (title,name,desc,status,product_id) =>fetchOne(update,title,name,desc,status,product_id)
const deleteProduct = (product_id) => fetchOne(deleteid, product_id);

module.exports = {
     productadd,
     findbytitle,
     allproducts,
     deleteProduct,
     updateproduct,
     filterproduct
}