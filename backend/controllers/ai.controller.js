const geminiService = require("../services/gemini.service");

/**
 * POST /api/ai/generate
 */
async function generate(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await geminiService.generateText(prompt);
    res.json({ response });
  } catch (error) {
    console.error("AI generate error:", error.message);
    res.status(500).json({ error: "AI generation failed" });
  }
}

/**
 * POST /api/ai/diagnose
 */
async function diagnose(req, res) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await geminiService.generateText(
      `You are a system diagnostic AI. User message: ${message}`
    );

    res.json({ response });
  } catch (error) {
    console.error("AI diagnose error:", error.message);
    res.status(500).json({ error: "AI diagnose failed" });
  }
}

module.exports = {
  generate,
  diagnose
};
