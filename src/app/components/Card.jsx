import Image from "next/image";

const CardComponent = () => {
  return (
    <>
      <div className="flex">
        <Image
          width={500}
          height={500}
          src="/bed.webp"
          alt="Furniture bed"
          loading="eager"
          className="bg-taupe-200"
        ></Image>
      </div>
      <div className="px-3 pt-2 pb-3">
        <span className="text-base font-bold text-gray-800 pt-1.5">
          Annibale Colombo bed
        </span>
        <p className="text-xs whitespace-pre-line text-gray-800/40">
          Save $99.99
        </p>
        <p className="text-xs whitespace-pre-line text-gray-800/40">$1899.99</p>
        <p className="text-xs whitespace-pre-line text-gray-800/40">$1699.99</p>
      </div>
    </>
  );
};

export default CardComponent;
