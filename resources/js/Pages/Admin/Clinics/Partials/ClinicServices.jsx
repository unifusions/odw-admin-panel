
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Switch } from "@/Components/ui/switch";
import { useForm } from "@inertiajs/react";
import {  Stethoscope } from "lucide-react";

export default function ClinicServices({ clinic, services, selectedservices }) {


    const { data, setData, post, processing, errors, reset } = useForm({

        categories: selectedservices || [],

    });
    const handleCategorySelect = (itemId) => {

        let updatedItems;

        if (data.categories.includes(itemId)) {
            updatedItems = data.categories.filter(id => id !== itemId);
        } else {
            updatedItems = [...data.categories, itemId];
        }

        setData('categories', updatedItems);

    };
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('clinics.updateServices', clinic), {
            preserveScroll: true
        });

    }

    return (
        <form onSubmit={onSubmit}>
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        Available Treatments
                    </CardTitle>
                    <CardDescription>
                        Set your clinic's treatment services
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-4 gap-6">
                        {services.map((category) => {
                            const isSelected = data.categories.includes(category.id);

                            return (


                                <div key={category.id} className="flex items-center gap-2">



                                    <Switch
                                        
                                        className="form-check-input"
                                        checked={isSelected}    
                                        onCheckedChange={() => handleCategorySelect(category.id)}
                                    />   {category.name}

                                </div>
                            )
                        })}
                    </div>

                </CardContent>
                <CardFooter>
                    <Button  type="submit">Update Treatments</Button>
                </CardFooter>
            </Card>

        </form>
    )
}