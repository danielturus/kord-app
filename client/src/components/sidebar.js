import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faSearch,
  faCompass
} from "@fortawesome/free-solid-svg-icons";

import {
  faSoundcloud,
  faSpotify,
  faYoutube,
  faMixcloud
} from "@fortawesome/free-brands-svg-icons";

import PlaylistItem from "./playlist-item";
import styles from "../styles/sidebar.module.css";
// import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Music3d } from "../assets/logo-double-no-white.svg";
import { ReactComponent as Kord3d } from "../assets/circle-logo.svg";

const Sidebar = ({ playlists }) => (
  <div className={styles.sidebarWrapper}>
    <div className={styles.sidebarHeader}>
      <Kord3d />
    </div>
    <div className={styles.sectionWrapper}>
      <h2>App</h2>
      <NavLink
        to="/app/library"
        className={styles.sidebarNavLink}
        activeClassName={styles.activeNavLink}
      >
        <FontAwesomeIcon size="lg" icon={faMusic} />
        Library
      </NavLink>
      <NavLink
        to="/app/search"
        className={styles.sidebarNavLink}
        activeClassName={styles.activeNavLink}
      >
        <FontAwesomeIcon size="lg" icon={faSearch} />
        Search
      </NavLink>
      <NavLink
        to="/app/explore"
        className={styles.sidebarNavLink}
        activeClassName={styles.activeNavLink}
      >
        <FontAwesomeIcon size="lg" icon={faCompass} />
        Explore
      </NavLink>
    </div>

    <div className={styles.sectionWrapper}>
      <h2>Playlists</h2>
      <div className={styles.playlistContainer}>
        {playlists &&
          Object.values(playlists).map(playlist => (
            <PlaylistItem
              sidebar
              key={playlist.title}
              title={playlist.title}
              length={playlist.list.length}
            />
          ))}
      </div>
    </div>
    <div className={styles.sidebarFooter}>
      <FontAwesomeIcon size="10x" icon={faSoundcloud} />
      <FontAwesomeIcon size="6x" icon={faSpotify} />
      <FontAwesomeIcon size="6x" icon={faYoutube} />
      <FontAwesomeIcon size="6x" icon={faMixcloud} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  playlists: state.music.playlists
});

export default connect(mapStateToProps)(Sidebar);
