import { FileText, Paperclip } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import PdfPreview from "../ui-ext/PdfPreview";

export default function SoAttachments({ attachments }) {

    const [open, setOpen] = useState(false);
    const [fileUrl, setFileUrl] = useState();
    return (
        <>
            <Card className="shadow-card">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Paperclip className="h-5 w-5" />
                        Attachments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {attachments.map((attachment, idx) => (
                            <Button variant="ghostlink" 
                                key={idx} target="_blank"
                                onClick={() => { setFileUrl(attachment.temporary_url); setOpen(true)}}
                            >
                                <FileText className="h-8 w-8 text-muted-foreground" />
                                {/* {JSON.stringify(attachment)} */}
                                <div className="  ">
                                    <span className="text-sm font-medium">{attachment.file_name}</span>
                                    {/* <span className="text-sm text-muted-foreground">{attachment.file_type} Document</span> */}
                                </div>
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <PdfPreview open={open} 
            fileUrl={fileUrl}
            onOpenChange={() => {
                setFileUrl("");
                setOpen(false)}}
                
                />
        </>
    )

}