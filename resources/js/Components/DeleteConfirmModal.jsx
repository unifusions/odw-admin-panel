import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
 
} from "@/components/ui/dialog"
 

export default function DeleteConfirmModal({ itemName,  category, onConfirm, dialogOpen, setDialogOpen  }) {
  
   
  return (
    <Dialog  open={dialogOpen} onOpenChange={setDialogOpen}>
         

       
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete {category}</DialogTitle>
            <DialogDescription>
             Are you sure, you want to delete <b> {itemName} </b>?
            </DialogDescription>
          </DialogHeader>
                
        
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant ="destructive"  onClick={onConfirm}>Delete</Button>
          </DialogFooter>
        </DialogContent>
       
    </Dialog>
  )
}
