import { Calendar, FileText, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function QuickActions () {
    return (
        <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                                <Mail className="h-4 w-4 mr-2" />
                                Email Patient
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <FileText className="h-4 w-4 mr-2" />
                                View Patient Records
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Consultation
                            </Button>
                        </CardContent>
                    </Card>
    )
}