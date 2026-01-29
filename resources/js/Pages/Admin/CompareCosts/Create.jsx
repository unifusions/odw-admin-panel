
import { Column, DisplayFlex, Row } from "@/Components/Components";
 
import PageHeader from "@/Components/PageHeader";
 
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldTitle } from "@/Components/ui/field";
 
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
 
import { Input } from "@/Components/ui/input";
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxValue } from "@/Components/ui/combobox";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import Spinner from "@/Components/Spinner";
import { LoaderIcon } from "lucide-react";
export default function Create() {
    const { categories } = usePage().props;
     

    const { data, setData, post, processing, errors } = useForm({
        code: '',
        name: '',
        medical_name: '',
        categories: [],
        national_cost: '',
        odw_cost: '',
        is_featured: false,
    })

    const onServiceSelect = (selectedOptions) => {
        setData('categories', selectedOptions);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('compare-costs.store'));

    }

    return (
        <AuthenticatedLayout header="Compare Cost">
            <Head title="Compare Costs" />
            <PageHeader ></PageHeader>
            <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Create Service</h1>

            </DisplayFlex>

            <form onSubmit={onSubmit} >
                <Card>
                    <CardHeader>
                        <CardTitle>Create New Dental Care</CardTitle>
                    </CardHeader>

                    <CardContent  >
                        <div className="grid gap-4 sm:grid-cols-2 mb-5">

                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Code *</FieldLabel>
                                    <FieldContent>
                                        <Input placeholder="D0120" 
                                        value={data.code}
                                        onChange={(e)=> setData('code', e.target.value)}
                                        />
                                        <FieldDescription>CDT procedure code</FieldDescription>
                                    </FieldContent>


                                </Field>
                            </FieldGroup>



                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Category</FieldLabel>  <FieldContent>
                                        <Combobox
                                            multiple
                                            value={data.categories}
                                            onValueChange={onServiceSelect}
                                            items={categories}
                                            itemToStringValue={(framework) => framework.label}
                                        >
                                            <ComboboxChips>
                                                <ComboboxValue>
                                                    {data.categories.map((item) => (
                                                        <ComboboxChip key={item}>{item.label}</ComboboxChip>
                                                    ))}
                                                </ComboboxValue>
                                                <ComboboxChipsInput placeholder="Add framework" />
                                            </ComboboxChips>
                                            <ComboboxContent>
                                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                                <ComboboxList>
                                                    {(item) => (
                                                        <ComboboxItem key={item} value={item}>
                                                            {item.label}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxList>
                                            </ComboboxContent>
                                        </Combobox>
                                    </FieldContent>
                                </Field>

                            </FieldGroup>


                        </div>

                        <FieldGroup className="mb-5">
                            <Field>
                                <FieldLabel>Common Name *</FieldLabel>
                                <FieldContent>
                                    <Input value={data.name}
                                        placeholder="Name"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <FieldDescription>Display name for patients</FieldDescription>

                                </FieldContent>
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <FieldLabel>Medical Name *</FieldLabel>
                                <FieldContent>
                                    <Input value={data.medical_name}
                                        placeholder="Name"
                                        onChange={(e) => setData('medical_name', e.target.value)}
                                    />
                                    <FieldDescription>Official medical terminology</FieldDescription>
                                </FieldContent>
                            </Field>
                        </FieldGroup>


                        <div className="grid gap-4 sm:grid-cols-2 my-3">
                            <FieldGroup>

                                <Field>
                                    <FieldLabel>National Cost ($) *</FieldLabel>
                                    <FieldContent>
                                        <Input type="number" step="0.01" min="0"
                                            value={data.national_cost}
                                            placeholder=""
                                            onChange={(e) => setData('national_cost', e.target.value)}


                                        />
                                    </FieldContent>

                                </Field>

                            </FieldGroup>

                            <FieldGroup>


                                <Field>
                                    <FieldLabel>Our Cost ($) *</FieldLabel>
                                    <FieldContent>
                                        <Input type="number" step="0.01" min="0" value={data.odw_cost}
                                            placeholder=""
                                            onChange={(e) => setData('odw_cost', e.target.value)} />
                                    </FieldContent>

                                </Field>

                            </FieldGroup>

                            

                        </div>
<FieldLabel className="border-border mb-3">
                                <Field orientation="horizontal">
                                    <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" checked={data.is_featured}
                                        onCheckedChange={() => setData('is_featured', !data.is_featured)} />
                                    <FieldContent>
                                        <FieldTitle>Featured Service</FieldTitle>
                                        <FieldDescription>
                                            Display this service prominently
                                        </FieldDescription>
                                    </FieldContent>
                                </Field>
                            </FieldLabel>
 <Button  type="submit" >{processing &&  <LoaderIcon className="size-4 animate-spin"  />}Save</Button>
                    </CardContent>
                </Card>


 
                        

                       


                     
            </form>
        </AuthenticatedLayout>
    )
}