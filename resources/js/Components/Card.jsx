export default function Card({ id = "", title, children, styles }) {
    return (
        <div id={id} className="card mb-3" style={styles}>

            <div className="card-header">
                <h4 className="card-header-title">{title}</h4>
            </div>

            <div className="card-body">
                {children}
            </div>
        </div>
    )
}