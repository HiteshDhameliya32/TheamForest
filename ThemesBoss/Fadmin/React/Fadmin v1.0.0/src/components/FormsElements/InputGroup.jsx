const InputGroup = ({ size, label, placeholder,align,label2,isButton }) => {
    let inputClass = "form-control";
    let groupClass = "input-group mb-3";
  
    if (size === "small") {
      inputClass += " input-sm";
      groupClass += " input-group-sm";
    } else if (size === "large") {
      inputClass += " input-lg";
      groupClass += " input-group-lg";
    }

    let Tag = ({labelToUse}) => isButton ? (
      <button className="btn btn-primary" type="button" id={`button-addon-${placeholder}`}>
        {labelToUse}
      </button>
    ) :(
      <span className="input-group-text" id={`inputGroup-sizing-${placeholder}`}>
        {labelToUse}
      </span>
    )

    return (
      <div className={groupClass}>
        {align !=='right' && <Tag labelToUse={label}/> }
        <input
          type="text"
          placeholder={placeholder}
          className={`${inputClass} border`}
          aria-label="Sizing example input"
          aria-describedby={`inputGroup-sizing-${size}`}
        />
        {(align ==='right' || align==='both') && <Tag labelToUse={label2 || label}/>}
      </div>
    );
  };

  export default InputGroup