import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import Songrow from "./Songrow";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body({ melodify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header melodify={melodify} />

      <div className="body_info">
        <img
          src={
            discover_weekly &&
            discover_weekly.images &&
            discover_weekly.images[0] &&
            discover_weekly.images[0].url
          }
          alt=""
        />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly && discover_weekly.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly &&
          discover_weekly.tracks.items.map((item) => (
            <Songrow track={item.track} />
          ))}
      </div>
    </div>
  );
}

export default Body;
