import { CheckCircle, Paperclip } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "@inertiajs/react";

export default function EstimateReplied({reply}){
    return (
         <Card className= "shadow-card border-2 border-success/30"
             >
              <CardHeader>
                <CardTitle className= 
                  "text-lg flex items-center gap-2 text-success"
                 >
                  
                    <CheckCircle className="h-5 w-5" />
                   
                    One Dental World Response 
                </CardTitle>
              </CardHeader>
              <CardContent>
                 
                <p className="text-sm">{reply?.reply_message}</p>

              </CardContent>

              <CardFooter>
                                <div className="flex items-center gap-3">
                                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                                    <a href={reply.file_url} target="_blank">
                                     <span className="text-sm">{ reply.file_name } </span>
                                    </a>
                                   
                                </div>
                            </CardFooter>
            </Card>
    )
}