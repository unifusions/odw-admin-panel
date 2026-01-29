export default function IconList({
    label,
    icon: Icon
}) {
    return (

        <div className="flex items-center gap-3">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{label ?? 'No Data Found'} </span>
        </div>


    )
}