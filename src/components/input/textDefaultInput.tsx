interface TextDefaultInputProps {
  type?: string;
  value: string;
  changeEvent: (e: any) => void;
  labelName: string;
  placeholder: string;
  infoMessage?: string;
  errorMessage?: string;
  isRequired: boolean;
}

const TextDefaultInput = ({ type, value, changeEvent, labelName, placeholder, errorMessage, infoMessage, isRequired }: TextDefaultInputProps) => {
  return (
    <label className="flex flex-col">
      <span className="mb-[4px] font-bold">{ labelName }</span>
      <input
        type={ type ? type : "text" }
        value={ value }
        onChange={ changeEvent }
        placeholder={ placeholder }
        className={`py-[20px] px-[10px] w-full h-[32px] border border-[#d3d3d3] rounded-md focus:outline-none ${ errorMessage ? "border-[#f00]" : "" }`}
        required={ isRequired }
      />
      <span className="ml-[3px] mt-[6px] text-[13px] text-[#c3c3c3]">{ infoMessage }</span>
      <span className="ml-[3px] mt-[3px] text-[13px] text-[#f00000]">{ errorMessage }</span>
    </label>
  );
};

export default TextDefaultInput;