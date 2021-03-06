import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-gray-900"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          
          <hr className="mb-6 " />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-black font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/devhoangkien"
                  className="text-black hover:text-gray-400 text-sm font-semibold py-1"
                >
                  Devhoangkien
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-500 text-sm font-semibold block py-1 px-3"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}