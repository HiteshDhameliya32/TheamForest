
// Progress.js

const Progressbar = ({ 
    className, // to aply margin padding etc.
    percentage, // percentage of progress
    baseColor, // base color of progress bar
    barColor, // color of progress bar
    isLabelVisible, // show percentage in progress bar
    isStriped, // striped progress bar
    isAnimated // animated progress bar
  }) => {
    return (
      <div className={`progress ${baseColor} ${className}`}>
        <div 
          className={`progress-bar ${barColor} ${isStriped? "progress-bar-striped":""} ${isAnimated? "progress-bar-animated":""}`}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: `${percentage}%`}}
        >
          {isLabelVisible &&<span className="sr-only">{`${percentage}%`}</span>}
        </div>
      </div>
    )
  }
  
  export default Progressbar;
  