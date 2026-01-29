import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import { Column, Row } from "@/Components/Components";
 
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

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
               

<Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Settings
                </CardTitle>
                <CardDescription>
                  Handle with care
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                
              
               <form onSubmit={handleSubmit} className="space-y-4"  encType="multipart/form-data">
               

                     {settings.map((setting) => (
                            <div key={setting.id}  className="space-y-2">
                                <Label > {setting.key.replace(/_/g, " ")}</Label>

                              



                                    {setting.type === "boolean" && (
                                        <Input
                                            type="checkbox"
                                            checked={!!formValues[setting.key]}
                                            onChange={(e) => handleChange(setting.key, e.target.checked ? 1 : 0)}
                                        />
                                    )}

                                    {setting.type === "string" && (
                                        <Input
                                            type="text"
                                            value={formValues[setting.key] || ""}
                                            onChange={(e) => handleChange(setting.key, e.target.value)}
                                           
                                        />
                                    )}

                                    {setting.type === "number" && (
                                        <Input
                                            type="number"
                                            value={formValues[setting.key] || ""}
                                            onChange={(e) => handleChange(setting.key, e.target.value)}
                                           
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
                                        <div className="space-y-2">



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
                                        </div>
                                    )}
                               
                            </div>
                        ))}

 {progress && (
                        <div className="mt-2 text-sm text-gray-600">
                            Uploading: {progress.percentage}%
                        </div>
                    )}
                <Button className="mt-4" type="submit">Save Settings</Button>
 
                </form>
              </CardContent>
            </Card>

               
                  
                 
            </AuthenticatedLayout>
        </>
    )
}