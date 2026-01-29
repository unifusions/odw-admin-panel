 
import ImageCard from "@/Components/ImageCard";
import AddClinicImages from "./AddClinicImages";
import { useForm } from "@inertiajs/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Image } from "lucide-react";

export default function ClinicImages({ clinic, featuredImage, galleryImages }) {


    const { delete: destroy} = useForm()

    const onDelete = ( gallery) => {
     
        destroy(route('clinics.destroyGallery' ,  {clinic : clinic, gallery:gallery}), {
            preserveScroll:true
        })
      
    }

    return (
        <>
            <Card title="Gallery">
                <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                                <Image className="h-5 w-5 text-primary" />
                                Image Gallery
                            </CardTitle>
                             <CardDescription>
                                Update your clinic's logo/featured image and image gallery
                            </CardDescription>
                </CardHeader>
<CardContent>
         {featuredImage && <>  <h3>Featured Image</h3>
                <ImageCard image={featuredImage} /> </>
                }

</CardContent>
<CardFooter>

</CardFooter>
               

                {galleryImages && galleryImages.length > 0 && <>  <h3>Clinic Images</h3>

                    <div className="row mb-3">

                        {(galleryImages && galleryImages.length > 0) &&
                            galleryImages.map((image) => <div className="col-md-4"> 
                            
                             

                            <ImageCard
                                image={image.image_url}
                                
                                onDelete={() => onDelete(image)} /> 
                                
                               
                                </div>)
                        }


                    </div></>
                }
                <AddClinicImages clinic={clinic} />
            </Card>


        </>
    )
}