const { PrismaClient } = require("@jakemcguire55/triplej-gs-database");
const prisma = new PrismaClient();
const express = require("express");
const { authenticationToken, authorizeRoles } = require("../../middleware/authMiddleware");
const router = express.Router();

module.exports = router;