export const formatAmount = (amount: number) => {
  // new BigNumber(amount)
  return amount.toLocaleString()
}
export const abbreviation = (address: string, sLen = 6, eLen = 4) => {
  return address?.slice(0, sLen) + '...' + address?.slice(-eLen)
}
export const formatNumber = (num: number, decimals = 2) => {
  const str = num.toFixed(decimals).toString()
  const parts = str.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
