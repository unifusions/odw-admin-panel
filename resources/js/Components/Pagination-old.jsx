import { Link } from "@inertiajs/react";
import { Card, CardContent } from "./ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function DataPagination({ links }) {
    if (links.length === 3) return null;
    return (
        <Card className="p-0">
            <CardContent>
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
        </CardContent>
        </Card>
    );
}