// src/components/Profile.jsx
import useCurrentTime from "../hooks/useCurrentTime";

export default function Profile() {
  const time = useCurrentTime();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-semibold">User: Himanshi Bajaj</h2>
      <p className="text-gray-600 mt-2">Current Time: {time}</p>
    </div>
  );
}
