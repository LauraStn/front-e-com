import React from "react";
export type RadioProps = {
  value: string;
  label: string;
};
const FilterRadio = (radio: RadioProps) => {
  return (
    <div key={radio.value} className="flex items-center">
      <input
        defaultValue={radio.value}
        type="radio"
        name='category'
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label className="ml-3 min-w-0 flex-1 text-gray-500">{radio.label}</label>
    </div>
  );
};

export default FilterRadio;
