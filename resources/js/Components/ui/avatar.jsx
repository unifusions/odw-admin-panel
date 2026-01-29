export default function Avatar({ text }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">

                {text?.split(" ")
                    .map((n) => n[0])
                    .join("")}
            </div>
            <span className="font-medium">{text}</span>
        </div>
    )
}