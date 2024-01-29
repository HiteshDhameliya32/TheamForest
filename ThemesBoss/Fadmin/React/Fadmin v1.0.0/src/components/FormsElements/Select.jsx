const Select = ({options, label}) => {
    return (
      <>
        <label className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10">
          <select style={{marginBottom:"15px"}} className="form-control border">
            {options.map(option => (
              <option key={option}>{option}</option>  
            ))}
          </select>
        </div>
      </>
    )
  }

export default Select;