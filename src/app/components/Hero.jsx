import Image from "next/image";
import CategoryBtn from "./CategoryBtn";
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
          <div className="relative overflow-hidden col-span-2 h-20  md:h-30 lg:h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface opacity-50 w-full h-full object-cover object-[0%_35%]"
            ></Image>
            <CategoryBtn
              className="absolute bottom-4 left-4 z-10"
              category="furniture"
              text="All furniture"
            />
          </div>
          <div className="relative overflow-hidden h-20  md:h-30 lg:h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp"
              alt="Livingroom setup"
              loading="eager"
              className="bg-surface -mt-2 opacity-50 w-full md:-mt-4 lg:-mt-8"
            ></Image>
            <CategoryBtn
              className="absolute bottom-4 left-4 z-10"
              category="home-decoration"
              text="All decoration"
            />
          </div>
          <div className="relative overflow-hidden h-20  md:h-30 lg:h-40">
            <Image
              width={500}
              height={500}
              src="https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
              alt="Cutting board"
              loading="eager"
              className="bg-surface -mt-2 opacity-50 w-full md:-mt-4 lg:-mt-8"
            ></Image>
            <CategoryBtn
              className="absolute bottom-4 left-4 z-10"
              category="kitchen-accessories"
              text="All kitchen"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
