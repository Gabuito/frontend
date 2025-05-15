"use client";

import { Carousel } from "@/app/(web)/(home)/components/carousel/carousel";
import { Banner } from "@/app/(web)/(home)/components/banner/banner";
import { Card } from "@/components/card/card";

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
      {/* <NewItems />
      <CategoryList />
      <History */}
      <div className='container mx-auto'>
        <div>
          <h1 className='text-3xl font-bold py-7 px-3 dark:text-neutral-50 '>
            🚀 Novos anúncios
          </h1>
          <div className='w-full max-w-full mx-auto overflow-x-scroll overflow-y-auto overscroll-auto flex flex-row gap-2 px-4 py-2'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-bold py-7 px-3 dark:text-neutral-50 '>
            🔥 Em Alta
          </h1>
          <div className='w-full max-w-full mx-auto overflow-x-scroll overscroll-y-none flex flex-row gap-2 px-4 py-2'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
