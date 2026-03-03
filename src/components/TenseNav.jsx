import { TENSE_ORDER } from '../data/index.js'

export function TenseNav({ verb, activeTense, onChange }) {
  const available = TENSE_ORDER.filter(t => verb.tenses[t])

  return (
    <div className="flex gap-2 flex-wrap">
      {available.map(t => {
        const tenseData = verb.tenses[t]
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={[
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border',
              activeTense === t
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700',
            ].join(' ')}
          >
            {tenseData.label}
            <span className="text-xs ml-1.5 opacity-60">{tenseData.label_cy}</span>
          </button>
        )
      })}
    </div>
  )
}
