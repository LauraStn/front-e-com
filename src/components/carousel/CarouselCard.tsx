import { ProductProps } from "@/utils/types";
import React from "react";

const CarouselCard = ({ card }: { card: ProductProps }) => {
  return (
    <div className="each-slide-effect bg-gradient-to-r from-green-200 to-cyan-200 mt-4 mx-8">
      <div>
        <img
          src={`http://localhost:3000/image/view/${card.image}`}
          alt={card.name}
          className="h-48"
        />
        <span>{card.name}</span>
      </div>
    </div>
    // <div
    //   className="hidden bg-gradient-to-r from-cyan-400 to-lime-600 duration-700 ease-in-out"
    //   data-carousel-item
    // >
    //   <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
    //     {card.name}
    //   </span>
    //   <img
    //     src={`http://localhost:3000/image/view/${card.image}`}
    //     className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
    //     alt="..."
    //   />
    //   <Link
    //     className="px-3 py-2 bg-blue-800 text-white text-xs font-bold flex items-center gap-2 uppercase"
    //     href={`/myapp/product/${card.id}`}
    //   >
    //     <MdOutlineKeyboardDoubleArrowRight /> See more
    //   </Link>
    // </div>
  );
};

export default CarouselCard;
