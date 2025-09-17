import Breadcrumbs from "@/Components/Breadcrumbs";

export default function PageHeader({ children, title }) {
    return (
        <div className="page-header ">
            <div className="row align-items-center ">
                <div className="col-sm mb-2 mb-sm-0">
                    <Breadcrumbs />


                    {title && typeof title === 'string' ? <h1 class="page-header-title">{title}</h1> : title}

                </div>


                <div class="col-sm-auto">
                    {children}
                </div>

            </div>

        </div>
    )
}

