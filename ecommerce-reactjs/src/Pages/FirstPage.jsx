export function FirstPage() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            className="relative w-40"
            src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Indoor</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Peace Lily</span>
            <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $36.00
            </span>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg group">
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            className="relative w-40"
            src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Outdoor</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Monstera</span>
            <span className=" bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $45.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
