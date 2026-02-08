import { Building, Calendar, CreditCard, IdCard, Shield, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import LightBox from "../ui-ext/Lightbox";

export default function EstimateInsuranceCard ({ insurance }) {

      const [isOpen, setIsOpen] = useState(false);
const [lightboxsrc, setLightboxsrc] = useState();
    return (
        <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-primary" />
       Insurance Details
         
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h6>{insurance?.insurance_provider}</h6>
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{insurance?.first_name} {insurance?.last_name}</p>
              <p className="text-xs text-muted-foreground"> Insurance for {insurance?.relation}</p>
              <div className="flex items-center text-xs text-muted-foreground"> 
                <Calendar className="h-3" />
                 {insurance?.dob}</div>
            </div>
          </div>
           
        </div>

         <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-3">
             
            <div>
              <p className="font-medium text-sm">Address</p>
              <p className="text-xs text-muted-foreground"> {insurance?.address_line_1} 

<br/>
{insurance?.address_line_2}<br/> {insurance?.address_line_3} <br/>
    {insurance.city} - {insurance.zip_code}, {insurance.state }
 <br/> 
              </p>
            </div>
          </div>
           
        </div>


        <div className="grid grid-cols-2 gap-2">

            <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <IdCard className="h-3 w-3" />
              Member ID
            </div>
            <p className="text-xs font-medium truncate">{insurance?.member_id}</p>
          </div>

          <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <CreditCard className="h-3 w-3" />
              Plan #
            </div>
            <p className="text-xs font-medium truncate">{insurance?.plan_no}</p>
          </div>
          <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <Building className="h-3 w-3" />
              Carrier  
            </div>
            <p className="text-xs font-medium">{insurance?.carrier}</p>
          </div>

            <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <Building className="h-3 w-3" />
              Mode  
            </div>
            <p className="text-xs font-medium">{insurance?.mode}</p>
          </div>

        </div>

<div className="grid grid-cols-2 gap-1 border-t border-border py-3">
{insurance.attachments.length > 0 && 
    insurance.attachments.map((atx, id) =>  
        <img src={atx.temporary_url} alt="" className="h-40   object-contain cursor-pointer" onClick={() => { 
            setLightboxsrc(atx.temporary_url)
            setIsOpen(true)}}

        />
     )
}
</div>

       <LightBox open={isOpen}
       img={lightboxsrc}
        onOpenChange={() => {
         setLightboxsrc("")
        setIsOpen(false)}} />

        {/* <div className="flex items-center justify-between p-2 rounded-lg border">
          <span className="text-sm">Deductible: {insurance?.deductible}</span>
          {insurance?.deductibleMet ? (
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-xs text-success">Met</span>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground">Not Met</span>
          )}
        </div> */}


      </CardContent>
    </Card>
    )
} 