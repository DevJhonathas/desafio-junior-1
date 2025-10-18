import AnimalCreateModal from "@/app/components/modals/AnimalCreateModal";

const SearchBar = () => {
  return (
  <form className="flex justify-center gap-4">   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input 
            type="search" 
            id="default-search" 
            className="block md:w-[81em] w-[40em] p-3.5 ps-10 text-sm text-white border-[3px] border-(--grey-color-search) rounded-lg bg-transparent opacity-100 focus:ring-blue-500 focus:border-blue-500" 
            required 
            />

          <div className="text-white absolute end-2.5 bottom-2.5 bg-(--grey-color-search) font-medium rounded-lg text-sm px-4 py-2">Pesquisar</div>
      </div>
      <div className="flex justify-center content-center">
        <AnimalCreateModal></AnimalCreateModal>
      </div>
  </form>

  )
}

export default SearchBar