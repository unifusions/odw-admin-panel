export default function InputError({ message, className = '', ...props }) {
    return message ? (

        <span  {...props} class="invalid-feedback">{message}</span>
     
    ) : null;
}
