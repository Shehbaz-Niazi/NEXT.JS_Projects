const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div
        className="max-w-6xl mx-Pcursor-pointer grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="hover:text-white transition-colors duration-300 cursor-pointer">
          <h2 className="text-white font-lg font-semibold mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            architecto in, unde natus veritatis voluptatum distinctio voluptate
            ipsum voluptatem ullam!
          </p>
        </div>

        <div>
          <h2 className="text-white font-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-lg font-semibold mb-4">
            Social Links
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-lg font-semibold mb-4">
            Social Links
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul>
            <li>
              
            </li>
            <li>
             
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
