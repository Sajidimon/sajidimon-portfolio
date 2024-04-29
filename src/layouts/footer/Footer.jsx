import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import footerimg from '../../assets/sajidimon.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-base-100">
                <aside className="items-center grid-flow-col">
                    <img src={ footerimg} className="rounded-3xl w-[30px]" alt="" />
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <button className="btn btn-lg bg-[#1D232A] border-none gap-6 text-white">
                        <a href="https://www.facebook.com/sajidchowdhuryimon" target="_blank"><span><FaFacebook></FaFacebook></span></a>
                        <a href="https://www.linkedin.com/in/sajidimon" target="_blank"><span><FaLinkedin></FaLinkedin></span></a>
                        <a href="https://github.com/sajidimon" target="_blank"><span><FaGithub></FaGithub></span></a>
                        <a href="https://www.youtube.com/skillgori" target="_blank"><span><FaYoutube></FaYoutube></span></a>
                    </button>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;