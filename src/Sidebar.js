import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Testing"
        src="https://imagecolorpicker.com/_next/image?url=%2Fimagecolorpicker-preview_b.jpg&w=1080&q=75"
      />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" src="" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" src="" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" src="" Icon={ChatIcon} />
      <SidebarRow title="MarketPlace" src="" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" src="" Icon={VideoLibraryIcon} />
      <SidebarRow title="More" src="" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
