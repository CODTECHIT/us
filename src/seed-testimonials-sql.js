require('dotenv').config();
const mysql = require('mysql2/promise');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL not set in environment');
  process.exit(1);
}

function parseMysqlUrl(d) {
  const u = new URL(d);
  return {
    host: u.hostname,
    port: u.port ? parseInt(u.port, 10) : 3306,
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname ? u.pathname.replace(/^\//, '') : undefined,
  };
}

const rows = [
  {
    name: 'Team Fishel',
    position: '',
    company: 'Team Fishel',
    content:
      'Challenge: Hiring pipeline stalled for skilled electricians and field technicians, risking project delays. Approach: Focused sourcing on trade-certified candidates with verified field experience. Outcome: 7 placements completed within deadline.',
    avatar: null,
  },
  {
    name: 'INTELITY',
    position: '',
    company: 'INTELITY',
    content:
      'Challenge: Needed engineers who fit both technical stack and fast-paced culture. Approach: Targeted SaaS-experienced candidates with strong communication and async collaboration skills. Outcome: 4 roles filled with strong retention.',
    avatar: null,
  },
  {
    name: 'Ness Digital Engineering',
    position: '',
    company: 'Ness Digital Engineering',
    content:
      'Challenge: Urgent need for cloud and digital transformation engineers. Approach: Activated pre-vetted talent network and handled screening + coordination. Outcome: 6 contractors deployed within 3 weeks.',
    avatar: null,
  },
  {
    name: 'World Wide Technology',
    position: '',
    company: 'World Wide Technology',
    content:
      'Challenge: Needed high-caliber engineers meeting strict enterprise standards. Approach: Aligned sourcing with internal competency framework. Outcome: 8 roles filled successfully.',
    avatar: null,
  },
  {
    name: 'Nous Infosystems',
    position: '',
    company: 'Nous Infosystems',
    content:
      'Challenge: Managing bench utilization and project-based hiring pressure. Approach: Provided pre-screened profiles aligned to upcoming needs. Outcome: Improved readiness and reduced reactive hiring.',
    avatar: null,
  },
  {
    name: "McCormick’s Heating & Air Conditioning",
    position: '',
    company: "McCormick’s Heating & Air Conditioning",
    content:
      'Challenge: Difficulty sourcing certified HVAC technicians quickly. Approach: Focused on local sourcing and job-ready candidates. Outcome: 4 technicians placed restoring service capacity.',
    avatar: null,
  },
];

(async () => {
  const cfg = parseMysqlUrl(url);
  const conn = await mysql.createConnection({
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    database: cfg.database,
  });
  try {
    for (const r of rows) {
      const [res] = await conn.execute(
        'INSERT INTO Testimonial (id, name, position, company, content, avatar, createdAt) VALUES (UUID(), ?, ?, ?, ?, ?, NOW())',
        [r.name, r.position || null, r.company || null, r.content, r.avatar || null],
      );
      console.log('Inserted:', r.company || r.name);
    }
    console.log('✅ SQL seed complete');
  } catch (err) {
    console.error('SQL seed failed:', err.message || err);
  } finally {
    await conn.end();
  }
})();
