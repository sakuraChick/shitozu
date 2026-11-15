function Input({ id, label, type = "text", ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </>
  )
}

export default Input;
