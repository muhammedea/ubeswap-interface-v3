import { Currency, Token } from '@ubeswap/sdk-core'
import CurrencySearchModal from 'components/SearchModal/CurrencySearchModal'
import { t } from 'i18n'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { List } from 'ui/src/components/icons'
import CurrencyLogo from '../CurrencyLogo'

import { ReactComponent as Close } from '../../assets/images/x.svg'
import { CurrencySelect } from './CurrencySelect'

const StyledList = styled(List)`
  align-self: flex-start;
  flex-shrink: 0;
  fill: ${({ theme }) => theme.neutral2};
`

interface Props {
  onTokenSelect: (token: Currency | null) => void
  token?: Token | null
}

const Aligner = styled.span`
  display: flex;
  align-items: center;
`

const CloseIcon = styled.div`
  margin-left: 12px;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 16px;
  padding: 5px 7px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &:active {
    transform: rotate(360deg);
  }
  transition-duration: 1s;
  transition-property: transform;
`

const CloseColor = styled(Close)`
  transform: translateX(-2px);
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledTokenName = styled.span<{ active?: boolean }>`
  ${({ active }) => (active ? '  margin: 0 0.25rem 0 0.75rem;' : '  margin: 0 0.25rem 0 0.25rem;')}
  font-size:  ${({ active }) => (active ? '20px' : '16px')};
`

export default function TokenSelect(props: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <>
      <Aligner>
        <CurrencySelect
          selected={!props.token}
          className="open-currency-select-button"
          onClick={() => {
            setModalOpen(true)
          }}
        >
          <Aligner>
            {props.token ? (
              <>
                <CurrencyLogo currency={props.token} size="24px" />
                <StyledTokenName> {props.token.symbol} </StyledTokenName>
              </>
            ) : (
              <>
                <StyledList size={16} />
                <StyledTokenName>{t`Token`}</StyledTokenName>
              </>
            )}
          </Aligner>
        </CurrencySelect>
        {props.token && (
          <CloseIcon onClick={() => props.onTokenSelect(null)}>
            <CloseColor />
          </CloseIcon>
        )}
      </Aligner>

      <CurrencySearchModal
        isOpen={modalOpen}
        onDismiss={handleDismissSearch}
        onCurrencySelect={props.onTokenSelect}
        selectedCurrency={props?.token}
        // showCommonBases={true}
      />
    </>
  )
}
