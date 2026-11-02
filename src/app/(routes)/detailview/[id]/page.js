import { notFound } from "next/navigation";
import { TfiHeart } from "react-icons/tfi";
import { products } from "@/app/data/productes";
import Image from "next/image";

export default async function DetailView({ params }) {
  const { id } = await params;

  const furniture = products.find((product) => product.id === Number(id));

  if (!furniture) {
    notFound();
  }

  return (
    <main>
      <section className="grid grid-cols-7 gap-4 p-8">
        <div className="col-span-6 p-9">
      <h1 className="text-3xl md:text-5xl lg:text-6xl">{furniture.title}</h1>
        </div>

        <div className="col-span-1 flex justify-end p-4">
          <TfiHeart className="text-3xl" />
        </div>

        <div className="relative col-span-7 h-200">
          <article className="absolute bottom-0 h-[45%] w-full bg-accentMedium p-6">
            <div className="text-right">
              <p className="text-accentLight">Vejledende udsalgspris</p>
              <p className="text-3xl">{furniture.price} $</p>
              <p className="text-accentLight"> - {furniture.discountPercentage}%</p>
            </div>
          </article>

          <div className="absolute left-[10%] top-0 z-10 h-full w-[55%]">
            <Image src={furniture.images[0]} fill className="object-contain" alt={furniture.title} />
          </div>

      
        </div>

</section>

        <section className="flex justify-center">
          <div className="relative">
            <Image src={furniture.images[1]}  width={400} height={400} className=" w-full aspect-square object-cover object-center" alt={furniture.tags} />
          </div>
          <div className="relative">
            <Image src={furniture.images[2]}  width={400} height={400} className=" w-full aspect-square object-cover object-center" alt={furniture.tags} />
          </div>
        </section>

        <article className="grid gap-8 p-90">
          <details open>
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
              <h3>Description</h3>
              <span className="text-2xl group-open:hidden">+</span>
              <span className="text-2xl hidden group-open:inline">−</span>
            </summary>

            <div className="grid grid-cols-2">
              <p>{furniture.description}</p>
            </div>
          </details>



          <details open>
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
              <h3>Specifications</h3>
              <span className="text-2xl group-open:hidden">+</span>
              <span className="text-2xl hidden group-open:inline"> – </span>
            </summary>
            <div className="grid grid-cols-2">
              <p>Brand:</p>
              <p className="text-right">{furniture.brand}</p>

              <p>Model:</p>
              <p className="text-right">{furniture.sku}</p>

              <p>Weight:</p>
              <p className="text-right">{furniture.weight} pound</p>

              <p>Height:</p>
              <p className="text-right">{furniture.dimensions.height} inch</p>

              <p>Depth:</p>
              <p className="text-right">{furniture.dimensions.depth}inch</p>
            </div>
          </details>

          <details open>
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-stone-400 p-1 [&::-webkit-details-marker]:hidden">
              <h3>Info</h3>
              <span className="text-2xl group-open:hidden">+</span>
              <span className="text-2xl hidden group-open:inline">−</span>
            </summary>
            <div className="grid grid-cols-2">
              <p>Return policy:</p>
              <p className="text-right">{furniture.returnPolicy}</p>

              <p>Availability Status;</p>
              <p className="text-right">{furniture.availabilityStatus}</p>

              <p>Shipping information:</p>
              <p className="text-right">{furniture.weight} pound</p>
            </div>
          </details>
        </article>
      
    </main>
  );
}
