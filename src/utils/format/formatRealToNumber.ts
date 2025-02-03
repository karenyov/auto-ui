export function formatRealToNumber(value: string) {
  return Number(value.replace(".", "").replace(",", ".").replace("R$ ", ""));
}