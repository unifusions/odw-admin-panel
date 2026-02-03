import { Button } from "../ui/button";
import { Loader } from 'lucide-react';

export default function SubmitButton({ actionText, icon: Icon, className, processing, ...props }) {
    return (
        <Button
            className={className}
            
        disabled={processing}
        type="submit"
        {...props}
        >
            {processing ? <Loader className="h-4 w-4 animate-spin"/> : <>
             {Icon && <Icon  className="h-4 w-4 mr-2" />}   
             {actionText}
        
            </>}
       </Button>
    )
}