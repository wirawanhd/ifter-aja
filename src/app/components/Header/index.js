import Link from "next/link"


const Header = () => {
    return (
        <header className="bg-indigo-500 fixed z-50 w-full">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">SMP YAPI AL-HUSAENI</Link>
            </div>
        </header>
    )
}

export default Header