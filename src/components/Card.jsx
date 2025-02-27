/* eslint-disable react/prop-types */

export const Card = ({product}) => {
    const{name, price, image} = product;
    // const image = "src/assets/ervo-rocks-Zam8TvEgN5o-unsplash.jpg";
  return (
    <>
        <section className="m-5">
            <div className=" shadow-lg max-w-3xs pb-2">
            <div className="p-4">
                <img src={image} alt="headphone" className="w-72 h-48 mb-3" />
                <span className="font-bold">{name}</span>  
            </div>
            <div className="flex justify-between m-3">
            <span className="font-bold mt-1">${price}</span>
            <button className="bg-blue-800 text-white font-bold px-2 py-1 rounded-lg shadow-lg">Add To Cart</button>
            </div>
            </div>
        </section>
      {/* <div className="border border-gray-200 rounded shadow-lg size-70 m-3 ">
        <img src={image} alt="headphone" className="rounded-t-lg size-70" />
        <span className="font-semibold text-1xl">{name}</span>
        <div className="flex justify-between mt-4">
          <span className="font-bold">${price}</span>
          <button className="bg-blue-800 text-white font-semibold rounded shadow py-1 px-1 ">
            Add to cart
          </button>
        </div>
      </div> */}
    </>
  );
};
