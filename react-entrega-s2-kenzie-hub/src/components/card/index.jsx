import Modal from "../Modal";

function Card({
  title,
  status,
  onClick,
  remover,
  sendUpdate,
  register,
  modal,
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
      />
    </div>
  );
}

export default Card;
