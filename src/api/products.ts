import axios from 'axios'

export const getProductList = async () => {
  try {
    const response = await axios.get('/product.json')

    console.log(response)
  } catch (err) {
    console.error(err)
  }
}
