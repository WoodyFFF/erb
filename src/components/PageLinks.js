import { pageLinks } from '../data'
export default function PageLinks({groupClass, itemClass,nav_id}) {
    return (
        <ul className={groupClass} id={nav_id}>
            {pageLinks.map((link)=> {
                return (
                    <li>
                    <a key={link.id} href={link.href} className={itemClass}>{link.text}</a>
                    </li>
                );
            })}
        </ul>
    );
};

