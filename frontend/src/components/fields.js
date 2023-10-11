function FormFields({ name, label, value, onChange, className }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={`${name}-input`}>{label}</label>
      <input
        name={name}
        type="text"
        id={`${name}-input`}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={className}
      />
    </div>
  );
}

export default FormFields;
