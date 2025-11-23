export default function ProfilePage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-black px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Your profile</h1>
        <p className="mt-2 text-sm text-slate-400">
          This is a placeholder for the VeeSave user profile experience. In the
          full build, this will show your vehicles, plans, contact details, and
          preferences.
        </p>
      </div>
    </div>
  );
}