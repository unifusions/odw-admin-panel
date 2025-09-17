export default function Card({ id = "", title, children, styles, callToAction }) {
    return (
        <div id={id} className="card mb-3" style={styles}>

            {title &&
                <div className={`card-header ${callToAction && 'card-header-content-sm-between'}`}>
                    {callToAction ?

                        <>

                            <div className="d-grid gap-2 mb-2 mb-sm-0">

                                <h4 className="card-header-title">{title}</h4>

                            </div>
                            {callToAction}</>
                        : <h4 className="card-header-title">{title}</h4>
                    }


                </div>

            }

            <div className="card-body">
                {children}
            </div>
        </div>
    )
}