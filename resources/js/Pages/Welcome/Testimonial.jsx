export default function Testimonial() {
    return (
        <>
            <div className="container-lg">
                <div className="bg-light content-space-2 rounded-3 px-5">
                    <div className="w-md-70 text-center mx-md-auto">

                    {/* style="max-width: 10rem;"  */}
                        <div className="mb-4">
                            <img className="img-fluid mx-auto" src="/images/svg/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ maxWidth:'10rem' }} />
                            {/* <img className="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark"  /> */}
                        </div>

                        <p className="fs-2 text-dark mb-4">Booking an appointment was so easy! I got an instant cost estimate and even compared prices across clinics. The second opinion feature helped me feel confident about my treatment. Highly recommended!</p>

                        <h3 className="mb-0">David</h3>
                        <p className="fs-4 mb-0">Happy customer</p>
                    </div>
                </div>
            </div>
        </>
    )
}