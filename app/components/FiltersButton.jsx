import { Icon } from '@iconify/react/dist/iconify.js'
import { useClickAway } from '@uidotdev/usehooks'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function FiltersButton({ carModels, categorySlug, query }) {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [filters, setFilters] = useState({
        is_luxury: query.get("lux") ? query.get("lux") : '',
        fuel_type: query.get("ft") ? query.get("ft") : '',
        model: query.get("model") ? query.get("model") : '',
    })


    const filterMenu = useClickAway(() => {
        setShow(false)
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFilters({
            ...filters,
            [name]: value
        })
    }

    const applyFilters = () => {
        router.push(`/categories/${categorySlug}?model=${filters.model}&ft=${filters.fuel_type}&lux=${filters.is_luxury}`)
        setShow(false)
    }

    const resetFilters = () => {
        setFilters({
            is_luxury: '',
            fuel_type: '',
            model: '',
        })
        router.push(`/categories/${categorySlug}`)
        setShow(false)
    }

    return (
        <div ref={filterMenu} className='filters-btn md:relative'>
            <button className={`flex items-center transition-all ease-out gap-2 p-1.5 px-5 rounded-lg border border-neutral-400 ${query.size > 0 ? 'bg-green-800 hover:bg-green-700' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                onClick={() => setShow(prevVal => !prevVal)}>
                {
                    query.size > 0 ? <span>Filters applied</span> : <span>Filters</span>
                }
                <Icon icon='material-symbols:filter-list-rounded' fontSize={24} />
            </button>
            <div className={`filter-menu bg-neutral-800 p-4 px-5 md:w-[300px] w-full z-20 transition-all ease-out flex flex-col gap-3 absolute md:top-14 top-16 right-0 rounded-lg shadow-lg border border-neutral-400 ${show ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                <label>
                    <span className='block mb-1'>Model</span>
                    <select className='p-1 w-full px-3 rounded-lg border border-neutral-400' name="model" id="" value={filters.model} onChange={handleChange}>
                        <option value="" disabled defaultValue={""}>Model</option>
                        {
                            carModels.length > 0 &&
                            carModels.map((model, index) => (
                                <option key={index} value={model._id}>{model.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <span className='block mb-1'>Car luxurity</span>
                    <select className='p-1 w-full px-3 rounded-lg border border-neutral-400' name="is_luxury" value={filters.is_luxury} onChange={handleChange}>
                        <option value="" disabled defaultValue={""}>Car Luxurity</option>
                        <option value="true">Luxury</option>
                        <option value="false">Normal</option>
                    </select>
                </label>
                <label>
                    <span className='block mb-1'>Fuel type</span>
                    <select className='p-1 w-full px-3 rounded-lg border border-neutral-400' name="fuel_type" id="" value={filters.fuel_type} onChange={handleChange}>
                        <option value="" disabled defaultValue={""}>Fuel type</option>
                        <option value="petrol">Petrol</option>
                        <option value="electric">Electric</option>
                    </select>
                </label>
                <div className='mt-4 actions'>
                    <button className='prime-btn w-full' onClick={applyFilters}>Apply filters</button>
                    <button className='mt-4 p-2 px-2 rounded-lg border w-full uppercase font-bold transition-all ease-out opacity-85 hover:opacity-100' onClick={resetFilters}>Reset filters</button>
                </div>
            </div>
        </div>
    )
}

export default FiltersButton