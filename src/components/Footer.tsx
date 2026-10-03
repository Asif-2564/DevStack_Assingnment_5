import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 mt-10">
        <aside>
            <img src={Logo} alt="footer-logo"/>
            <p className="text-sm text-[#64748B]">
                Curated tools, technologies, and resources for developers building
                <br />
                modern software.
            </p>
            <div className="flex justify-between gap-3 mt-3 font-semibold">
                <p>GitHub</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
        </aside>
        <nav>
            <h6 className="footer-title text-black">Product</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technolgies</a>
            <a className="link link-hover">Project</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
        </nav>
        <nav className="mb-10">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of service</a>
        </nav>
        </footer>

    );
};

export default Footer;