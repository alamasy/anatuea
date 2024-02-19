import Link from "next/link";
import { menuLinks } from "../lib/menuLinks";
import { navbar, links, a } from "./navbar.module.css"
import Image from "next/image";

export default function Navbar () {
    return (
        <div className={navbar}>
            <Image
                src="/logo-vissasa.png"
                width={88}
                height={88}
                alt="Logo Vissasa"
            />
            <nav>
                <ul>
                    {menuLinks.map((menu, idx) => (
                        <li className={links} key={idx}>
                            <Link className={a} href={menu.url}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
