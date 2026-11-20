// CREDex presentation content. Every string here is copied from the site as it is:
// the CREDex card in index.html (eyebrow, stat labels) and the case-study hero in cred.html
// (title, summary, fact cards, "At a glance" numbers). Nothing is written fresh for the popup.
export const credProject = {
  id: 'cred',
  label: 'CREDex: putting idle savings to work',
  href: 'cred.html',
  eyebrow: 'CRED · Recent · Concept',
  title: 'CREDex: putting idle savings to work',
  summary:
    'A new CRED feature that shows how much money is sitting idle in savings, and lets people put some of it to work without locking it away.',
  image: { src: 'assets/v2/cred-cred-banner.jpg', alt: 'CREDex app screens' },
  facts: [
    ['Role', 'Research and design, end to end'],
    ['Product', 'CRED · personal finance'],
    ['Type', 'New feature in an existing app'],
    ['Goal', 'Retention and revenue'],
  ],
  stats: [
    ['₹50k–2L', 'Idle in savings'],
    ['5', 'Behaviour patterns'],
    ['8', 'Screens in the core flow'],
  ],
  tags: ['Fintech', 'Research'],
  cta: 'Read full case study',
};
