export default function Button ({children, onClick}){
    return (
        <button 
            onClick={onClick}
            className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 active:scale-95'
        >
            {children}
        </button>
    )
}