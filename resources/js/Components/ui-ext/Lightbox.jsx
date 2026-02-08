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

export default function LightBox ({open, onOpenChange, img}) {
   
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
       
        
        <DialogContent className=" max-w-md">
           
          <DialogHeader>
            <DialogTitle>Image Preview</DialogTitle>
            
          </DialogHeader>
                <img src={img} alt="" className="" />
          <DialogFooter>
            <Button variant="ghost" onClick={ onOpenChange}><X  /> Close</Button>
          </DialogFooter>
        </DialogContent>
     
    </Dialog>
  )
}
 