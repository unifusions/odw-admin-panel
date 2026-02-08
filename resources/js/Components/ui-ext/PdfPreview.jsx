 import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

export default function PdfPreview ({open, onOpenChange, fileUrl}) {
   
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
       
        
        <DialogContent className="p-5    max-w-7xl rounded-none">
           
          <DialogHeader>
            <DialogTitle>File Preview</DialogTitle>
            
          </DialogHeader>
          {/* <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4"> */}
             <iframe
        src={fileUrl}
        className="w-full h-[42rem] border rounded"
      />
        
        {/* </div>
             */}
          <DialogFooter>
            <Button variant="ghost" onClick={ onOpenChange}><X  /> Close</Button>
          </DialogFooter>
        </DialogContent>
     
    </Dialog>
  )
}
 