export function ToggleGroup({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
      <div className="flex rounded-lg overflow-hidden border border-slate-700">
        {options.map((opt, i) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={[
              'flex-1 py-2 px-3 text-sm font-medium transition-colors',
              i > 0 ? 'border-l border-slate-700' : '',
              value === opt.value
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700',
            ].join(' ')}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
