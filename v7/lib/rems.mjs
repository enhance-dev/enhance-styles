export default function rems (state={}) {
  const { config={}, value=0 } = state
  const { base=16 } = config
  return `${Math.round((value / base) * 1000) / 1000}rem`
}
