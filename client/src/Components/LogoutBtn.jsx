

export default function LogoutBtn({logout}) {
  return (
    <button
      onClick={logout}
      className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-[#1d1d1f] to-[#434343] text-white rounded-xl transition-all from-[#1d1d1f] to-[#434343] text-white hover:scale-[1.02]"
    >
      Logout
    </button>
  );
}