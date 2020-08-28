import React from 'react';
import { Icon } from 'semantic-ui-react';

const Navbar = () => (
  <header>
    <nav id="navBar">
      <div id="menu">
        <a href="https://the-talks.com/">
          <Icon name="bars" size="large" />
        </a>
      </div>

      <div id="nav">
        <ul>
          <li>
            <a href="http://the-talks.com">
              <img
                src="https://the-talks.com/wp-content/themes/thetalks/img/the-talks-logo@2x.png"
                width="200"
                height="40"
                alt="The Talks Logo"
              />
            </a>
          </li>
          <li>
            <a href="https://the-talks.com/interviews/">Interview Directory</a>
          </li>
          <li>
            <a href="https://the-talks.com/world-guide/">World Guide</a>
          </li>

          <li id="logo">
            <a href="https://www.facebook.com/TheTalksInterviews/">
              <Icon name="facebook f" />
            </a>
            <a href="https://twitter.com/the_talks">
              <Icon name="twitter" />
            </a>
            <a href="https://www.instagram.com/thetalks/">
              <Icon name="instagram" />
            </a>
          </li>

          <li>
            <div id="rolex" style={{ position: 'absolute', right: 0 }}>
              <a href="https://www.rolex.org/?cmpid=dsp_ROLEX_INTL_The-Talks_2020_INTL_rlx2001030">
                <img
                  src="https://the-talks.com/wp-content/themes/thetalks/img/rolex_logo_new@2x.png"
                  width="150"
                  height="30"
                  alt="Rolex advertisement"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
