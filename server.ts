import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("herbal_hub.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    benefits TEXT,
    price_ugx INTEGER,
    price_ssp INTEGER,
    price_kes INTEGER,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS practitioners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    country TEXT NOT NULL,
    location TEXT,
    contact TEXT,
    rating REAL DEFAULT 5.0,
    verified INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    practitioner_id INTEGER,
    customer_name TEXT,
    customer_email TEXT,
    booking_date TEXT,
    status TEXT DEFAULT 'pending'
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT,
    date TEXT,
    image_url TEXT
  );
`);

// Seed data if empty
const productCount = db.prepare("SELECT COUNT(*) as count FROM products").get() as { count: number };
if (productCount.count === 0) {
  const insertProduct = db.prepare(`
    INSERT INTO products (name, category, description, benefits, price_ugx, price_ssp, price_kes, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertProduct.run("Moringa Leaf Powder", "Immune Boosters", "Pure organic Moringa leaves from Uganda.", "Rich in antioxidants, boosts energy.", 25000, 1500, 800, "https://picsum.photos/seed/moringa/400/400");
  insertProduct.run("Hibiscus Herbal Tea", "Herbal Teas", "Refreshing tea from South Sudanese hibiscus flowers.", "Lowers blood pressure, aids digestion.", 15000, 1000, 500, "https://picsum.photos/seed/hibiscus/400/400");
  insertProduct.run("Shea Butter Gold", "Skin & Hair Remedies", "Traditional Nilotica Shea Butter from Northern Uganda.", "Deep moisturizing, heals scars.", 35000, 2000, 1200, "https://picsum.photos/seed/shea/400/400");
  insertProduct.run("Kenyan Neem Oil", "Natural Oils", "Cold-pressed Neem oil from the Kenyan coast.", "Anti-fungal, treats skin infections.", 20000, 1200, 700, "https://picsum.photos/seed/neem/400/400");
}

const practitionerCount = db.prepare("SELECT COUNT(*) as count FROM practitioners").get() as { count: number };
if (practitionerCount.count === 0) {
  const insertPractitioner = db.prepare(`
    INSERT INTO practitioners (name, specialty, country, location, contact, rating, verified)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  insertPractitioner.run("Dr. Okello John", "Bone Setting & Herbalism", "Uganda", "Gulu City", "+256 700 000000", 4.8, 1);
  insertPractitioner.run("Mama Nyaboke", "Fertility & Women's Health", "Kenya", "Kisii Town", "+254 700 000000", 4.9, 1);
  insertPractitioner.run("Ustaz Deng", "General Wellness", "South Sudan", "Juba", "+211 900 000000", 4.5, 1);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
  });

  app.get("/api/practitioners", (req, res) => {
    const practitioners = db.prepare("SELECT * FROM practitioners").all();
    res.json(practitioners);
  });

  app.post("/api/bookings", (req, res) => {
    const { practitioner_id, customer_name, customer_email, booking_date } = req.body;
    const info = db.prepare(`
      INSERT INTO bookings (practitioner_id, customer_name, customer_email, booking_date)
      VALUES (?, ?, ?, ?)
    `).run(practitioner_id, customer_name, customer_email, booking_date);
    res.json({ id: info.lastInsertRowid });
  });

  app.get("/api/blog", (req, res) => {
    const posts = db.prepare("SELECT * FROM blog_posts").all();
    res.json(posts);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
