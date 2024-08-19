import React from 'react'
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="section footer">
    <PageLinks groupClass="footer-links" itemClass="footer-link" nav_id="" />
    <SocialLinks groupClass="footer-icons" itemClass="footer-icon" />
        <p className="copyright">copyright &copy; backroads travel yours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
  );
};
