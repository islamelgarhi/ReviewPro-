export async function runMigrations(db) {
  // Add any new migrations here
  const migrations = [
    // Migration 1: Add user roles
    `ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user'`,
    
    // Migration 2: Add review categories
    `CREATE TABLE IF NOT EXISTS review_categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    
    // Migration 3: Add review responses
    `CREATE TABLE IF NOT EXISTS review_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      review_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      status TEXT DEFAULT 'draft',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (review_id) REFERENCES reviews (id)
    )`
  ];

  for (const migration of migrations) {
    try {
      await db.exec(migration);
    } catch (error) {
      // Skip if table/column already exists
      if (!error.message.includes('duplicate column')) {
        throw error;
      }
    }
  }
}