import React from 'react';
import {socialLinks} from '../data';

export default function SocialLinks({groupClass, itemClass}) {
  return (
    <ul className={groupClass}>
                {socialLinks.map((link) => { // map through the socialLinks array and return a list item for each link
                    return(
                        <li><a key={link.id} href={link.href} className={itemClass}><i className={link.icon}></i></a></li>
                    )
                })}
            </ul>
  )
}
