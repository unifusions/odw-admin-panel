
import { cn } from "@/lib/utils";
 
 


const iconColorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
};

export function StatsCard({
  title,
  value,
  change,
  icon:Icon ,
  iconColor = "primary",
} ) {
  return (
    <div className="stats-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <p
              className={cn(
                "mt-2 flex items-center text-sm font-medium",
                change.trend === "up" ? "text-success" : "text-destructive"
              )}
            >
              <span className="mr-1">
                {change.trend === "up" ? "↑" : "↓"}
              </span>
              {Math.abs(change.value)}%{" "}
              <span className="ml-1 text-muted-foreground font-normal">vs last month</span>
            </p>
          )}
        </div>
        <div className={cn("rounded-xl p-3", iconColorClasses[iconColor])}>
             {Icon && <Icon className="h-6 w-6" />}
        
        </div>
      </div>
    </div>
  );
}
