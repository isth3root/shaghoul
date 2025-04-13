import { InstagramOutlined } from "@ant-design/icons";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-semibold">Shaghoul</div>

          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://instagram.com/shaaghoul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <InstagramOutlined className="text-2xl" />
            </a>
          </div>

          <div>
            <p>
              <a href="tel:+989124582003">+98 912 458 2003</a>
            </p>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          © 2025 Shaghoul. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
