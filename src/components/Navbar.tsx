import gapLogo from './gapLogo2.svg'

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-10 z-50 px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-[#fdf8f2] px-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between h-16 items-center">
          <div className="flex gap-2 items-center">
            <img src={gapLogo} alt="" className='w-8 md:w-10'/>
            <span className="text-lg md:text-xl font-bold text-charcoal">
              GAP CONNECT
            </span>
          </div>
          <button className="bg-brown hover:bg-brown/80 text-white px-2 py-2 rounded-md transition-colors duration-300">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  )
}
