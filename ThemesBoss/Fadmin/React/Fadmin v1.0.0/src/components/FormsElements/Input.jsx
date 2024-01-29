


function Input({className,label, mask, placeholder,iput_type, id, isRequired,isDisabled,isReadOnly, isHorizontal, helpBlock}) {
        const InputFiltered = () => isDisabled ? (
            <input
                disabled
                type={iput_type ? iput_type : "text"} 
                id={id}
                placeholder={placeholder}
                data-mask={mask}
                className="form-control border" 
            />
            ): isReadOnly ? ( 
            <input
                readOnly
                type={iput_type ? iput_type : "text"} 
                id={id}
                placeholder={placeholder}
                data-mask={mask}
                className="form-control border" 
            />
            ): isRequired ? ( 
            <input
                required
                type={iput_type ? iput_type : "text"} 
                id={id}
                placeholder={placeholder}
                data-mask={mask}
                className="form-control border" 
            />
            ):(
            <input
                type={iput_type ? iput_type : "text"} 
                id={id}
                placeholder={placeholder}
                data-mask={mask}
                className="form-control border" 
            />
            )
    
  return (
    <>{isHorizontal ? (
        <div className={`form-group ${className}`}>
        <div className="row">
            {label && <label htmlFor={id} className="col-sm-2 control-label">{label}</label>}
            <div className="col-sm-10">
                <InputFiltered />
                {helpBlock && <p className="help-block">{helpBlock}</p>}
                {mask && <span className="fs-12 text-muted">{mask && "e.g " + mask}</span> }
            </div>
        </div>
    </div>
    ) :
    <div className={`form-group ${className}`}>
        {label && <label htmlFor={id}>{label}</label>}
        <InputFiltered /> 
        {helpBlock && <p className="help-block">{helpBlock}</p>}
        {mask && <span className="fs-12 text-muted">{mask && "e.g " + mask}</span> }
    </div>}
    </>
  )
}

export default Input