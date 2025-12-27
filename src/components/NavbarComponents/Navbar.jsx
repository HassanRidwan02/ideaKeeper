export default function Navbar({children}){
    return (
        <div className='flex justify-between items-center px-4 sm:px-8 lg:px-24 py-6 mb-8 shadow-md bg-gradient-to-r from-indigo-50 to-white'>
            {children}
        </div>
    )
}