import { CheckCircle, Paperclip, XCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "@inertiajs/react";
import PdfPreview from "../ui-ext/PdfPreview";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SoReplyCard({ opinion }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Card className="shadow-card border-2 border-success/30 bg-success/5"
        >
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-success">
                    {opinion.status === "rejected" ? (
                        <XCircle className="h-5 w-5" />
                    ) : (
                        <CheckCircle className="h-5 w-5" />
                    )}
                    {opinion.status === "rejected" ? "Rejection Response" : "Expert Response"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm">{opinion.replies.reply_message}
                </p>
            </CardContent>
            <CardFooter>
                <div className="flex items-center gap-3">
                    <Button variant="link" onClick={() => setIsOpen(true)} target="_blank" className="flex items-center gap-2 hover:border-dark hover:border-border">


                        <Paperclip className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{opinion.replies.file_name} </span>
                    </Button>
                </div>


            </CardFooter>

            <PdfPreview open={isOpen} onOpenChange={() => setIsOpen(false)} fileUrl={opinion.replies.file_url} />
        </Card>
    )
}