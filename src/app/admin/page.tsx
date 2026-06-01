export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🔒</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Private Dashboard (System Concept)</h1>
        <p className="text-white/60 mb-8">
          This is a conceptual placeholder for a future CMS that will allow updating projects, skills and certifications directly. 
        </p>
        <p className="text-sm text-white/40">Authentication required. Access denied.</p>
      </div>
    </div>
  );
}
