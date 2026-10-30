import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 gap-4 py-4 md:gap-8 md:py-8">
          <Image
            width={500}
            height={500}
            src="/heroimg.webp"
            alt="Livingroom setup"
            loading="eager"
            className="col-span-2 w-full"
          ></Image>
          <div className="col-span-2">
            <h1>Bold headline goes here</h1>
            <button>klik her</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-2 max-h-20 overflow-hidden md:max-h-30 lg:max-h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface -mt-15 opacity-50 w-full md:-mt-30 lg:-mt-38"
            ></Image>
          </div>
          <div className="max-h-20 overflow-hidden md:max-h-30 lg:max-h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface -mt-2 opacity-50 w-full md:-mt-4 lg:-mt-8"
            ></Image>
          </div>
          <div className="max-h-20 overflow-hidden md:max-h-30 lg:max-h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
              alt="Cutting board"
              loading="eager"
              className="bg-surface -mt-2 opacity-50 w-full md:-mt-4 lg:-mt-8"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
