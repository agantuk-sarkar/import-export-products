// fetch the products
const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        return data;
  
        // console.log(data);
        // displayProducts(data);
      } else {
        throw new Error("Invalid request");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  export default fetchProducts
