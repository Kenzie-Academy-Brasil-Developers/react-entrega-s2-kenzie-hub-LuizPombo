import Modal from "../Modal";

function Card({
  title,
  status,
  onClick,
  remover,
  sendUpdate,
  register,
  modal,
  id,
  token,
}) {
  return (
    <div>
      <p>{title}</p>
      <p>status: {status}</p>
      <button onClick={onClick}>update</button>
      <button onClick={remover}>Delete</button>
      <Modal
        sendUpdate={sendUpdate}
        title={title}
        status={status}
        register={register}
        modal={modal}
        id={id}
        token={token}
      />
    </div>
  );
}

export default Card;
