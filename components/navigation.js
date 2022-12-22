import Link from "next/link";
import stylesNav from "./navigation.module.scss"
import stylesGlobal from "../styles/global.module.scss";
import { useRouter } from 'next/router';

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Guides", href: "/guides" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
];

const Navigation = () => {
    const router = useRouter();

    return (
        <div className={stylesGlobal.backgroundWhite}>
            <nav className={`${stylesNav.nav} ${stylesGlobal.wrapper}`}>
                {/* brand */}
                <div className={stylesNav.brand}>
                    <a>Benjamin Yde</a>
                </div>
                {/* nav items */}
                <div className={stylesNav.navItemContainer}>
                    {MENU_LIST.map((menu, idx) => (
                        <Link
                            href={menu.href}
                            className={`
                                ${stylesNav.navItem} 
                                ${router.pathname === menu.href ? stylesNav.active : stylesNav.underlineItem}`}
                        >
                            {menu.text}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navigation;