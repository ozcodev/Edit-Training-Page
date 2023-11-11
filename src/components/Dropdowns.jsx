import React from 'react';
import './ProfileDropdown.css';
import './LangDropdown.css';

export const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">
      <div className="div">
        <div className="text-wrapper">besix.group@besix.be</div>
        <div className="text-wrapper-2">BESIX Group</div>

        <hr className="line" />

        <div className="frame">
          <div className="text-wrapper-3">Profile settings</div>
          <img
            className="seetings-icon"
            alt="Seetings icon"
            src="/images/seetingsIcon.svg"
          />
        </div>

        <div className="frame-2">
          <img className="vector" alt="Vector" src="/images/Vector.svg" />
          <div className="text-wrapper-4">Our policies</div>
        </div>
        <hr className="line" />
        <div className="frame-3">
          <div className="text-wrapper-5">Log out</div>
          <img
            className="logout-icon"
            alt="Logout icon"
            src="/images/logoutIcon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export const LangDropdown = () => {
  return (
    <div className="lang-dropdown">
      <div className="content-wrapper">
        <div className="content">
          <div className="language">
            <img className="img" alt="English" src="/images/english.svg" />
            <div className="text-wrapper">English (EN)</div>
          </div>
          <div className="div">  
            <div className="text-wrapper-2">Français (FR)</div>
            <img className="france" alt="France" src="/images/france.svg" />
          </div>
          <div className="language-2">
            <div className="text-wrapper-2">Nederlands (NL)</div>
            <img
              className="img"
              alt="Nederlands"
              src="/images/nederlands.svg"
            />
          </div>
          <div className="language-3">
            <div className="text-wrapper-2">Español (ES)</div>
            <img className="img" alt="Spain" src="/images/spain.svg" />
          </div>
          <div className="language-4">
            <div className="text-wrapper-2">Deutsch (DE)</div>
            <img className="img" alt="Germany" src="/images/germany.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
