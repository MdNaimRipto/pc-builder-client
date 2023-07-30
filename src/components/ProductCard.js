import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import StarRating from "./StarRating";

const ProductCard = ({ products }) => {
  const { productName, rating, price, image, category, _id, status } = products;
  return (
    <Link href={`/products/${category.toLowerCase()}/${_id}`}>
      <div
        className="overflow-hidden transition-shadow duration-300 bg-white hover-container shadow-xl p-4 relative pb-[50px] h-[450px] xl:h-[450px]"
        style={{ boxShadow: "0px 0px 10px -3px" }}
      >
        <div className="mb-4">
          <img
            src={image}
            className="object-cover mx-auto rounded hover:scale-110 duration-300 -z-50 h-[250px]"
            alt=""
          />
        </div>
        <div>
          <p className="text-base leading-7 font-medium mb-2 text-black">
            {productName}
          </p>
          <div className="flex justify-between items-center absolute bottom-12 w-full right-0 px-4">
            <p className="text-sm font-medium mb-2 text-green-500">
              <span className="mr-1 text-black">Status: </span>
              <span>
                {status ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </span>
            </p>
            <p className="mb-2 text-sm font-semibold">{category}</p>
          </div>
          <div className="flex justify-between items-center absolute bottom-2 w-full right-0 px-4">
            <p className="text-base xl:text-xl font-medium mb-2 text-green-500">
              <span className="mr-1 text-black">Price: </span>
              <span>${price}</span>
            </p>
            <div className="mb-2">
              <StarRating rating={rating} />
            </div>
          </div>
          <button className="hover-effects bg-blue-600 w-[95%] py-3 mx-auto font-bold font-sans text-white rounded flex items-center justify-center">
            <BiShoppingBag className="mr-2 text-xl" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
