import React from "react";

const StatCard = ({ total, title, trendClass, trendIcon, widgetIcon }) => {
	return (
		<div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
			<div className="card border">
				<div className="card-body widget-desk">
					<div className="float-end">
						<h4 className="mt-0 mb-0 fw-bold">
							{total}
							<span>
								<i className={trendClass}>{trendIcon}</i>
							</span>
						</h4>
						<p className="text-muted mb-0">{title}</p>
					</div>
					<div className="widget-icon">
						<i >{widgetIcon}</i>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	);
};

export default StatCard;
