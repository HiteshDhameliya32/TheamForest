import React from 'react'

function CheckBox({label, id, isChecked, isDisabled}) {
  const checkbox = (isChecked && isDisabled) ? (
      <input className="form-check-input" id={id} type="checkbox" checked disabled/> 
    ): isDisabled ? (
      <input className="form-check-input" id={id} type="checkbox" disabled/> 
      ) : isChecked ? (
      <input className="form-check-input" id={id} type="checkbox" checked/> 
      ) : (
      <input className="form-check-input" id={id} type="checkbox" /> 
    )
  return (
    <div className="checkbox">
        <label className="form-check-label mb-0">
            {checkbox} {label}
        </label>
    </div>
  )
}


export default CheckBox