export default function Faqs() {
    return (
        <>
            <div className="container-lg content-space-t-2 content-space-t-lg-3">
                {/* <!-- Heading --> */}
                <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                    <h2 className="display-4">Frequently Asked <span className="text-primary">Questions</span></h2>
                </div>
                {/* <!-- End Heading --> */}

                <div className="w-md-75 mx-md-auto">
                    {/* <!-- List --> */}
                    <ul className="list-unstyled list-py-3 mb-0">
                        <li>
                            <h2 className="h1">Is my data secure? </h2>
                            <p className="fs-4"></p>
                        </li>

                        <li>
                            <h2 className="h1">Can I cancel an appointment? </h2>
                            <p className="fs-4">If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a <a className="link" href="#" target="_blank">login</a> or can't remember the information, you can use our handy <a className="link" href="#" target="_blank">Redownload page</a>, just remember to use the same email you originally made your purchases with.</p>
                        </li>

                        <li>
                            <h2 className="h1">Do I need insurance?</h2>
                            <p className="fs-4">Technical support for each theme is given directly by the creator of the theme. You can contact us <a className="link" href="#" target="_blank">here</a></p>
                        </li>

                        
                    </ul>
                    {/* <!-- End List --> */}

                    <hr className="my-7" />

                    <div className="text-center">
                        <h3>Haven't found an answer to your question?</h3>
                        <p><a className="link" href="" target="_blank">Send us a message</a> and we'll get back to you.</p>
                    </div>
                </div>
            </div>
        </>
    );
}