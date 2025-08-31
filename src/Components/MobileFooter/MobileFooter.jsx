import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FooterAccordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-gray-200 border-t px-[6vw]">
      {/* Header */}
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? (
          <MdKeyboardArrowUp className="text-xl" />
        ) : (
          <MdKeyboardArrowDown className="text-xl" />
        )}
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 pb-3 text-gray-600">
          {items.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-500 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className="bg-white">
      <FooterAccordion
        title="About CarDekho"
        items={[
          "About",
          "Careers With Us",
          "Terms & Conditions",
          "Privacy Policy",
          "Corporate Policies",
          "Investors",
          "FAQs",
        ]}
      />
      <FooterAccordion title="Connect With Us" items={["Facebook", "Twitter", "LinkedIn"]} />
      <FooterAccordion title="Others" items={["Blog", "Press", "Sitemap"]} />
      <FooterAccordion title="CarDekho Group Ventures" items={["Insurance", "Finance", "Used Cars"]} />
    </div>
  );
};

export default MobileFooter;
