/**
 * Auth helpers
 */

export const isLoggedIn = () =>
  typeof window !== "undefined" && !!localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

/**
 * Decode JWT payload to get role
 */
export const getRole = (): string | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
};
