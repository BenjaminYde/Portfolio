import Link from "next/link";
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.outer}></div>

                <div className={styles.inner}>
                    <h1>Get in touch!</h1>
                    <div className={styles.sectionsSplits}>

                        <section>
                            <h2>Address</h2>
                            <span>Belgium Izegem</span>
                        </section>

                        <section>
                            <h2>Email</h2>
                            <span>benjamin.yde@gmail.com</span>

                            <h2>Phone</h2>
                            <span>+32 470 35 11 67</span>
                        </section>

                        <section>
                            <h2>Socials</h2>
                            <a href="https://github.com/BenjaminYde">
                                <img className={styles.icon} src="images/icons/github_black.png"/>
                            </a>
                            <a href="https://www.linkedin.com/in/benjamin-yde-2b5092171/">
                                <img className={styles.icon} src="images/icons/linked-in.png"/>
                            </a>
                        </section>
                    </div>
                </div>

                <div className={styles.rightsOuter}></div>
                <div className={styles.rights}>© {new Date().getFullYear()} Benjamin Yde. All
                    Rights Reserved.
                </div>
            </div>
        </>
    );
};

export default Footer;