import bod from './verbs/bod.json'
import mynd from './verbs/mynd.json'
import dod from './verbs/dod.json'
import gwneud from './verbs/gwneud.json'
import cael from './verbs/cael.json'
import siarad from './verbs/siarad.json'

export const verbs = [bod, mynd, dod, gwneud, cael, siarad]

export const TENSE_ORDER = ['present', 'past', 'imperfect', 'future', 'conditional']

export const PERSON_LABELS = {
  '1sg':   { en: '1st sg', cy: '1af un.' },
  '2sg':   { en: '2nd sg', cy: '2il un.' },
  '3sg_m': { en: '3rd sg (m)', cy: '3ydd un. (g)' },
  '3sg_f': { en: '3rd sg (f)', cy: '3ydd un. (b)' },
  '1pl':   { en: '1st pl', cy: '1af ll.' },
  '2pl':   { en: '2nd pl', cy: '2il ll.' },
  '3pl':   { en: '3rd pl', cy: '3ydd ll.' },
}
