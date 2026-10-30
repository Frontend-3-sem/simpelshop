import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 gap-4 py-4">
          <Image
            width={500}
            height={500}
            src="/heroimg.webp"
            alt="Livingroom setup"
            loading="eager"
            className="col-span-2"
          ></Image>
          <div className="col-span-2">
            <h1>Bold headline goes here</h1>
            <button>klik her</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 max-h-30 overflow-hidden">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface -mt-30 opacity-50"
            ></Image>
          </div>
          <div className="max-h-30 overflow-hidden">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface -mt-5 opacity-50"
            ></Image>
          </div>
          <div className="max-h-30 overflow-hidden">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
              alt="Cutting board"
              loading="eager"
              className="bg-surface -mt-5 opacity-50"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
