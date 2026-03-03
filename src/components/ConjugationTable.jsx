import { PERSON_LABELS } from '../data/index.js'

const PERSONS = Object.keys(PERSON_LABELS)

function Cell({ value }) {
  if (!value) return <td className="px-3 py-2 text-slate-500 text-sm">—</td>

  const parts = value.split(' / ')
  return (
    <td className="px-3 py-2">
      <span className="text-slate-100 font-medium text-sm">{parts[0]}</span>
      {parts[1] && (
        <span className="text-slate-400 text-xs ml-1">/ {parts[1]}</span>
      )}
    </td>
  )
}

function SingleTable({ dialectLabel, data, showPersonLabels }) {
  return (
    <div className="flex-1 min-w-0">
      {dialectLabel && (
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 px-1">
          {dialectLabel}
        </div>
      )}
      <table className="w-full text-left border-collapse">
        <tbody>
          {PERSONS.map((person, i) => {
            const value = data?.[person]
            if (!value && !showPersonLabels) return null
            return (
              <tr key={person} className={i % 2 === 0 ? 'bg-slate-800/50' : ''}>
                <td className="px-3 py-2 text-xs text-slate-400 whitespace-nowrap w-20">
                  {PERSON_LABELS[person].en}
                </td>
                <Cell value={value} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export function ConjugationTable({ tenseData, dialect, register }) {
  const showNorth = dialect === 'north' || dialect === 'both'
  const showSouth = dialect === 'south' || dialect === 'both'
  const showFormal = register === 'formal' || register === 'both'
  const showInformal = register === 'informal' || register === 'both'
  const sideBySide = showNorth && showSouth

  const sections = []
  if (showNorth && showFormal)   sections.push({ key: 'nf', dialect: 'north', register: 'formal',   label: sideBySide ? 'North — Formal'   : 'Formal' })
  if (showNorth && showInformal) sections.push({ key: 'ni', dialect: 'north', register: 'informal', label: sideBySide ? 'North — Informal' : 'Informal' })
  if (showSouth && showFormal)   sections.push({ key: 'sf', dialect: 'south', register: 'formal',   label: sideBySide ? 'South — Formal'   : null })
  if (showSouth && showInformal) sections.push({ key: 'si', dialect: 'south', register: 'informal', label: sideBySide ? 'South — Informal' : null })

  if (sideBySide) {
    const pairs = []
    if (showFormal)   pairs.push(['nf', 'sf'])
    if (showInformal) pairs.push(['ni', 'si'])

    return (
      <div className="space-y-6">
        {pairs.map(([nKey, sKey]) => {
          const nSec = sections.find(s => s.key === nKey)
          const sSec = sections.find(s => s.key === sKey)
          const isInformal = nKey === 'ni'
          return (
            <div key={nKey}>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {isInformal ? 'Informal' : 'Formal'}
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {nSec && (
                  <SingleTable
                    dialectLabel="North"
                    data={tenseData?.north?.[nSec.register]}
                    showPersonLabels={true}
                  />
                )}
                {sSec && (
                  <SingleTable
                    dialectLabel="South"
                    data={tenseData?.south?.[sSec.register]}
                    showPersonLabels={true}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {sections.map(sec => (
        <div key={sec.key}>
          {sec.label && (
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {sec.label}
            </div>
          )}
          <SingleTable
            dialectLabel={null}
            data={tenseData?.[sec.dialect]?.[sec.register]}
            showPersonLabels={true}
          />
        </div>
      ))}
    </div>
  )
}
