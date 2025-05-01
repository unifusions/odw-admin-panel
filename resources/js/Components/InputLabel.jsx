export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={  className 
                +
                `form-label`
              
            }
        >
            {value ? value : children}
        </label>
    );
}
