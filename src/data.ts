export const profile = {
  name: 'Emon Bepari',
  initials: 'EB',
  title: 'AI Automation Engineer (n8n)',
  headline: 'Expert AI automation engineer.',
}

export const contact = {
  phone: '+8801630175225',
  phoneHref: 'tel:+8801630175225',
  whatsapp: 'https://wa.me/8801630175225',
  email: 'emon99284@gmail.com',
  facebook: 'https://www.facebook.com/share/14t48hS34wa/',
}

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/use-cases', label: 'Use cases' },
  { to: '/insights', label: 'Insights' },
]

export const stats = [
  { value: '100%', label: 'Response rate' },
  { value: '120x', label: 'ROI' },
  { value: '10x', label: 'Cost reduction' },
]

export const logos = [
  'Northline',
  'Helix Ops',
  'Vellum',
  'Bright Harbor',
  'Kite & Co.',
  'Lumen Labs',
]

export const integrations = ['Gmail', 'Slack', 'HubSpot', 'Sheets', 'Notion', 'WhatsApp']

export const howSteps = [
  {
    id: 'ingest',
    title: 'Connect & ingest',
    body: 'Link CRM, email, chat, and files. Incoming work becomes structured tasks your agents can act on in minutes.',
  },
  {
    id: 'watch',
    title: 'AI worker on watch',
    body: 'Agents draft replies, update records, chase follow-ups, and flag exceptions — 24/7, with a clear audit trail.',
  },
  {
    id: 'loop',
    title: 'Human in the loop',
    body: 'Your team approves the edge cases. Everything else ships. You keep judgment; the busywork disappears.',
  },
]

export const features = [
  {
    id: 'stack',
    title: 'Keep your existing stack',
    body: 'AI workers plug into the tools you already use so operators stay on customers, not click-work.',
    kind: 'stack' as const,
  },
  {
    id: 'scale',
    title: 'Scale without new hires',
    body: 'Order entry, follow-ups, and desk-side busywork run on autopilot as volume grows — capacity stays flat.',
    kind: 'photo' as const,
    tone: 'navy' as const,
  },
  {
    id: 'multi',
    title: 'Always-on multimodal reps',
    body: 'Email, voice, SMS, chat, and portal tickets land in one loop, keeping customers and partners in sync.',
    kind: 'multi' as const,
  },
  {
    id: 'knowledge',
    title: 'No more tribal knowledge',
    body: 'Playbooks live in the agent, not in someone’s head — so coverage never depends on who is online.',
    kind: 'photo' as const,
    tone: 'warm' as const,
  },
]

export const agents = [
  {
    name: 'Salesbot',
    role: 'Assists sales teams with smart automation',
    tags: ['Leads', 'CRM', 'Follow-up'],
  },
  {
    name: 'Inbox Copilot',
    role: 'Triages support and ops mail with draft-ready replies',
    tags: ['Email', 'SLA', 'Routing'],
  },
  {
    name: 'Ops Runner',
    role: 'Moves work across tools the moment a trigger fires',
    tags: ['Workflows', 'Docs', 'Alerts'],
  },
]

export const cases = [
  {
    slug: 'northline-revenue',
    client: 'Northline',
    sector: 'B2B services',
    title: 'A sales desk that never drops a lead',
    result: '3.4× more same-day follow-ups',
    summary:
      'I built an n8n closer that reads inbound mail, scores intent, updates HubSpot, and books the first call before a human is free.',
  },
  {
    slug: 'helix-ops',
    client: 'Helix Ops',
    sector: 'Operations',
    title: 'From messy inboxes to a living ops board',
    result: '18 hours/week returned',
    summary:
      'Intake, tagging, and status updates used to live in Slack threads. Now an agent files every request and pings owners only when judgment is needed.',
  },
  {
    slug: 'vellum-finance',
    client: 'Vellum',
    sector: 'Finance ops',
    title: 'Invoice chase without the chase',
    result: '41% faster collections',
    summary:
      'Reminders, portal checks, and exception notes run on a schedule. Controllers still approve write-offs — they just never hunt for the thread.',
  },
]

export const useCases = [
  {
    title: 'Revenue follow-up',
    body: 'Qualify, chase, and log every inbound lead across email and CRM.',
  },
  {
    title: 'Customer inbox',
    body: 'Triage tickets, draft replies, and keep SLAs visible without extra headcount.',
  },
  {
    title: 'Document intake',
    body: 'Read PDFs, extract fields, and push clean data into the systems of record.',
  },
  {
    title: 'Internal reporting',
    body: 'Assemble weekly packs from sheets, CRM, and chat — ready for a human glance.',
  },
  {
    title: 'Onboarding',
    body: 'Walk new clients through forms, checks, and kickoff tasks automatically.',
  },
  {
    title: 'Exception handling',
    body: 'Watch for stalled work and escalate with context, not another spreadsheet.',
  },
]

export const posts = [
  {
    title: 'What an AI workforce actually does on day one',
    date: 'Aug 2026',
    excerpt: 'Start with one inbox. Instrument the loop. Then expand to the adjacent tools.',
  },
  {
    title: 'Human-in-the-loop without slowing the line',
    date: 'Jul 2026',
    excerpt: 'Approvals should feel like a pause button, not a bottleneck.',
  },
  {
    title: 'How we measure automation ROI with operators, not dashboards',
    date: 'Jun 2026',
    excerpt: 'Hours returned and response latency beat vanity agent counts every time.',
  },
]
