import React from 'react'

function MaskFormGroup({label, mask, placeholder,iput_type}) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input 
        type={iput_type} 
        placeholder={placeholder}
        data-mask={mask}
        className="form-control border"
      />
      {mask && <span className="fs-12 text-muted">{mask && "e.g " + mask}</span> }
    </div>
  )
}

export default MaskFormGroup