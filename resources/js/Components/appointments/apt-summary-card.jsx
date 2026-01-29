import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

 

export default function AppointmentSummaryCard({title, value, badge}){
    return (<>
     <Card className="shadow-card cursor-pointer hover:shadow-card-hover transition-shadow py-0">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold text-foreground">
                {value}
              </p>
            </div>
            {/* <Badge className="badge-status badge-confirmed">Active</Badge>
              <Badge className="badge-status badge-completed">Done</Badge>
              <Badge className="badge-status badge-cancelled">Inactive</Badge>
               <Badge className="badge-status badge-pending">Needs Action</Badge> */}
          </CardContent>
        </Card>
    </>)
}