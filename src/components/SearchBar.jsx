export function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search verbs… e.g. bod, mynd, to go"
        className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}
