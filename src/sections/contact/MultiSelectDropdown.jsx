import React, { useState, useRef, useEffect } from "react";
import "./MultiSelectDropdown.css"; // 👈 your LESS/CSS converted file

const MultiSelectDropdown = ({ options = [], title = "Configure Table", onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  // toggle dropdown
  const toggleDropdown = () => setOpen(!open);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // handle checkbox change
  const handleChange = (value) => {
    let newSelected;
    if (selected.includes(value)) {
      newSelected = selected.filter((item) => item !== value);
    } else {
      newSelected = [...selected, value];
    }
    setSelected(newSelected);
    onChange && onChange(newSelected);
  };

  return (
    <div className="select-list border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl" ref={dropdownRef}>
      <div className="title" onClick={toggleDropdown}>
        {title}
      </div>
      {open && (
        <div className="select-options max-h-40 overflow-y-scroll">
          {options.map((opt, idx) => (
            <div className="option" key={idx}>
              <input
                type="checkbox"
                id={`option-${idx}`}
                checked={selected.includes(opt.value)}
                onChange={() => handleChange(opt.value)}
              />
              <label htmlFor={`option-${idx}`}>{opt.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
