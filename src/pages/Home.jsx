import { useState } from 'react'
import { Link } from 'react-router-dom'
import { verbs } from '../data/index.js'
import { SearchBar } from '../components/SearchBar.jsx'

const TYPE_COLOURS = {
  irregular: 'bg-amber-900/40 text-amber-300 border-amber-700',
  regular:   'bg-emerald-900/40 text-emerald-300 border-emerald-700',
}

const TAG_COLOURS = {
  essential:  'bg-blue-900/40 text-blue-300 border-blue-700',
  auxiliary:  'bg-purple-900/40 text-purple-300 border-purple-700',
  common:     'bg-slate-700 text-slate-300 border-slate-600',
}

export function Home() {
  const [query, setQuery] = useState('')

  const filtered = verbs.filter(v => {
    const q = query.toLowerCase()
    return (
      v.infinitive.toLowerCase().includes(q) ||
      v.meaning.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="bg-slate-800/80 border-b border-slate-700 backdrop-blur sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">V</div>
            <div>
              <h1 className="text-lg font-bold leading-none">Verbio</h1>
              <p className="text-xs text-slate-400">Welsh Verb Tables</p>
            </div>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {query === '' && (
          <p className="text-slate-400 text-sm mb-5">
            {verbs.length} verbs · tap any verb to see full conjugation tables
          </p>
        )}
        {filtered.length === 0 && (
          <p className="text-slate-500 text-center py-12">No verbs match "{query}"</p>
        )}

        <div className="space-y-2">
          {filtered.map(verb => (
            <Link
              key={verb.id}
              to={`/verb/${verb.id}`}
              className="block bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 hover:border-blue-500 hover:bg-slate-750 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {verb.infinitive}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded border font-medium ${TYPE_COLOURS[verb.type] ?? ''}`}>
                      {verb.type}
                    </span>
                    {verb.mutations?.soft && (
                      <span className="text-xs text-slate-400">
                        → <span className="text-emerald-400 font-medium">{verb.mutations.soft}</span>
                        <span className="ml-1 opacity-60">(soft)</span>
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-0.5">{verb.meaning}</p>
                  {verb.tags?.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {verb.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded border ${TAG_COLOURS[tag] ?? ''}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
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
