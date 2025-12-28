const { askGemini } = require("../services/gemini.service");

/**
 * AI playlist optimization
 */
exports.optimize = async (req, res) => {
  const prompt = `
You are an expert digital signage strategist.

Given this playlist and context, optimize:
- Media order
- Durations
- Best times of day

Context:
${JSON.stringify(req.body, null, 2)}

Return actionable suggestions.
`;

  const response = await askGemini(prompt);
  res.json({ response });
};
