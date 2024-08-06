// components/Notification.js
export default function Notification({ message, show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed top-16 right-16 z-50">
      <div className="bg-green-500 text-white px-4 py-2 rounded shadow-lg">
        {message}
        <button onClick={onClose} className="ml-4">
          X
        </button>
      </div>
    </div>
  );
}