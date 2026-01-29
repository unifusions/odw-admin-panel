import { Link, router } from "@inertiajs/react";
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

export default function DataPagination({ links 
  }) {
  
    if (links.length === 3) return null;
    return (
        <Card className="p-0 mt-3">
            <CardContent>
<Pagination>
      <PaginationContent>
        {links.map((link, index) => {
          if (link.label.includes("Previous")) {
            return (
              <PaginationItem key={index}>
                <PaginationPrevious
                  onClick={() => link.url && router.visit(link.url)}
                  className={!link.url ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            )
          }

          if (link.label.includes("Next")) {
            return (
              <PaginationItem key={index}>
                <PaginationNext
                  onClick={() => link.url && router.visit(link.url)}
                  className={!link.url ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            )
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={link.active}
                onClick={() => link.url && router.visit(link.url)}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
            </CardContent>
        </Card>
       
    );
}