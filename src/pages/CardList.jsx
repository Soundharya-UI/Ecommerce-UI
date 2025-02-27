import { Card } from "../components"
import { useTitle } from "../hooks/useTitle";


export const CardList = () => {

const products = [
    {
        "id":1,
        "image": "/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":2,
        "image": "/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":3,
        "image": "/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":4,
        "image": "/images/milena-trifonova-pHqt1DsHCx0-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":5,
        "image": "/images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":6,
        "image": "/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":7,
        "image": "/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":8,
        "image": "/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":9,
        "image": "/images/icons8-team-7LNatQYMzm4-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":10,
        "image": "/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    }
];

useTitle("Home");

  return (
    <main>
        <section className="flex flex-wrap justify-center">
            {products.map((product) => (
                <Card key={product.id} product={product}/>
            ))}
       
      </section> 
    </main>
  )
}
// flex flex-start flex-wrap
