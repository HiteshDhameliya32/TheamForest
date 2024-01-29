import SimpleBar from 'simplebar-react';

// Fadmin Theme Contexts
import {
  setRightSidebarDisplay,
  useThemeContextController,
} from "@/context/ThemeContext";
import Image from "next/image";
import DynamicIcon from '../DynamicIcon';

function RightSidebar() {
  const [controller, dispatch] = useThemeContextController();
  const { right_sidebar_display } = controller;

  const onCloseRigthSidebar = ()=>{
    setRightSidebarDisplay(dispatch,false)
  }

  return (
    <>
      <div
        className={`page-right-sidebar border border-left ${right_sidebar_display?'visible':''}`}
        id="main-right-sidebar"
      >
        <div className="page-right-sidebar-inner">
          <div className="right-sidebar-top border-bottom">
            <div className="right-sidebar-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link bg-transparent border-0 active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    chat
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link bg-transparent border-0"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    settings
                  </button>
                </li>
              </ul>
            </div>
            <a
              onClick={onCloseRigthSidebar}
              className="right-sidebar-toggle right-sidebar-close"
              data-sidebar-id="main-right-sidebar"
            >
              <DynamicIcon icon={"MdClose"} iconFamily={"md"} />
            </a>
          </div>
          <SimpleBar className="right-sidebar-content">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="home-tab-pane"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="chat-list">
                  <span className="chat-title mt-0">Recent</span>
                  <a
                    href="#"
                    className="right-sidebar-toggle chat-item unread border-bottom border-top"
                    data-sidebar-id="chat-right-sidebar"
                  >
                    <div className="user-avatar">
                      <Image 
                        src="/assets/images/avatar/avatar-2.png" 
                        alt="avatar-2" 
                        width="40"
                        height="40"
                        />
                    </div>
                    <div className="chat-info">
                      <span className="chat-author">David</span>
                      <span className="chat-text">where u at?</span>
                      <span className="chat-time">08:50</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="right-sidebar-toggle chat-item unread border-bottom active-user"
                    data-sidebar-id="chat-right-sidebar"
                  >
                    <div className="user-avatar">
                      <Image 
                        src="/assets/images/avatar/avatar-3.png" 
                        alt="avatar-3" 
                        width="40"
                        height="40"
                        />
                    </div>
                    <div className="chat-info">
                      <span className="chat-author">Daisy</span>
                      <span className="chat-text">Daisy sent a photo.</span>
                      <span className="chat-time">11:34</span>
                    </div>
                  </a>
                </div>
                <div className="chat-list">
                  <span className="chat-title mt-0">Older</span>
                  <a
                    href="#"
                    className="right-sidebar-toggle chat-item border-bottom border-top"
                    data-sidebar-id="chat-right-sidebar"
                  >
                    <div className="user-avatar">
                      <Image
                        src="/assets/images/avatar/avatar-4.png" 
                        alt="avatar-4" 
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="chat-info">
                      <span className="chat-author">Tom</span>
                      <span className="chat-text">You: ok</span>
                      <span className="chat-time">2d</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="right-sidebar-toggle chat-item border-bottom active-user"
                    data-sidebar-id="chat-right-sidebar"
                  >
                    <div className="user-avatar">
                      <Image 
                        src="/assets/images/avatar/avatar-5.png" 
                        alt="avatar-5"
                        width="40"
                        height="40"
                    />
                    </div>
                    <div className="chat-info">
                      <span className="chat-author">Anna</span>
                      <span className="chat-text">asdasdasd</span>
                      <span className="chat-time">4d</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="right-sidebar-toggle chat-item border-bottom active-user"
                    data-sidebar-id="chat-right-sidebar"
                  >
                    <div className="user-avatar">
                      <Image 
                        src="/assets/images/avatar/avatar-6.png" 
                        alt="avatar-6" 
                        width="40"
                        height="40"
                    />
                    </div>
                    <div className="chat-info">
                      <span className="chat-author">Liza</span>
                      <span className="chat-text">asdasdasd</span>
                      <span className="chat-time">&nbsp;</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="load-more-messages"
                    data-bs-toggle="tooltip"
                    data-placement="bottom"
                    title="Load More"
                  >
                    &bull;&bull;&bull;
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="profile-tab-pane"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="right-sidebar-settings">
                  <span className="settings-title">General Settings</span>
                  <ul className="sidebar-setting-list list-unstyled">
                    <li>
                      <span className="settings-option">Notifications</span>
                      <input type="checkbox" className="js-switch" defaultChecked />
                    </li>
                    <li>
                      <span className="settings-option">Activity log</span>
                      <input type="checkbox" className="js-switch" defaultChecked />
                    </li>
                    <li>
                      <span className="settings-option">Automatic updates</span>
                      <input type="checkbox" className="js-switch" />
                    </li>
                    <li>
                      <span className="settings-option">Allow backups</span>
                      <input type="checkbox" className="js-switch" />
                    </li>
                  </ul>
                  <span className="settings-title">Account Settings</span>
                  <ul className="sidebar-setting-list list-unstyled">
                    <li>
                      <span className="settings-option">Chat</span>
                      <input type="checkbox" className="js-switch" defaultChecked />
                    </li>
                    <li>
                      <span className="settings-option">Incognito mode</span>
                      <input type="checkbox" className="js-switch" />
                    </li>
                    <li>
                      <span className="settings-option">Public profile</span>
                      <input type="checkbox" className="js-switch" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
