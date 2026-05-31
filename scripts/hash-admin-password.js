#!/usr/bin/env node
const bcrypt = require("bcryptjs");

const password = process.argv[2] || process.env.ADMIN_PASSWORD;
if (!password) {
  console.error("Usage: node scripts/hash-admin-password.js <password>");
  process.exit(1);
}

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
    process.exit(1);
  }
  console.log(hash);
});
