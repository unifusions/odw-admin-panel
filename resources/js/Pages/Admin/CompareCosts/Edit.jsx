
import Checkbox from "@/Components/Checkbox";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/Components/ui/combobox";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { LoaderIcon } from "lucide-react";


export default function Edit() {
    const { care, selectedCategories, categories } = usePage().props;
    const anchor = useComboboxAnchor();


    const { data, setData, put, processing, errors } = useForm({
        code: care.code || '',
        name: care.name || '',
        medical_name: care.medical_name || '',
        categories: selectedCategories,
        national_cost: care.national_cost || '',
        odw_cost: care.odw_cost || '',
        is_featured: care.featured

    })

    const onServiceSelect = (values) => {
        if (values === null) return;

        // If user cleared everything
        if (values.length === 0) {
            setData('categories', selectedCategories);
            return;
        }

        
        else {
            console.log(values.length);
            // setData('categories', (prev) => {
            //     const prevMap = new Map(prev.map(i => [i.value, i]));
            //     const nextMap = new Map(values.map(i => [i.value, i]));

            //     // Toggle behavior
            //     for (const [value, item] of nextMap.entries()) {
            //         if (prevMap.has(value)) {
            //             prevMap.delete(value);
            //         } else {
            //             prevMap.set(value, item);
            //         }
            //     }

            //     return Array.from(prevMap.values());
            // });
            setData('categories', values);
        }
    }

        const onSubmit = (e) => {
            e.preventDefault();
            put(route('compare-costs.update', care));

        }

        return (
            <AuthenticatedLayout header="Compare Cost"
                pageTitle="Edit Service"
            >

 

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
                                            <Input placeholder="D0120" value={data.code}
                                                onChange={(e) => setData('code', e.target.value)} />
                                            <FieldDescription>CDT procedure code</FieldDescription>
                                        </FieldContent>


                                    </Field>
                                </FieldGroup>



                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Category</FieldLabel>  <FieldContent>
                                            <Combobox
                                                ref={anchor}
                                                multiple
                                                value={data.categories}
                                                onValueChange={onServiceSelect}
                                                items={categories}
                                                 defaultValue={data.categories}
                                            >
                                                <ComboboxChips>
                                                    <ComboboxValue>
                                                        {data?.categories.map((item) => (
                                                            <ComboboxChip key={item}>{item.label}</ComboboxChip>
                                                        ))}
                                                    </ComboboxValue>
                                                    <ComboboxChipsInput placeholder="Add framework" />
                                                </ComboboxChips>
                                                <ComboboxContent>
                                                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                                                    <ComboboxList>
                                                        {(item) => (
                                                            <ComboboxItem key={item.value} value={item}>
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
                            <Button type="submit" >{processing && <LoaderIcon className="size-4 animate-spin" />}Update</Button>
                        </CardContent>
                    </Card>



                   
                </form>
            </AuthenticatedLayout>
        )
    }