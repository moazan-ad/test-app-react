/* eslint-disable react/prop-types */
const Input = ({
    title,
    id,
    value,
    onChange,
    type="text",
    error
}) => {
    return(
        <div className='input-group'>
            <label htmlFor="name">{title}</label>
            <input type={type} name={id}
                id={id} value={value}
                onChange={onChange}
            />
            <div className="error">
            {
                (error.set === true && error.errorField === id) ? 
                error.message : null
            }
            </div>
        </div>
    );
}


export default Input;