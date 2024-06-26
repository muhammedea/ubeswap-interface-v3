import { CurrencyAmount, Token } from '@ubeswap/sdk-core'
import QuestionHelper from 'components/QuestionHelper'

interface Props {
  userAmountTokenA: CurrencyAmount<Token> | undefined
  userAmountTokenB: CurrencyAmount<Token> | undefined
}

export default function StakedAmountsHelper({ userAmountTokenA, userAmountTokenB }: Props) {
  return userAmountTokenA && userAmountTokenB ? (
    <QuestionHelper text={`${formatStakedAmount(userAmountTokenA)} | ${formatStakedAmount(userAmountTokenB)}`} />
  ) : null
}

export function SingleStakedAmountsHelper({ userAmountToken }: { userAmountToken: CurrencyAmount<Token> | undefined }) {
  return userAmountToken ? <QuestionHelper text={`${formatStakedAmount(userAmountToken)}`} /> : null
}

// Format amount based on the size, when under 1 show significant digits, when 1 to 10 show 1 decimal, over 10 round
function formatStakedAmount(tokenAmmount?: CurrencyAmount<Token>) {
  const amount = tokenAmmount?.lessThan('1')
    ? tokenAmmount.toSignificant(2)
    : tokenAmmount?.toFixed(tokenAmmount?.lessThan('10') ? 1 : 0, { groupSeparator: ',' })
  return `${amount} ${tokenAmmount?.currency.symbol}`
}
