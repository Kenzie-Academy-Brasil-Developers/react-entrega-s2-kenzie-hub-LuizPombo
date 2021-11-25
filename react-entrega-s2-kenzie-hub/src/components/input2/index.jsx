function Input2({ title, status, register, ...rest }) {
  return (
    <div>
      <div>
        <input {...register(title)} placeholder="New tech" {...rest} />
        <input {...register(status)} placeholder="status" {...rest} />
      </div>
    </div>
  );
}

export default Input2;
