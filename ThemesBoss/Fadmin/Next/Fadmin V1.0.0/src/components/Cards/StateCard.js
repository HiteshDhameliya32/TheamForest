import DynamicIcon from "@/components/DynamicIcon";


const StatCard = ({ total, title, trendIcon, widgetIcon }) => {
    
	return (
		<div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
			<div className="card border">
				<div className="card-body widget-desk">
					<div className="float-end">
						<h4 className="mt-0 mb-0 fw-bold">
							{total}
							<span>
								<i><DynamicIcon  iconFamily={trendIcon.iconFamily} icon={trendIcon.icon} className={trendIcon.className}/></i>
							</span>
						</h4>
						<p className="text-muted mb-0">{title}</p>
					</div>
					<div className="widget-icon">
						<i ><DynamicIcon iconFamily={widgetIcon.iconFamily} icon={widgetIcon.icon} /></i>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	);
};

export default StatCard;
