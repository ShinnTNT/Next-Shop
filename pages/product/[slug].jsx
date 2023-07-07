import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetail = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column End */}

          {/* Right Column Start */}

          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Retro 6 G
            </div>

            {/* Product SubTitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos; Golf shoes
            </div>

            {/* Product Price */}
            <div className="text-lg font-semibold">
              MRP : &#8377; 195 165.00
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              Incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* Product Range Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}

              {/* Size Start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* Size End */}

              {/* Show Error Start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Show Error End */}
            </div>

            {/* Add to cart button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* Add to cart button end */}

            {/* Wishlist button start */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Wishlist button end */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                aoa tl capone ali had Sea Aeays iat handed putt ip a design pure
                early 1: speed, eres er eat cree star eet Piemrenertcer neste
                ser sarets peer ni eran reser e pone eee eee eee with sone of
                our best golf technology, helping eee creed ae
              </div>

              <div className="text-md mb-5">
                aoa tl capone ali had Sea Aeays iat handed putt ip a design pure
                early 1: speed, eres er eat cree star eet Piemrenertcer neste
                ser sarets peer ni eran reser e pone eee eee eee with sone of
                our best golf technology, helping eee creed ae
              </div>
            </div>

            {/* Right Column End */}
          </div>
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetail;
