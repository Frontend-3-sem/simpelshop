import Image from "next/image";
const News = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-accentMedium text-background p-4">
          <h4>News</h4>
          <p>
            Have you seen this new thing over here? You should look at this
            stuff. It's really nice quality. These pillows are made of natural
            and expensive fabric.
          </p>
        </div>
        <div className="col-span-3 max-h-20 md:max-h-30 lg:max-h-40 overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/newsimg.webp"
            alt="Bed linen"
            loading="eager"
            className="w-full"
          ></Image>
        </div>
      </section>
    </>
  );
};

export default News;
