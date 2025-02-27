/* eslint-disable react/prop-types */


export const ProductCart = ({product}) => {
    
    const{name, price, image} = product;
  return (
    <main>
        <div className="mx-12 my-5 rounded shadow border border-gray-200 ">
        <div className="grid grid-cols-4 md:grid-row-4 gap-32 items-center">
            <div>
            <img src={image} alt="img" className="w-32 h-24 p-3"/>
            </div>
            <div>
            <span className="font-bold">{name}</span>
            </div>
            <div>
            <span className="font-bold">${price}</span>
            </div>
            <div>
            <button className="bg-red-700 px-2 py-1 text-white rounded-lg shadow-lg">Remove</button>
            </div>
        </div>
        </div>
    </main>
  )
}
