//onClick function activated when button clicked,
//variant of button,
//label is the text within the button,
//type is the html tag to use,

export function Button({
  onClick,
  role = "button",
  type = "btnAnchor",
  children,
  ...restProps
}) {
  if (type == "btnAnchor") {
    return (
      <a href="#" type={role} onClick={onClick} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button type={role} onClick={onClick} {...restProps}>
        {children}
      </button>
    );
  }
}
