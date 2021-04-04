import Button from "./Button";

export default function TurquoiseButton({
  active,
  ...props
}) {
  return <Button {...props} className={`hover:bg-turkuaz hover:text-black hover:border-turkuaz ${active ? 'bg-turkuaz text-black border-turkuaz' : ''} ${props.className || ''}`} />
}