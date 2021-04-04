export default function Label({
  children,
  className = ''
}) {
  return (
    <div className={`font-mono my-4 border-white text-white ${className}`}>
      <span className="border-b-2 pb-2" style={{ borderColor: 'inherit' }}>
        {children}
      </span>
    </div>
  );
}