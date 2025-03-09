import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    if (links.length === 3) return null;
    return (
        <nav>
            <ul className="pagination">
                {links.map(({ active, label, url }, index) => {

                    return url === null ? (
                        // <PageInactive keyIndex={index} label={label} />
                        <li key={index} className="page-item disabled" >
                            <span className="page-link" dangerouslySetInnerHTML={{ __html: label }}></span>
                        </li>
                    ) : (

                        // <PageLink keyIndex={index} label={label} active={active} url={url} />
                        <li className={`page-item ${active ? 'active' : ''}`} key={index} >
                            <Link className="page-link" href={url}>
                                <span dangerouslySetInnerHTML={{ __html: label }}></span>
                            </Link>
                        </li>


                    );
                })}
            </ul>
        </nav>
    );
}