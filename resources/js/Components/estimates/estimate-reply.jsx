import { Send, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "@inertiajs/react";
import FileUploader from "../FileUploader";

export default function EstimateReply({estimate}){

    const { data, post, processing, errors, reset, setData } = useForm({
            message: "",
            estimation: null
        });
    
     const onsubmit = (e) => {
        e.preventDefault();

        post(route('estimates.replies.store', estimate), {
            forceFormData: true,
            
        });

    }

    return (
        <Card className="shadow-card">
    <form onSubmit={onsubmit}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Prepare Estimate Response
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              
                <div className="space-y-2">
                  <Label htmlFor="response">Response to Patient *</Label>
                  <Textarea
                    id="response"
                    placeholder="Enter your detailed response including cost breakdown, insurance coverage details, payment options, and any additional notes..."
                      value={data.message}

                     onChange={(e) => setData('message', e.target.value)}
                    rows={6}
                  />
                </div>

                  <div className="space-y-2">
                    <Label htmlFor="response">Upload detailed Estimate *</Label>
                  <FileUploader onFileSelect={(file) => setData('estimation', file)} selectedFile={data.estimation} />
                </div>

                <div className="flex gap-2 justify-end">
                 
                  <Button 
                  type="submit"
                //   onClick={handleSendResponse} 
                //   disabled={!responseText.trim()}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Estimate
                  </Button>
                </div>
              </CardContent>
              </form>   
            </Card>
    )
}