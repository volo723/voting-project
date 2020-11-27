/**
 * Signin form validation schema
 *
 * @type {Object}
 */
export const getMoneyString = (amount: number, currency: string): string => {
  let amountStr = '';
  if(amount >= 1000000000)
    amountStr = `${(amount / 1000000000).toFixed(2)} B`
  else if(amount >= 1000000)
    amountStr = `${(amount / 1000000).toFixed(2)} M`
  else
    amountStr = `${amount}`

  return `${currency}${amountStr}`;
}
