import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import styles for rc-slider

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    price: false,
    category: false,
    color: false,
    material: false,
  });

  const [priceRange, setPriceRange] = useState([0, 1590]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const categories = [
    { name: "Earrings", count: 328 },
    { name: "Set of Earrings", count: 25 },
  ];

  const colors = [
    { name: "Beige", count: 1 },
    { name: "Black", count: 24 },
    { name: "Blue", count: 12 },
    { name: "Gold", count: 238 },
    { name: "Green", count: 13 },
    { name: "Grey", count: 5 },
    { name: "Pink", count: 22 },
    { name: "Purple", count: 3 },
    { name: "Red", count: 9 },
    { name: "Silver", count: 46 },
    { name: "White", count: 52 },
    { name: "Yellow", count: 5 },
  ];

  const materials = [
    { name: "14K Gold Plated", count: 39 },
    { name: "18K Gold Plated", count: 6 },
    { name: "18K Gold Plating", count: 1 },
    { name: "Acrylic", count: 8 },
    { name: "Acrylic , Wood", count: 1 },
    { name: "Acrylic Pearl", count: 1 },
    { name: "agalmatolite", count: 3 },
    { name: "Alloy", count: 20 },
    { name: "Alloy with Acrylic", count: 1 },
    { name: "Alloy with Silver Needles", count: 1 },
    { name: "Alloy, Electroplating", count: 1 },
    { name: "Aluminium Chain", count: 1 },
    { name: "Anti Tarnish, Stainless Steel", count: 22 },
    { name: "Beaded Rosewood", count: 1 },
    { name: "Bodhi Tray with a String", count: 8 },
    { name: "Brass Alloy", count: 6 },
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((item) => item !== material)
        : [...prev, material]
    );
  };

  return (
    <div className="w-64 p-4 border-r text-black">
      {/* PRICE FILTER */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex justify-between items-center w-full text-lg font-semibold pb-2 border-b"
        >
          PRICE
          {openSections.price ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openSections.price && (
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>Rs. {priceRange[0].toFixed(2)}</span>
              <span>Rs. {priceRange[1].toFixed(2)}</span>
            </div>
            <Slider
              range
              min={0}
              max={1590}
              step={10}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
            />
          </div>
        )}
      </div>

      {/* PRODUCT CATEGORY FILTER */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection("category")}
          className=" justify-between items-center w-full text-lg font-semibold pb-2 border-b"
        >
          PRODUCT CATEGORY
          {openSections.category ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openSections.category && (
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <label key={category.name} className="flex flex-col items-center space-x-2 text-gray-800">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="w-4 h-4"
                />
                <span>
                  {category.name} ({category.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* COLOUR FILTER */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection("color")}
          className="flex justify-between items-center w-full text-lg font-semibold pb-2 border-b"
        >
          COLOUR
          {openSections.color ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openSections.color && (
          <div className="mt-2 space-y-2">
          {colors.map((color) => (
            <div className="mt-2 space-y-2">
            {colors.map((color) => (
              <label key={color.name} className="flex items-center space-x-3 text-gray-800">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.name)}
                  onChange={() => handleColorChange(color.name)}
                  className="w-4 h-4"
                />
          
                {/* Count (Bold for better visibility) */}
                <span className="font-semibold w-6 text-right">{color.count}</span>
          
                {/* Color Swatch */}
                <div
                  className="w-5 h-5 rounded-full border border-gray-400"
                  style={{ backgroundColor: color.name.toLowerCase().includes("gold") ? "#FFD700" : color.name.toLowerCase() }}
                ></div>
          
                {/* Color Name */}
                <span className="whitespace-nowrap">{color.name}</span>
              </label>
            ))}
          </div>
          
          ))}
        </div>
        
        )}
      </div>

      {/* MATERIAL FILTER */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection("material")}
          className="flex justify-between items-center w-full text-lg font-semibold pb-2 border-b"
        >
          MATERIAL
          {openSections.material ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openSections.material && (
          <div className="mt-2 space-y-2">
            {materials.map((material) => (
              <label key={material.name} className="flex items-center space-x-2 text-gray-800">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material.name)}
                  onChange={() => handleMaterialChange(material.name)}
                  className="w-4 h-4"
                />
                <span>
                  {material.name} ({material.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
