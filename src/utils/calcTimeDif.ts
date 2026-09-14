export default function CalcTimeDifference(created_at): number {
  const now = new Date().getTime();
  const created = new Date(created_at).getTime();
  const timePast = now - created;
  const minutesPast = timePast / (1000 * 60);
  return minutesPast;
}
