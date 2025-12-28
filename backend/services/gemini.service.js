/**
 * Gemini AI Service – BASIC & STABLE VERSION
 * ------------------------------------------
 * This version uses:
 * - Official @google/generative-ai SDK
 * - Fixed model: gemini-1.5-flash (free tier)
 * - No auto-detection
 * - No REST calls
 * - No ListModels
 *
 * This is the MOST RELIABLE setup.
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ GEMINI_API_KEY is missing in .env");
}

// Create Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use ONE known-good model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

/**
 * Generate text from Gemini
 * @param {string} prompt
 * @returns {Promise<string>}
 */
async function generateText(prompt) {
  try {
    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("❌ Gemini generateText error:", error.message);
    throw new Error("Gemini AI failed to generate content");
  }
}

module.exports = {
  generateText
};
