function Input({ label, register, name, error, ...rest }) {
  return (
    <div>
      <div>
        {label} {!!error && <span> - {error} </span>}
      </div>
      <div>
        <input {...register(name)} {...rest} />
      </div>
    </div>
  );
}

export default Input;
