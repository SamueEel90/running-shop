const SearchInput = () => {
  return (
     <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="Hľadať..."
              className="w-full md:w-100 text-center text-2xl px-4 py-2 rounded-lg bg-medium-gray text-amber-50 placeholder-white-smoke focus:outline-none focus:ring-2 focus:ring-caribean transition shadow-inner"
            />
          </div>
  );
};

export default SearchInput;