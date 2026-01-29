import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel"
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { useForm } from "@inertiajs/react"
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export default function ClinicInformation({ clinic }) {

    const { data, setData, patch, errors, processing, } = useForm({
        clinic_name: clinic.name || '',
        address_line_1: clinic.address_line_1 || '',
        address_line_2: clinic.address_line_2 || '',
        phone: clinic.phone || '',
        email: clinic.email || '',
        state: clinic.state || '',
        city: clinic.city || '',
        zip_code: clinic.zip_code || '',
        latitude: clinic.latitude || '',
        longitude: clinic.longitude || '',
        desc: clinic.desc || ''
    })

    const onsubmit = (e) => {
        e.preventDefault();
        patch(route('clinics.update', clinic));

    }
    return (
        <>

            <form action="" onSubmit={onsubmit}>
                <Card className="shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-primary" />
                            Clinic Information
                        </CardTitle>
                        <CardDescription>
                            Update your clinic's basic information
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="clinicName">Clinic Name</Label>
                            <Input id="clinicName"
                                placeholder="Clinic Name" value={data.clinic_name}
                                onChange={(e) => setData('clinic_name', e.target.value)} />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        placeholder="email@address.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        value={data.phone}
                                        placeholder="+x(xxx)xxx-xx-xx"
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input
                                        id="address"
                                        defaultValue="123 Medical Center Dr, New York, NY 10001"
                                        value={data.address_line_1}
                                        placeholder="Address Line 1"
                                        onChange={(e) => setData('address_line_1', e.target.value)}
                                        className="pl-9 mb-3"
                                    />

                                    <Input
                                        id="address"
                                        value={data.address_line_2}
                                        placeholder="Address Line 2"
                                        onChange={(e) => setData('address_line_2', e.target.value)}

                                    />

                                </div>









                            </div>
                        </div>

                        <div className="space-y-2 grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    value={data.city}
                                    onChange={(e) => setData('city', e.target.value)}

                                    placeholder="City"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="state">State</Label>
                                <Input
                                    id="state"

                                    value={data.state}

                                    onChange={(e) => setData('state', e.target.value)}

                                    placeholder="State"

                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="zip_code">Zip Code</Label>
                                <Input
                                    id="zip_code"

                                    value={data.zip_code}

                                    onChange={(e) => setData('zip_code', e.target.value)}
                                    placeholder="Zip Code"

                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">   <Label htmlFor="zip_code">Latitude</Label>
                                <Input
                                    id="latitude"
                                    value={data.latitude}
                                    onChange={(e) => setData('latitude', e.target.value)}
                                    className="pl-9"
                                /></div>
                            <div className="space-y-2"><Label htmlFor="longitude">Longitude</Label>
                                <Input
                                    id="longitude"
                                    value={data.longitude}
                                    onChange={(e) => setData('longitude', e.target.value)}
                                    className="pl-9"
                                />
                            </div>


                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="website">Description</Label>
                            <div className="relative">
                                <Textarea value={data.desc}
                                    placeholder="General Info"
                                    onChange={(e) => setData('desc', e.target.value)} />
                            </div>
                        </div>

                        {/* <div className="space-y-2">
                            <Label htmlFor="website">Website</Label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="website"
                                    defaultValue="https://dentalcare.com"
                                    className="pl-9"
                                />
                            </div>
                        </div> */}

                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="btn btn-primary mt-3">Update Information</Button>
                    </CardFooter>
                </Card>





            </form>

        </>
    )
}