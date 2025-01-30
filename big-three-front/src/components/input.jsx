export function Input({
  name,
  required = false,
  placeholder,
  inputValue,
  type,
  onChange,
  ...inputProps
}) {
  //changes the color of the title depending on the variant

  return (
    <fieldset>
      <label htmlFor={name}>
        <input
          name={name}
          required={required}
          type={type}
          id={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
          {...inputProps}
        ></input>
      </label>
    </fieldset>
  );
}

export function Select({
  name,
  options,
  inputValue,
  onChange,
  type,
  placeholder,
  required,
  label,
  ...selectProps
}) {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
