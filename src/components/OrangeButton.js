import Button from "./Button";

export default function OrangeButton({
  active = false,
  ...props
}) {
  return <Button {...props} className={`hover:bg-orange-selected hover:text-black hover:border-orange-selected ${active ? 'bg-orange-selected text-black border-orange-selected' : ''} ${props.className || ''}`} />
}