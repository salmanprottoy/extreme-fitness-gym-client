import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserSidebar.css";

const UserSidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div class="sidebar-container">
        <ul class="sidebar-navigation">
          <li>
            <a href="/profile">
              <i class="fa fa-tachometer" aria-hidden="true"></i> Profile
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-cog" aria-hidden="true"></i> Settings
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-info-circle" aria-hidden="true"></i> Information
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
