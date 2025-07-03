import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-6 px-4 rounded-t-2xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold">PrepMate</h2>
          <p className="text-sm">Ace interviews with AI-powered learning 🚀</p>
        </div>
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/Subhashini-K"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/subhashinik01/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-4">
        © {year} PrepMate. Made with ❤️ by Subhashini K
      </div>
    </footer>
  );
};

export default Footer;
