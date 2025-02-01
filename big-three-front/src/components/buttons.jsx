//onClick function activated when button clicked,
//variant of button,
//label is the text within the button,
//type is the html tag to use,

export function Button({
  onClick,
  role,
  type = "btnAnchor",
  children,
  href,
  disabled = false,
  ...restProps
}) {
  if (type == "btnAnchor") {
    return (
      <a
        href={href}
        onClick={onClick}
        type={role}
        {...restProps}
        disabled={disabled}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button type={role} onClick={onClick} {...restProps} disabled={disabled}>
        {children}
      </button>
    );
  }
}
