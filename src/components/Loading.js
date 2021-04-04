import './Loading.css';

export default function Loading({
  isLoaded = false
}) {
  return (
    <div className={`${isLoaded ? 'hidden loaded' : 'visible loading'}`}>
      <div className="border-2 border-white p-4">
        Loading...
      </div>
    </div>
  )
}