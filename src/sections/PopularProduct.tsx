import { products } from "../constants";
import { star } from "../assets/icons";
const PopularProduct = () => {
  return (
    <section
      id="products"
      className="w-full flex-row justify-center min-h-screen gap-10 max-container"
    >
      <h3 className="tracking-wide font-palanquin text-5xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        Our <span className="text-red-500 inline-block"> Popular </span>{" "}
        Products
      </h3>
      <div className="my-10 text-gray-500">
        <p className="mb-1">
          Experience top-notch quality and style with our sought-after
        </p>
        <p>selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-16">
        {products.map((shoe) => (
          <div className="flex-col justify-center items-center">
            <img src={shoe.imgURL} alt={shoe.name} />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src={star} alt="rating icon" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-gray-400">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-planquin">
              {shoe.name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-red-500 text-2xl leading-normal">
              {shoe.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
