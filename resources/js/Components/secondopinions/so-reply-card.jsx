import { CheckCircle, Paperclip, XCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function SoReplyCard({opinion}){
    return (
        <Card className="shadow-card border-2 border-success/30 bg-success/5"
                         >
                            <CardHeader>
                                <CardTitle className= "text-lg flex items-center gap-2 text-success">
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
                                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{ opinion.replies.file_name } </span>
                                </div>
                            </CardFooter>
                        </Card>
    )
}