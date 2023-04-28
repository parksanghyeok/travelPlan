import React from "react";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (v: any) => void;
}

const AuthInput = ({ label, type, placeholder, value, onChange }: AuthInputProps) => {
  return (
    <div className="mb-[12px] w-[80%]">
      <label htmlFor={ label } className="block mb-1 text-sm text-black2">
        { label }
      </label>
      <input
        type={ type }
        className="border text-gray-900 text-sm rounded-lg w-full p-2.5"
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
};

export default AuthInput;