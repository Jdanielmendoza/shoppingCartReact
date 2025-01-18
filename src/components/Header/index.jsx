import { useContext, useState } from "react";
import { ContextProduct } from "../../contexts/productContext";

const Header = () => {
  const {
    productsCategory,
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
  } = useContext(ContextProduct);
  return (
    <div className="w-full p-4 mt-10">
      <section className="">
        <div className="flex gap-8">
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Category </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                <div className="w-60 rounded border border-gray-200 bg-white">
                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    {productsCategory.map((category) => {
                      return (
                        <li key={category}>
                          <fieldset>
                            <label
                              htmlFor={`LabelCheck${category}`}
                              className="w-full flex items-center py-1 gap-2 cursor-pointer hover:bg-slate-50 "
                            >
                              <input
                                type="radio"
                                name={category}
                                value={category}
                                id={`LabelCheck${category}`}
                                className="size-5 rounded border-gray-300"
                                checked={selectedCategory === category}
                                onChange={(e) =>
                                  setSelectedCategory(e.target.value)
                                }
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {category}
                              </span>
                            </label>
                          </fieldset>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Price </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                <div className="w-96 rounded border border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700">
                      {" "}
                      The highest price is $300
                    </span>

                    <button
                      type="button"
                      className="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <div className="border-t border-gray-200 p-4">
                    <div className="flex gap-4">
                      <label
                        htmlFor="FilterPriceFrom"
                        className="flex items-center gap-2"
                      >

                        <input
                          type="range"
                          id="FilterPriceFrom"
                          placeholder="From"
                          value={maxPrice}
                          min={0}
                          max={300}
                          onChange={(e)=>setMaxPrice(e.target.value)}
                          className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                        <span className="text-sm text-gray-600">${maxPrice}</span>

                      </label>

                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
