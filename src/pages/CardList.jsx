import { Card } from "../components"
import { useTitle } from "../hooks/useTitle";


export const CardList = () => {

const products = [
    {
        "id":1,
        "image": "/assets/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":2,
        "image": "/assets/images/icons8-team-7LNatQYMzm4-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":3,
        "image": "/assets/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":4,
        "image": "/assets/images/milena-trifonova-pHqt1DsHCx0-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":5,
        "image": "/assets/images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":6,
        "image": "/assets/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":7,
        "image": "/assets/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":8,
        "image": "/assets/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":9,
        "image": "/assets/images/icons8-team-7LNatQYMzm4-unsplash.jpg",
        "name": "Boat Rockerz 450",
        "price": 149
    },
    {
        "id":10,
        "image": "/assets/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
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
