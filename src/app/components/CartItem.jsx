import Image from "next/image";
import { TfiTrash } from "react-icons/tfi";
const CartItem = ({ product }) => {
  return (
    <>
      <div className="grid grid-cols-7">
        <Image
          width={500}
          height={500}
          src={product.images[0]}
          alt={product.title}
          loading="eager"
          className="col-span-1"
        ></Image>
        <div className="col-span-2">
          <h4>{product.title}</h4>
          <p>{product.category}</p>
        </div>
        <div className="col-span-2">
          <div className="flex">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
        <p className="col-span-1">{product.price}</p>
        <TfiTrash className="col-span-1" />
      </div>
    </>
  );
};

export default CartItem;
