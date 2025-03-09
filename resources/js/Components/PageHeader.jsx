import Breadcrumbs from "@/Components/Breadcrumbs";

export default function PageHeader({ children }) {
    return (
        <div className="page-header ">
            <div className="row align-items-end">
                <div className="col-sm mb-2 mb-sm-0">
                    <Breadcrumbs />

                </div>


                <div class="col-sm-auto">
                    {children}
                </div>

            </div>

        </div>
    )
}

