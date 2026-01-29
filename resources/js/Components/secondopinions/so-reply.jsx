import { useForm } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Send, XCircle } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import FileUploader from "../FileUploader";

export default function SoReply({ so, isDisabled }) {
    const { data, post, processing, errors, reset, setData } = useForm({
        message: "",
        opinion: null
    });
    const onsubmit = (e) => {
        e.preventDefault();

        post(route('second-opinion.replies.store', {second_opinion:so}), {
            forceFormData: true,
            
        });

    }

    return (
        <>
            <Card className="shadow-card">
              
                <form onSubmit={onsubmit}>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Write Response
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="response">Response to Patient *</Label>
                        <Textarea
                            id="response"
                            placeholder="Enter your professional opinion, recommendations, and any additional notes..."
                             value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            rows={6}
                        />
                    </div>

                    <div className="space-y-2">
                         <Label htmlFor="">Attach File(if any)</Label>
                        <FileUploader onFileSelect={(file) => setData('opinion', file)} selectedFile={data.opinion} />

                    </div>
                    <div className="flex gap-2 justify-end">
                      
                        <Button 
                        type="submit"
                        //   disabled={!responseText.trim()}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send Response
                        </Button>
                    </div>
                </CardContent>
                </form>
            </Card>
        </>
    )
}