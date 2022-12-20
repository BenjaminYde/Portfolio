import Link from "next/link";
import styles from "./navigation.module.scss"
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
        <>
            <nav className={styles.nav}>
                {/* brand */}
                <div className={styles.brand}>
                    <a>Benjamin Yde</a>
                </div>
                {/* nav items */}
                <div className={styles.navItemContainer}>
                    {MENU_LIST.map((menu, idx) => (
                        <Link
                            href={menu.href}
                            className={`
                                ${styles.navItem} 
                                ${router.pathname === menu.href ? styles.active : styles.underlineItem}`}
                        >
                            {menu.text}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navigation;