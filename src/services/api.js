import axios from 'axios';
async function getAllCategory() {
     const res= await axios.get('https://neptunbk.vercel.app/categories')
    return res.data
}

async function getSubCategory(id) {
  const res= await axios.get(`https://neptunbk.vercel.app/products/subcategory/${id}`)
    return res.data
}
async function getProductId(id) {
  const res= await axios.get(`https://neptunbk.vercel.app/products/${id}`)
    return res.data
}
export{
    getAllCategory,
    getSubCategory,
    getProductId
}