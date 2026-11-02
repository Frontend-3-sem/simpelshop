import Image from "next/image";
import { TfiTrash } from "react-icons/tfi";
const CartItem = ({ product, src, title, category, price }) => {
  return (
    <>
      <div className="grid grid-cols-7">
        <Image
          width={500}
          height={500}
          src={src}
          alt={title}
          loading="eager"
          className="col-span-1"
        ></Image>
        <div className="col-span-2">
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
        <div className="col-span-2">
          <div className="flex">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
        <p className="col-span-1">{price}</p>
        <TfiTrash className="col-span-1" />
      </div>
    </>
  );
};

export default CartItem;
