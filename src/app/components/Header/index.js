import Link from "next/link"


const Header = () => {
    return (
        <header className="bg-indigo-500">
            <div>
                <Link href="/">SMP YAPI AL-HUSAENI</Link>
                <input placeholder="cari anime..." className=""/>
            </div>
        </header>
    )
}

export default Header