import Card from "@/Components/Card";
import ImageCard from "@/Components/ImageCard";

export default function ClinicImages({ featuredImage, galleryImages }) {


    return (
        <>
            <Card>
                Clinic Images

                <div className="row">

                    {(galleryImages && galleryImages.length > 0) &&
                        galleryImages.map((image) => <div className="col-md-4"><ImageCard
                            image={image.file_path}
                            onView={() => alert('button view')}
                            onDelete={() => alert('image deleted')} /> </div>)
                    }


                </div>

            </Card>
        </>
    )
}