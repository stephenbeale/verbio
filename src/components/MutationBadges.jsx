const MUTATION_LABELS = {
  soft:      { label: 'Soft', cy: 'Treiglad Meddal' },
  nasal:     { label: 'Nasal', cy: 'Treiglad Trwynol' },
  aspirate:  { label: 'Aspirate', cy: 'Treiglad Llaes' },
}

export function MutationBadges({ mutations }) {
  if (!mutations) return null

  const entries = Object.entries(mutations).filter(([, v]) => v !== null)
  if (entries.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {entries.map(([type, form]) => (
        <div key={type} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
          <span className="text-xs text-slate-400">{MUTATION_LABELS[type]?.label ?? type}</span>
          <span className="text-sm font-semibold text-emerald-400">{form}</span>
        </div>
      ))}
    </div>
  )
}
