import bod from './verbs/bod.json'
import mynd from './verbs/mynd.json'
import dod from './verbs/dod.json'
import gwneud from './verbs/gwneud.json'
import cael from './verbs/cael.json'
import siarad from './verbs/siarad.json'
import cerdded from './verbs/cerdded.json'
import rhedeg from './verbs/rhedeg.json'
import bwyta from './verbs/bwyta.json'
import yfed from './verbs/yfed.json'
import hoffi from './verbs/hoffi.json'
import caru from './verbs/caru.json'
import casau from './verbs/casau.json'
import gallu from './verbs/gallu.json'
import gorfod from './verbs/gorfod.json'
import rhoi from './verbs/rhoi.json'
import cymryd from './verbs/cymryd.json'
import aros from './verbs/aros.json'
import gweld from './verbs/gweld.json'
import clywed from './verbs/clywed.json'
import gwybod from './verbs/gwybod.json'
import adnabod from './verbs/adnabod.json'
import meddwl from './verbs/meddwl.json'
import credu from './verbs/credu.json'
import helpu from './verbs/helpu.json'
import prynu from './verbs/prynu.json'
import gwerthu from './verbs/gwerthu.json'
import talu from './verbs/talu.json'
import darllen from './verbs/darllen.json'
import ysgrifennu from './verbs/ysgrifennu.json'
import gwrando from './verbs/gwrando.json'
import edrych from './verbs/edrych.json'
import colli from './verbs/colli.json'
import dechrau from './verbs/dechrau.json'
import gorffen from './verbs/gorffen.json'
import agor from './verbs/agor.json'
import cau from './verbs/cau.json'
import byw from './verbs/byw.json'
import dysgu from './verbs/dysgu.json'
import deall from './verbs/deall.json'
import cofio from './verbs/cofio.json'
import anghofio from './verbs/anghofio.json'
import gweithio from './verbs/gweithio.json'
import newid from './verbs/newid.json'
import symud from './verbs/symud.json'
import cyrraedd from './verbs/cyrraedd.json'
import gadael from './verbs/gadael.json'
import cysgu from './verbs/cysgu.json'
import deffro from './verbs/deffro.json'
import sefyll from './verbs/sefyll.json'
import eistedd from './verbs/eistedd.json'
import chwarae from './verbs/chwarae.json'
import ennill from './verbs/ennill.json'
import tyfu from './verbs/tyfu.json'
import chwilio from './verbs/chwilio.json'
import marw from './verbs/marw.json'

export const verbs = [
  bod, mynd, dod, gwneud, cael, siarad,
  cerdded, rhedeg, bwyta, yfed, hoffi,
  caru, casau, gallu, gorfod, rhoi, cymryd, aros,
  gweld, clywed, gwybod, adnabod, meddwl, credu, helpu,
  prynu, gwerthu, talu, darllen, ysgrifennu, gwrando,
  edrych, colli, dechrau, gorffen, agor, cau, byw, dysgu,
  deall, cofio, anghofio, gweithio, newid,
  symud, cyrraedd, gadael, cysgu, deffro,
  sefyll, eistedd, chwarae, ennill, tyfu, chwilio, marw,
]

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
