import { Card } from "../components"
import { useTitle } from "../hooks/useTitle";
import image1 from "../assets/ervo-rocks-Zam8TvEgN5o-unsplash.jpg"

export const CardList = () => {

const products = [
    {
        "id":1,
        "image": {image1},
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
    },
    {
        "id":10,
        "image": "src/assets/lee-campbell-GI6L2pkiZgQ-unsplash.jpg",
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
