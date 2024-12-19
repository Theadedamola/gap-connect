import gapLogo from './gapLogo2.svg'

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-10 z-50 px-8 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-[#fdf8f2] px-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src={gapLogo} alt="" className='w-10'/>
            <span className="ml-2 text-xl font-bold text-charcoal">
              GAP CONNECT
            </span>
          </div>
          <button className="bg-brown hover:bg-brown/80 text-white px-6 py-2 rounded-md transition-colors duration-300">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  )
}
