/**
 * Mengamankan serialisasi JSON-LD agar terhindar dari script breakout XSS (e.g. </script> injection)
 * Mengikuti rekomendasi OWASP untuk pencegahan XSS pada inline application/ld+json.
 */
export function safeJsonLdReplacer(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
