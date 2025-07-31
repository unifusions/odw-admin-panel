import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { id = '', type = 'text', className = '', label = '', isFocused = false, ...props },
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

    return (
        <>

            <label htmlFor={id} className='form-label'>{label}</label>


            <input
                {...props}
                type={type}
                className={
                    'form-control form-input-lg mb-3 ' +
                    className
                }
                ref={localRef}
            />

        </>

    );
});
