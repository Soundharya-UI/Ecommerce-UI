import { ProductCart } from "../components"
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {

    const products = [
        {
            "id":1,
            "image": "src/assets/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":2,
            "image": "src/assets/icons8-team-7LNatQYMzm4-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":3,
            "image": "src/assets/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":4,
            "image": "src/assets/milena-trifonova-pHqt1DsHCx0-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":5,
            "image": "src/assets/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":6,
            "image": "src/assets/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":7,
            "image": "src/assets/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":8,
            "image": "src/assets/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        },
        {
            "id":9,
            "image": "src/assets/icons8-team-7LNatQYMzm4-unsplash.jpg",
            "name": "Boat Rockerz 450",
            "price": 149
        }
    ];

    useTitle("Cart");

  return (
    <main>
        <section>
       <span className="flex justify-center m-4 font-bold text-2xl">Cart Items: 2</span> 
       <div className="">
        {/* <ProductCart /> */}
       {products.map((product) => (
        <ProductCart key={product.id} product={product} />
       ))}
       </div>
       </section>
       
    </main>
  )
}
