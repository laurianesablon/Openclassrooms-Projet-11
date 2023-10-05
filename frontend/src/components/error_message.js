export function ErrorMessage({ message }) {
  return (
    <div className="error_message">
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{message}</p>
    </div>
  );
}
