const Column = ({ size, children }) => {
    return (
      <div className={`col-md-${size}`}>
        {children}
      </div>
    );
  };

  export default Column;