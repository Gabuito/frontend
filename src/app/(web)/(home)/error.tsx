"use client";
// ents/ErrorBoundary.tsx
export default function Error({ error }: { error: Error }) {
  return <div className='text-9xl text-white'>{error.message} </div>;
}
