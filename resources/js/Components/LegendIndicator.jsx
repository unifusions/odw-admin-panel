export default function LegendIndicator({ color, status }) {
    return (
        <>
            <span class={`legend-indicator bg-${color}`}></span> {status}</>
    )
}