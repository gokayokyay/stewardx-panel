export default function Button({
  children,
  className = '',
  disabled = false,
  onClick = f => f,
  ...props
}) {
  const classNames = `${className} ${disabled ? 'pointer-events-none' : ''}`;
  const onClickHandler = (...params) => {
    if (!disabled) {
      onClick(...params);
    }
  };
  return(
    <div {...props} onClick={onClickHandler} className={`transition-all border-2 border-white ${className.includes(' text-') ? '' : 'text-white'} p-4 cursor-pointer flex justify-center items-center ${classNames}`}>
      {children}
    </div>
  );
}