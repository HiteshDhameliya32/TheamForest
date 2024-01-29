import React from "react";

function AccountMenuDropdown() {
  return (
    <div className="dropdown ms-1 user-dropdown header-item">
      <a
        className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle border-0 dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        <img
          src="/assets/images/avatar/avatar-1.png"
          alt=""
          className="rounded-circle img-fluid"
        />
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">
            <span className="badge float-end badge-danger">42</span>Messages
          </a>
        </li>
        <li role="separator" className="divider"></li>
        <li>
          <a href="#">Account Settings</a>
        </li>
        <li>
          <a href="#">Log Out</a>
        </li>
      </ul>
    </div>
  );
}

export default AccountMenuDropdown;
