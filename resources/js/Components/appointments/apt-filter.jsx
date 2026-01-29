import { Download, Filter, LayoutGrid, List, Search } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import { Button } from "../ui/button";

export default function AppointmentFilter({ viewMode, setViewMode }) {


    return (
        <Card className="shadow-card mb-6 py-0">
            <CardContent className="p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* <div className="flex flex-1 gap-3">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search by patient or type..."
                                //   value={searchQuery}
                                //   onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                        <Select
                        //    value={statusFilter} onValueChange={setStatusFilter}
                        >
                            <SelectTrigger className="w-[160px]">
                                <Filter className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}
                    <div className="flex gap-2 items-center">
                        <Tabs value={viewMode} onValueChange={setViewMode}>
                            <TabsList className="h-9">
                                <TabsTrigger value="list" className="gap-1.5 px-3">
                                    <List className="h-4 w-4" />
                                    List
                                </TabsTrigger>
                                <TabsTrigger value="calendar" className="gap-1.5 px-3">
                                    <LayoutGrid className="h-4 w-4" />
                                    Calendar
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                        {/* <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Export
                        </Button> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}