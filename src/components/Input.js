import Label from "./Label";

export default function Input({
  label = null,
  labelProps = {},
  containerProps = {},
  onChange = f => f,
  className = '',
  placeholder = '',
  defaultValue = ''
}) {
  return (
    <div {...containerProps}>
      {label && (
        <Label {...labelProps}>
          {label}
        </Label>
      )}
      <input defaultValue={defaultValue} placeholder={placeholder} onChange={e => onChange(e.target.value)} className={`transition-all text-white bg-transparent border-b-2 border-opacity-0 border-white focus:border-opacity-100 hover:border-opacity-100 ${className}`} />
    </div>
  )
}