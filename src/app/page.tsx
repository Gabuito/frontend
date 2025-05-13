"use client";

import Navbar from "@/components/navbar/navbar";
import Carrossel from "@/components/hero/carousel/carousel";

// Mock Components
const MockMainItem: React.FC<{ title: string; bgColor: string }> = ({
  title,
  bgColor,
}) => (
  <div
    className={`w-full h-full flex items-center justify-center text-white text-4xl font-bold ${bgColor}`}>
    {title}
  </div>
);

const MockThumbnailItem: React.FC<{ title: string; bgColor: string }> = ({
  title,
  bgColor,
}) => (
  <div
    className={`w-full h-full flex items-center justify-center text-white text-xs ${bgColor}`}>
    {title}
  </div>
);

// Mock Data for the Carousel
const mockCarouselItems = [
  {
    main: <MockMainItem title='Slide 1' bgColor='bg-blue-500' />,
    thumbnail: <MockThumbnailItem title='Thumb 1' bgColor='bg-blue-700' />,
  },
  {
    main: <MockMainItem title='Slide 2' bgColor='bg-green-500' />,
    thumbnail: <MockThumbnailItem title='Thumb 2' bgColor='bg-green-700' />,
  },
  {
    main: <MockMainItem title='Slide 3' bgColor='bg-red-500' />,
    thumbnail: <MockThumbnailItem title='Thumb 3' bgColor='bg-red-700' />,
  },
  {
    main: <MockMainItem title='Slide 4' bgColor='bg-purple-500' />,
    thumbnail: <MockThumbnailItem title='Thumb 4' bgColor='bg-purple-700' />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Carrossel items={mockCarouselItems} />
    </>
  );
}
