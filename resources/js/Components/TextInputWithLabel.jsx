import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Column, Row } from './Components';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { FieldDescription } from './ui/field';

export default forwardRef(function TextInput(


    { id = '', isSingleRow = false, errorMessage, additionalInfo     ,
        type = 'text', className = '', label = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);


    const BelowInput = () => { }
    return (

        <>

            {isSingleRow ?
                <>
                    <Row className={"mb-3"}>
                    <label htmlFor={id} className='col-sm-3 col-form-label form-label'>{label}</label>

                        <Column md={9}>
                        <input
                        {...props}
                        type={type}
                        className={
                            'form-control form-input-lg ' +
                            className
                        }
                        ref={localRef}

                        
                    />
                        {errorMessage && <span className='fs-10 text-danger'>{errorMessage}</span>}

                    {additionalInfo && (additionalInfo)}
                        </Column>
                    </Row>
                </>
                : <div className='space-y-2'>
                    <Label htmlFor={id} className='form-label'>{label}</Label>


                    <Input
                        {...props}
                        type={type}
                        className={cn(className)}
                        ref={localRef}
                    />
                    <FieldDescription>
                         {additionalInfo && (additionalInfo)}
                    </FieldDescription>
                </div>

            }


        </>

    );
});
