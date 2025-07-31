export default function Table({children}) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
               {children}
            </table>
        </div>
    )
}