import { ProductProps } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const CarouselCard = ({ card }: { card: ProductProps }) => {
  return (
    <div className="each-slide-effect bg-gradient-to-r from-green-200 to-cyan-200 mt-4 mx-8">
      <div className="flex items-center gap-20">
        <div>
          <img
            src={`http://localhost:3000/image/view/${card.image}`}
            alt={card.name}
            className="h-48"
          />
          <p className="p-4">{card.name}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p
            className="bg-gradient-to-br from-orange-400 via-red-400 to-fuchsia-400 text-xl flex justify-center items-center rounded text-white w-32 h-32 text-center
      "
          >
            Best Price Now <br />
            {card.price} $
          </p>{" "}
          <Link
            className="px-3 py-2 mt-4 bg-blue-800 text-white text-xs font-bold flex items-center w-32 gap-2 uppercase"
            href={`/myapp/product/${card.id}`}
          >
            <MdOutlineKeyboardDoubleArrowRight /> See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
