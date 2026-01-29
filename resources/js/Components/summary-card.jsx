import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

const iconColorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    info: "bg-info/10 text-info",
};

export default function SummaryCard(
    {
        title,
        value,
        icon: Icon,
        iconColor = "primary"
    }
) {
    return (
        <Card className="shadow-card">
            <CardContent className="p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">{title}</p>
                        <p className="text-2xl font-bold">{value}</p>
                    </div>
                    <div className={cn("rounded-xl p-3", iconColorClasses[iconColor])}>
                        {Icon && <Icon className="h-6 w-6" />}
                        {/* <Clock className="h-6 w-6 text-warning" /> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

