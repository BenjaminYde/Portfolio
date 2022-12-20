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
                            <h1>Address</h1>
                            <span>Belgium Izegem</span>
                        </section>

                        <section>
                            <h1>Email</h1>
                            <span>benjamin.yde@gmail.com</span>

                            <h1>Phone</h1>
                            <span>+32 470 35 11 67</span>
                        </section>

                        <section>
                            <h1>Socials</h1>
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