export function Card() {
  return (
    <div className='flex flex-col w-64 min-w-64 h-96 bg-neutral-200 dark:bg-neutral-900 rounded-lg shadow-md border border-neutral-300 dark:border-neutral-700 overflow-hidden '>
      <div className='flex flex-col w-full h-full p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold text-neutral-800 dark:text-neutral-50'>
            Card Title
          </h2>
          <button className='text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'>
            Action
          </button>
        </div>
        <p className='mt-2 text-neutral-600 dark:text-neutral-400'>
          This is a simple card component.
        </p>
      </div>
    </div>
  );
}
