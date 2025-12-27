export default function NavbarAbout ({children}){
    return (
        <div className='hidden sm:flex flex-row gap-4' id='links'>
            {children}
        </div>

    )
}