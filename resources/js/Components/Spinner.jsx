export default function Spinner({currentColor = "dark", size = "sm"}) {
    return (
        <div class={`spinner-border spinner-border-${size} text-${currentColor}`} role="status">
            
        </div>
    )
}