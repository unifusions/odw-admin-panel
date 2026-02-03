
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { Field, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { DateRangePicker } from "@/Components/ui/date-range-picker";
import { Button } from "@/Components/ui/button";
import { X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Textarea } from "@/Components/ui/textarea";
import SubmitButton from "@/Components/ui-ext/SubmitButton";

export default function Create() {

    const [loading, setLoading] = useState(false);
    const [dateRange, setDateRange] = useState( );

    const { data, setData, processing, post, error, reset } = useForm({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        image: '',
    });

    // const formatDate = (date) => date.toISOString().split('T')[0];
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
};
    const handleDateChange = (selectedRange) => {
    setDateRange(selectedRange);
 

     setData({
        ...data,
        start_date: selectedRange.from ? formatDate(selectedRange.from) : '',
        end_date: selectedRange.to ? formatDate(selectedRange.to) : '',
    });

};

    const onSubmit = (e) => {
        e.preventDefault();

        

        post(route('deals.store'), {
            forceFormData: true,

        });

    }

    return (
        <AuthenticatedLayout header="Deals"
            pageTitle="Create New Deal"
        >


            <form onSubmit={onSubmit}>
                <Card>
                    <CardContent>
       <div className='grid grid-cols-2 gap-6'>
     
                    <Column lg={6} className="mb-3">
                        <ServiceImageHeaderUploader onFileSelect={(file) => setData('image', file)}
                        />

                    </Column>
                    <div className="space-y-2">
                        <Field>
                            <FieldLabel htmlFor="">
                                Title
                            </FieldLabel>
                            <Input

                                placeholder=""
                                onChange={(e) => setData('title', e.target.value)}
                                value={data.title}
                            />
                        </Field>

                        <Field>
                            <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Description" />
                            <div className="col-sm-9">
                                <Textarea
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="form-control "
                                    placeholder="Description"
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                            </div>

                        </Field>

                        <div className="row mb-4">

                            <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Duration" />
                            <div className=" ">
                                <DateRangePicker
                                    dateRange={dateRange}
                                    onDateRangeChange={handleDateChange}
                                    placeholder={dateRange}
                                    className="w-11/12"
                                />
                                {dateRange && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9"
                                        onClick={() => setDateRange(undefined)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                )}




                            </div>


                        </div>


                    </div>

                 
                  </div> 
                    </CardContent>
                    <CardFooter className="border-t border-border">
                         <SubmitButton
                                                    processing={processing}
                                                    actionText="Save Deal"
                        
                                                />
                        
                      
                    </CardFooter>
                </Card>
           


            </form>
        </AuthenticatedLayout>
    )
}