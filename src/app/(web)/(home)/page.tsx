import { Carousel } from "@/app/(web)/(home)/components/carousel/carousel";
import { Latest } from "@/app/(web)/(home)/components/sections/latest";
import { Banner } from "@/app/(web)/(home)/components/banner/banner";

const heroList = [
  <Banner key='banner' />,
  <Banner key='banner1' />,
  <Banner key='banner2' />,
  <Banner key='banner3' />,
];

export default function Home() {
  return (
    <>
      <Carousel items={heroList} />
      <div className='container mx-auto flex flex-col gap-4 py-8'>
        <div>
          <div className='flex flex-col w-fit py-4'>
            <h1 className='flex text-3xl font-semibold dark:text-neutral-50'>
              Ultimos anúncios
            </h1>
            <h3 className='dark:text-neutral-50/50 font-light text-lg'>
              Novidades na área
            </h3>
          </div>
          <div className='w-full max-w-full mx-auto overflow-x-scroll overflow-y-auto overscroll-auto flex flex-row   py-2 xl:overflow-x-hidden xl:justify-between h-104'>
            <Latest />
          </div>
        </div>
      </div>
    </>
  );
}
