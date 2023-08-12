import React from 'react'
import { BiSearch } from 'react-icons/bi'
type Props = {}

const SearchBar = (props: Props) => {
    return (
        <div>
            <div className="flex items-center p-2 bg-gray-100 rounded-full max-md:hidden">
                <button><BiSearch className="opacity-50" size={20} /></button>
                <input type="text" placeholder='Search' className='outline-none ml-2 bg-transparent caret-blue-500 placeholder:font-light placeholder:text-gray-600' autoComplete='false' />
            </div>
        </div>
    )
}

export default SearchBar