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

export function DialectSwitch({ value, onChange }) {
  const isSingle = value !== 'both'
  const active = value === 'both' ? 'north' : value

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Dialect</span>
      {isSingle ? (
        <button
          onClick={() => onChange(active === 'north' ? 'south' : 'north')}
          className="flex items-center rounded-full bg-slate-800 border border-slate-700 text-sm font-medium overflow-hidden"
          aria-label={`Switch to ${active === 'north' ? 'South' : 'North'} dialect`}
        >
          <span className={`px-3 py-1 transition-colors ${active === 'north' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
            North
          </span>
          <span className={`px-3 py-1 transition-colors ${active === 'south' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
            South
          </span>
        </button>
      ) : (
        <span className="text-sm text-slate-300 font-medium">Both</span>
      )}
    </div>
  )
}

export function RegisterSwitch({ value, onChange }) {
  const isSingle = value !== 'both'
  const active = value === 'both' ? 'informal' : value

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Register</span>
      {isSingle ? (
        <button
          onClick={() => onChange(active === 'informal' ? 'formal' : 'informal')}
          className="flex items-center rounded-full bg-slate-800 border border-slate-700 text-sm font-medium overflow-hidden"
          aria-label={`Switch to ${active === 'informal' ? 'formal' : 'informal'} register`}
        >
          <span className={`px-3 py-1 transition-colors ${active === 'informal' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
            Informal
          </span>
          <span className={`px-3 py-1 transition-colors ${active === 'formal' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
            Formal
          </span>
        </button>
      ) : (
        <span className="text-sm text-slate-300 font-medium">Both</span>
      )}
    </div>
  )
}

export function ShowAllToggle({ dialect, register, onDialectChange, onRegisterChange }) {
  const showingAll = dialect === 'both' && register === 'both'

  function toggle() {
    if (showingAll) {
      onDialectChange('north')
      onRegisterChange('informal')
    } else {
      onDialectChange('both')
      onRegisterChange('both')
    }
  }

  return (
    <button
      onClick={toggle}
      className={[
        'text-xs font-medium px-3 py-1 rounded-full border transition-colors',
        showingAll
          ? 'border-blue-500 text-blue-400 bg-blue-600/10'
          : 'border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-600',
      ].join(' ')}
    >
      {showingAll ? 'Focused view' : 'Show all variants'}
    </button>
  )
}
