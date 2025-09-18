import Image from "next/image"
import Logo from "../../public/logo.svg"
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className='flex justify-center md:justify-start items-center mt-[50px] md:mt-[50px] ml-0 md:ml-[55px] w-full'>
      <div>
        <Link href="/" className="flex items-center gap-[8px]">
          <Image priority src={Logo} height={74} width={74} alt="Logo" />
          <h1 className='text-4xl font-bold'>SoftPet</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar