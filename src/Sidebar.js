import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          className="sidebar_logo"
          src={process.env.PUBLIC_URL + "/melodifylogo.png"}
          alt="Logo"
        />
        <h1 className="brand_name">Melodify</h1>
      </div>
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {/* {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}/>
      ))} */}
      {playlists && playlists.items ? (
        playlists.items.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}

export default Sidebar;
