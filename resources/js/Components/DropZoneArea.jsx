function DropzoneArea() {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        multiple: true,
        onDrop: (acceptedFiles) => {
            // Append new files to existing state
            setData("images", [...data.images, ...acceptedFiles]);
        }
    });

    return (
        <div
            {...getRootProps({
                className: "dz-dropzone dz-clickable border rounded p-4 text-center",
                style: { cursor: 'pointer', backgroundColor: '#fafafa' },
            })}
        >
            <input {...getInputProps()} />
            <p className="mb-0">Drag & drop images here, or click to select files</p>
        </div>
    );
}