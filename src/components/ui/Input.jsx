


const Input = ({title,id,value,onChange,type="text"}) => {
    return(
        <div className='input-group'>
            <label htmlFor="name">{title}</label>
            <input type={type} name={id}
                id={id} value={value}
                onChange={onChange}
            />
        </div>
    );
}


export default Input;