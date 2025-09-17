import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import { Column, Row } from "@/Components/Components";
import Card from "@/Components/Card";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";

export default function Index({ settings, group }) {

    const { data, setData, post, progress } = useForm({
        _method: "put",
        settings: {},
    });
    const [formValues, setFormValues] = useState(
        settings.reduce((acc, s) => {
            acc[s.key] = s.type === "json" ? JSON.stringify(s.value, null, 2) : s.value;
            return acc;
        }, {})
    );
    const handleChange = (key, value) => {
        setFormValues((prev) => ({ ...prev, [key]: value }));
        setData("settings", { ...formValues, [key]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.settings.update", group), { forceFormData: true });
    };

    return (
        <>
            <AuthenticatedLayout header={`Settings (${group})`}
            pageTitle={`Settings (${group})`} >
               

                <form onSubmit={handleSubmit} className="space-y-4"  encType="multipart/form-data">
                    <Card>
                        {settings.map((setting) => (
                            <Row key={setting.key} className="mb-3">
                                <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value={setting.key.replace(/_/g, " ")} />

                                <Column lg={9}>



                                    {setting.type === "boolean" && (
                                        <input
                                            type="checkbox"
                                            checked={!!formValues[setting.key]}
                                            onChange={(e) => handleChange(setting.key, e.target.checked ? 1 : 0)}
                                        />
                                    )}

                                    {setting.type === "string" && (
                                        <input
                                            type="text"
                                            value={formValues[setting.key] || ""}
                                            onChange={(e) => handleChange(setting.key, e.target.value)}
                                            className="border rounded p-2 w-full"
                                        />
                                    )}

                                    {setting.type === "number" && (
                                        <input
                                            type="number"
                                            value={formValues[setting.key] || ""}
                                            onChange={(e) => handleChange(setting.key, e.target.value)}
                                            className="border rounded p-2 w-full"
                                        />
                                    )}

                                    {setting.type === "json" && (
                                        <textarea
                                            value={formValues[setting.key] || ""}
                                            onChange={(e) => handleChange(setting.key, e.target.value)}
                                            className="border rounded p-2 w-full"
                                            rows={4}
                                        />
                                    )}

                                    {setting.type === "file" && (
                                        <Row>



                                            <ServiceImageHeaderUploader  onFileSelect={(file) => handleChange(setting.key, file)} existingImage={setting.file_url} />

                                            {/* <input
                                                type="file"
                                                onChange={(e) => handleChange(setting.key, e.target.files[0])}
                                            />
                                            {setting.value && (
                                                <div className="mt-2">
                                                    <img
                                                        src={`/storage/${setting.value}`}
                                                        alt="uploaded"
                                                        className="h-20 rounded"
                                                    />
                                                </div>
                                            )} */}
                                        </Row>
                                    )}
                                </Column>
                            </Row>
                        ))}

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save
                        </button>
                    </Card>


                    {progress && (
                        <div className="mt-2 text-sm text-gray-600">
                            Uploading: {progress.percentage}%
                        </div>
                    )}
                </form>
            </AuthenticatedLayout>
        </>
    )
}