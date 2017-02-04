import React from 'react';
import {Link} from 'react-router';
import style from './AboutPage.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className={style.altHeader}>About</h2>
      <p>
        Here we are learning React. Sometime in the future we might actually be proud of this.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
