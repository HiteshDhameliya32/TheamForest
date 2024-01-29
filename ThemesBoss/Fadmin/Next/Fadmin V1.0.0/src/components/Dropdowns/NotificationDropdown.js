import SimpleBar from "simplebar-react";

import DynamicIcon from "../DynamicIcon";

function NotificationDropdown() {
  return (
    <div className="dropdown ms-1 header-item">
      <a
        className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle border-0 dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fs-20">
          <DynamicIcon icon={"FaRegBell"} iconFamily={"fa"} size={18} />
        </i>
      </a>
      <ul className="dropdown-menu dropdown-lg dropdown-content dropdown-menu-end">
        <li className="drop-title border-bottom">
          Notifications
          <a href="#" className="drop-title-link">
            <i>
              <DynamicIcon icon={"FaAngleRight"} iconFamily={"fa6"} size={12}/>
            </i>
          </a>
        </li>
        <SimpleBar className="dropdown-notifications">
          <ul className="list-unstyled dropdown-oc">
            <li>
              <a className="border-bottom" href="#">
                <span className="notification-badge bg-primary">
                  <i>
                    <DynamicIcon icon={"MdPhoto"} iconFamily={"md"} size={18} />
                  </i>
                </span>
                <span className="notification-info">
                  Finished uploading photos to gallery <b>"South Africa"</b>.
                  <small className="notification-date">20:00</small>
                </span>
              </a>
            </li>
            <li>
              <a className="border-bottom" href="#">
                <span className="notification-badge bg-primary">
                  <i className="fa">
                    <DynamicIcon icon={"FaAt"} iconFamily={"fa"} size={15} />
                  </i>
                </span>
                <span className="notification-info">
                  <b>John Doe</b> mentioned you in a post "Update v1.5".
                  <br />
                  <small className="notification-date">06:07</small>
                </span>
              </a>
            </li>
            <li>
              <a className="border-bottom" href="#">
                <span className="notification-badge bg-danger">
                  <i className="fa">
                    <DynamicIcon icon={"FaBolt"} iconFamily={"fa"} size={15} />
                  </i>
                </span>
                <span className="notification-info">
                  4 new special offers from the apps you follow!
                  <small className="notification-date">Yesterday</small>
                </span>
              </a>
            </li>
            <li>
              <a className="rounded-1" href="#">
                <span className="notification-badge bg-success">
                  <i className="fa">
                    <DynamicIcon icon={"FaBullhorn"} iconFamily={"fa"}  size={15} />
                  </i>
                </span>
                <span className="notification-info">
                  There is a meeting with <b>Ethan</b> in 15 minutes!
                  <small className="notification-date">Yesterday</small>
                </span>
              </a>
            </li>
          </ul>
        </SimpleBar>
      </ul>
    </div>
  );
}

export default NotificationDropdown;
