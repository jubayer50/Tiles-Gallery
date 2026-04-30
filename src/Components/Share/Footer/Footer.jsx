import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#080024] text-white px-6 md:px-16 py-16">
        <div className="max-w-310 mx-auto">
          {" "}
          <div className=" grid md:grid-cols-4 gap-10 md:gap-15">
            {/* Logo + Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl md:text-2xl text-white">
                  <span className="text-[#FF653F]">Tiles</span> Gallery
                </h2>
              </div>
              <p className="text-sm leading-relaxed">
                Explore our premium tiles gallery featuring a wide range of
                modern and classic designs. Each tile is crafted with precision
                to ensure durability and long-lasting beauty. From elegant
                interiors to stylish exteriors, we have solutions for every
                space. Discover textures, colors, and patterns that bring your
                vision to life. Quality and innovation are at the heart of every
                tile we offer.
              </p>
            </div>

            {/* Outlets */}
            <div>
              <h3 className="font-semibold mb-4 border-b-2 border-[#FF653F] inline-block">
                OUTLETS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Dhaka</li>
                <li>Chittagong</li>
                <li>Sylhet</li>
                <li>Khulna</li>
                <li>Rajshahi</li>
                <li>Mymensingh</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 border-b-2 border-[#FF653F] inline-block">
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Catalogue</li>
                <li>Pa-Wang Ceramic</li>
                <li>Latest News</li>
                <li>Media & Gallery</li>
                <li>Latest Projects</li>
                <li>Certified By</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 border-b-2 border-[#FF653F] inline-block">
                CONTACT US
              </h3>
              <div className="text-sm space-y-3">
                <p>
                  <span className="font-semibold">
                    Registered Office & Showroom:
                  </span>
                  <br />
                  40 faruk len Road, 1st Floor, Mirpur, Dhaka -1000, Bangladesh
                </p>

                <p>
                  <span className="font-semibold">Factory:</span>
                  <br />
                  Gazipur, Gazipur-Chowrasta - 5800
                </p>

                <p>
                  <span className="font-semibold">Hotline:</span>
                  <br />
                  +88 0165588 Tiles Gallery (00-1058)
                </p>

                <p>
                  <span className="font-semibold">Fex Number:</span>
                  <br />
                  +88 0245-889977
                </p>

                <p>
                  <span className="font-semibold">Fax:</span>
                  <br />
                  +88 01 8523 458
                </p>

                <p>
                  <span className="font-semibold">Email:</span>
                  <br />
                  tilesgallery@gmail.com.bd
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-[#FF653F70] flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p>Copyright © 2024 | All right ® reserved by Tiles Gallery</p>
            </div>

            <div>
              <h2>Social Links:</h2>

              <div className="flex gap-3 items-center cursor-pointer mt-1">
                <FaFacebookSquare className="text-2xl" />
                <FaSquareXTwitter className="text-2xl" />
                <IoLogoLinkedin className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
