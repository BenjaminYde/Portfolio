import stylesFooter from "./footer.module.scss"
import stylesGlobal from "../styles/global.module.scss";

const Footer = () => {
    return (
        <div className={`${stylesFooter.footerBackground} ${stylesFooter.footerTop}`}>

            <div className={`${stylesFooter.footer} ${stylesGlobal.wrapper}`}>

                <div className={stylesFooter.inner}>
                    <h1>Get in touch!</h1>
                    <div className={stylesFooter.sectionsSplits}>

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
                                <img className={stylesFooter.icon} src="images/icons/github_white.png"/>
                            </a>
                            <a href="https://www.linkedin.com/in/benjamin-yde-2b5092171/">
                                <img className={stylesFooter.icon} src="images/icons/linked-in.png"/>
                            </a>
                        </section>
                    </div>
                </div>
            </div>

            <div className={stylesFooter.rightsOuter}>
                <div className={stylesFooter.rights}>© {new Date().getFullYear()} Benjamin Yde. All
                    Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;