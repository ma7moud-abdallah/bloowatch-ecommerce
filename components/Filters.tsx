import { useDispatch } from 'react-redux';
import { filterByCategory, removeCategory, searchProduct } from '../redux/storeReducer';

  const filters = {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    }

function Filters() {
    const dispatch = useDispatch();

    const handleSearch = (e: any) => {
       dispatch(searchProduct(e.target.value))
    }
    const handleCategories = (e: any) => {
        if (e.target.checked) return dispatch(filterByCategory(e.target.value));
        dispatch(removeCategory(e.target.value))
    }
  return (
        <form>
            < div  className = "border-b border-gray-200 py-6" >
                <>
                    <div className="pt-6">
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div data-testid='searchInput'>
                                    <label className="block text-sm font-medium text-gray-700">Search</label>
                                    <input
                                        id='search'
                                        name='Search'
                                        type="text"
                                        className="h-4 p-2 border-gray-200 rounded  focus:outline-none bg-gray-100 py-5 mt-2"
                                        placeholder='search for products'
                                        onChange={handleSearch}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </>
                    </div >
        <div className="border-b border-gray-200 py-6">
            <>
                <h3 className="-my-3 flow-root">
                    <span className="font-medium text-gray-900">Categories</span>
                </h3>
                {filters.options.map(option => (
                    <div key={option.label} className="pt-6">
                        <div className="space-y-4">
                            <input
                                id={`filter-${option.value}`}
                                name={`${option.label}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                onChange={handleCategories}
                            />
                            <label
                                htmlFor={`filter-${option.value}`}
                                className="ml-3 text-sm text-gray-600"
                            >
                                {option.label}
                            </label>
                        </div>
                    </div>
                ))}

            </>
        </div>

    </form >
  )
}

export default Filters