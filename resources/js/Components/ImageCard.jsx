import Card from "./Card";

export default function ImageCard({ image, onView, onDelete }) {
    return (
        <div className="card card-sm" >
            <img class="card-img-top" src={image} alt="Image Description" />

            <div class="card-body">
                <div class="row col-divider text-center">
                    <div class="col">
                        <button class="btn btn-link text-body" onClick = {onView} href="./assets/img/725x1080/img1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" data-fslightbox="gallery" aria-label="View" data-bs-original-title="View">
                            <i class="bi-eye"></i>
                        </button>
                    </div>

                    <div class="col">
                        <button class="btn btn-link text-danger"
                            onClick={onDelete}
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                            <i class="bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}