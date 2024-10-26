import React from 'react'
import { categories } from '../data/Categories';

function Categories() {
  return (
    <div className="lg:pt-12 pt-5">
      <div className="flex lg:flex-wrap overflow-x-scroll lg:overflow-x-hidden py-1 lg:py-0 text-gray-300 text-xs font-semibold">
        {categories?.length > 0 &&
          categories.map((e, i) => (
            <div key={e + i} className="p-1">
              <button className="focus:outline-none outline-none select-none border border-[#2B2731] hover:border-[#CE0175] transition-all duration-300 flex items-center justify-center rounded-lg px-3 py-2  text-nowrap">
                {e.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Categories
