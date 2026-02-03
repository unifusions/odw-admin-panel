
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Field, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { Calendar } from "@/Components/ui/calendar";
import { DateRangePicker } from "@/Components/ui/date-range-picker";
import { Button } from "@/Components/ui/button";
import { X } from "lucide-react";
import { Textarea } from "@/Components/ui/textarea";
import SubmitButton from "@/Components/ui-ext/SubmitButton";


export default function Edit() {


    const { deal } = usePage().props;

    const { data, setData, processing, put, errors, reset } = useForm({
        title: deal.title || '',
        description: deal.description || '',
        start_date: deal.start_date || '',
        end_date: deal.end_date || '',
        image: deal.image || '',
    });
    const [dateRange, setDateRange] = useState({
        from: data.start_date,
        to: data.end_date
    });
    const formatDate = (date) => date.toISOString().split('T')[0];

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


        put(route('deals.update', deal), {
            forceFormData: true,
            
        });

    }

    return (
        <AuthenticatedLayout header="Deals" pageTitle="Edit Deal">
            {/* <Head title="Create Deal" /> */}
            {/* <PageHeader title="Create Deal" /> */}
            {/* <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Edit Deal</h1>
                <DeleteConfirmModal item={deal} processUrl="deals.destroy" category="Deal" />

            </DisplayFlex> */}
            <form onSubmit={onSubmit}>
  <Card>
                    <CardContent>
       <div className='grid grid-cols-2 gap-6'>
     
                    <Column lg={6} className="mb-3">
                        <ServiceImageHeaderUploader 
                        onFileSelect={(file) => setData('image', file)}
                        existingImage={deal.image_url}
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
                                                  actionText="Update Deal"
                      
                                              />
                      
                    </CardFooter>
                </Card>
           
                
            </form>
        </AuthenticatedLayout>
    )
}