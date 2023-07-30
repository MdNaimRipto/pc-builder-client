/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { MdFavoriteBorder } from "react-icons/md";
import StarRating from "./StarRating";
import { useState } from "react";

const ProductDetails = ({ details }) => {
  console.log(details);
  const [quantity, setQuantity] = useState(1);

  const {
    productName,
    image,
    description,
    rating,
    price,
    keyFeatures,
    _id,
    status,
  } = details;

  const handleInc = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleDec = () => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  };

  const handleAddToCart = (quantity, productDetail) => {
    addToCart(quantity, productDetail);
    toast((t) => (
      <div>
        <div className="flex justify-end mb-2 w-full">
          <button
            className="btn btn-circle bg-[#00000038] text-white btn-xs"
            onClick={() => toast.dismiss(t.id)}
          >
            X
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-[35%] px-2">
            <img src={image} alt="" />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">{productName}</h4>
            <p className="text-sm mb-2">
              Total Quantity:{" "}
              <span className="text-gray-600 font-semibold">{quantity}</span>
            </p>
            <p className="text-sm">
              Price Total:{" "}
              <span className="text-green-500">
                {parseFloat(productDetail.price.replace(/,/g, "")) * quantity}
              </span>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const [desc, addDesc] = useState(true);
  const [comment, addComment] = useState(false);
  const [commentAdd, addCommentAdd] = useState(false);

  const handleDesc = () => {
    addDesc(true);
    addComment(false);
    addCommentAdd(false);
  };
  const handleComment = () => {
    addComment(true);
    addCommentAdd(false);
    addDesc(false);
  };
  const handleCommentAdd = () => {
    addCommentAdd(true);
    addComment(false);
    addDesc(false);
  };

  let designedClass = "selectedClass";

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl lg:leading-[45px] font-semibold mt-6 mb-3">
              {productName}
            </h2>
            <div className="text-base text-gray-700 md:text-lg flex items-center mb-3">
              <span className="font-semibold mr-2">Status:</span>
              <span>
                {status ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </span>
            </div>
            <div className="text-base text-gray-700 md:text-lg flex items-center mb-3">
              <span className="font-semibold mr-2">Average Rating:</span>
              <StarRating rating={4.8} />
            </div>

            <div className="text-base text-gray-700 md:text-lg flex items-center mb-3">
              <span className="font-semibold mr-2">Individual Rating:</span>
              <StarRating rating={4} />
            </div>
            <p className="text-2xl text-gray-700 md:text-lg flex items-center mb-3">
              <span className="font-semibold mr-2 text-2xl">Price:</span>
              <span className="text-green-500 text-2xl">TK.{price}</span>
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              <span className="font-semibold mr-1">Description:</span>
              {description?.slice(0, 100) + "..."}
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center text-2xl font-semibold">
                <button onClick={handleDec} className="cursor-pointer">
                  -
                </button>
                <p className="mx-4 border border-gray-300 rounded px-10 py-1">
                  {quantity}
                </p>
                <button onClick={handleInc} className="cursor-pointer">
                  +
                </button>
              </div>
              <MdFavoriteBorder className="text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500" />
              <button
                onClick={() => handleAddToCart(quantity, productDetail)}
                className="bg-blue-600 w-48 rounded py-3 border-0 text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-6">
        <button
          className={desc ? designedClass : "unselectedClass"}
          onClick={handleDesc}
        >
          Description's
        </button>
        <button
          className={comment ? designedClass : "unselectedClass"}
          onClick={handleComment}
        >
          Comment's
        </button>
        <button
          className={commentAdd ? designedClass : "unselectedClass"}
          onClick={handleCommentAdd}
        >
          Add Comment
        </button>
      </div>
      <div className="mt-8">
        {desc && !comment && !commentAdd && (
          <div>
            <h4 className="text-justify text-xs md:text-base">{description}</h4>
            <div className="mt-4">
              <h4 className="mb-3 text-xs md:text-xl font-bold">
                Key Features:
              </h4>
              <ul>
                {keyFeatures?.map((feature, i) => (
                  <li key={i + 1} className="mb-2 text-xs md:text-xl leading-6">
                    <span className="font-semibold">{i + 1}.</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {!desc && comment && !commentAdd && (
          <>
            <p>0 Comments Found. Please Add a Comment</p>
          </>
        )}
      </div>
      <div>
        {!desc && !comment && commentAdd && (
          <form>
            <textarea
              className="border-2 w-full lg:w-1/2 outline-none py-2 px-3 rounded mb-3"
              rows="3"
              name="comment"
              placeholder="Enter Your Comment"
            />
            <div>
              <input
                className="border-2 outline-none py-3 px-3 rounded mr-2"
                type="text"
                name="rating"
                placeholder="Add Rating"
              />
              <button className="bg-blue-600 w-48 rounded py-3 border-0 text-white">
                Submit Comment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
