// ISO 3166-1 alpha-2 codes — génère les noms via Intl.DisplayNames
const ISO_CODES = [
  'AF','AL','DZ','AD','AO','AG','AR','AM','AU','AT','AZ',
  'BS','BH','BD','BB','BY','BE','BZ','BJ','BT','BO','BA','BW','BR','BN','BG','BF','BI',
  'CV','KH','CM','CA','CF','TD','CL','CN','CO','KM','CG','CD','CR','CI','HR','CU','CY','CZ',
  'DK','DJ','DM','DO',
  'EC','EG','SV','GQ','ER','EE','SZ','ET',
  'FJ','FI','FR',
  'GA','GM','GE','DE','GH','GR','GD','GT','GN','GW','GY',
  'HT','HN','HU',
  'IS','IN','ID','IR','IQ','IE','IL','IT',
  'JM','JP','JO',
  'KZ','KE','KI','KW','KG',
  'LA','LV','LB','LS','LR','LY','LI','LT','LU',
  'MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','MX','MD','MC','MN','ME','MA','MZ','MM',
  'NA','NP','NL','NZ','NI','NE','NG','NO',
  'OM',
  'PK','PW','PA','PG','PY','PE','PH','PL','PT',
  'QA',
  'RO','RU','RW',
  'KN','LC','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','SK','SI','SB','SO','ZA','SS','ES','LK','SD','SR','SE','CH','SY',
  'TW','TJ','TZ','TH','TL','TG','TO','TT','TN','TR','TM',
  'UG','UA','AE','GB','US','UY','UZ',
  'VU','VE','VN',
  'YE',
  'ZM','ZW',
];

export type Country = { code: string; name: string };

export function getCountries(locale: string): Country[] {
  const displayNames = new Intl.DisplayNames([locale], { type: 'region' });
  const list = ISO_CODES
    .map(code => ({ code, name: displayNames.of(code) ?? code }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));

  // Pays francophones en tête
  const preferred = ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'SN', 'CI', 'MA'];
  const top = preferred
    .map(code => list.find(c => c.code === code))
    .filter(Boolean) as Country[];
  const rest = list.filter(c => !preferred.includes(c.code));

  return [...top, { code: '---', name: '─────────────' }, ...rest];
}
