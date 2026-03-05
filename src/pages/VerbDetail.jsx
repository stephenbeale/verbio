import { useParams, Link } from 'react-router-dom'
import { verbs } from '../data/index.js'
import { useFilters } from '../hooks/useFilters.js'
import { TenseNav } from '../components/TenseNav.jsx'
import { ToggleGroup } from '../components/ToggleGroup.jsx'
import { ConjugationTable } from '../components/ConjugationTable.jsx'
import { MutationBadges } from '../components/MutationBadges.jsx'

export function VerbDetail() {
  const { id } = useParams()
  const verb = verbs.find(v => v.id === id)
  const { dialect, setDialect, register, setRegister, tense, setTense } = useFilters()

  if (!verb) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Verb not found: <strong>{id}</strong></p>
          <Link to="/" className="text-blue-400 hover:underline">← Back to verbs</Link>
        </div>
      </div>
    )
  }

  const tenseData = verb.tenses[tense]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="bg-slate-800/80 border-b border-slate-700 backdrop-blur sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="text-slate-400 hover:text-slate-200 transition-colors p-1 -ml-1 rounded"
            aria-label="Back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold leading-tight">{verb.infinitive}</h1>
            <p className="text-sm text-slate-400">{verb.meaning}</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Mutations */}
        {verb.mutations && (
          <section>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Mutations
            </h2>
            <MutationBadges mutations={verb.mutations} />
          </section>
        )}

        {/* Notes */}
        {verb.notes && (
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-3">
            {verb.notes}
          </p>
        )}

        {/* Tense picker */}
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Tense
          </h2>
          <TenseNav verb={verb} activeTense={tense} onChange={setTense} />
        </section>

        {/* Dialect & Register toggles */}
        <div className="grid grid-cols-2 gap-4">
          <ToggleGroup
            label="Dialect"
            value={dialect}
            onChange={setDialect}
            options={[
              { value: 'north', label: 'N' },
              { value: 'south', label: 'S' },
              { value: 'both',  label: 'Both' },
            ]}
          />
          <ToggleGroup
            label="Register"
            value={register}
            onChange={setRegister}
            options={[
              { value: 'formal',   label: 'Formal' },
              { value: 'informal', label: 'Informal' },
              { value: 'both',     label: 'Both' },
            ]}
          />
        </div>

        {/* Conjugation table */}
        <section className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white">
              {tenseData?.label}
            </h2>
            <span className="text-sm text-slate-400">{tenseData?.label_cy}</span>
          </div>
          {tenseData ? (
            <ConjugationTable
              tenseData={tenseData}
              dialect={dialect}
              register={register}
            />
          ) : (
            <p className="text-slate-500 text-sm">No data for this tense.</p>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-700 text-center px-4 py-6 text-xs text-slate-500">
        Verbio is free and open source.{' '}
        <a href="https://buymeacoffee.com/stephenbeale" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 no-underline">
          Buy me a coffee
        </a>
        {' · '}
        Practising with a native speaker?{' '}
        <a href="LEBARA_REFERRAL_URL" target="_blank" rel="noopener noreferrer" className="text-slate-400 underline hover:text-slate-300">
          Lebara
        </a>
        {' '}has cheap international calls.
      </footer>
    </div>
  )
}
