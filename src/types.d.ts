declare global {
  interface Response {
	  products: Product[]
  }
  interface Product {
	  id: string
	  title: string
	  category: string
	  thumbnail: string
	  description: string
  }
}
export {}
