import { t } from 'i18n'
import { darken } from 'polished'
import { ArrowLeft } from 'react-feather'
import { Link as HistoryLink, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { flexRowNoWrap } from 'theme/styles'

import Row, { RowBetween } from '../Row'
// import QuestionHelper from '../QuestionHelper'
// import Settings from '../Settings'

const Tabs = styled.div`
  ${flexRowNoWrap};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${flexRowNoWrap};
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text3};
  font-size: 20px;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const ActiveText = styled.div`
  font-weight: 500;
  font-size: 20px;
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.text1};
`

const AbsoluteHistoryLink = styled(HistoryLink)`
  position: absolute;
  left: 1rem;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' | 'send' }) {
  return (
    <Tabs style={{ marginBottom: '20px', display: 'none' }}>
      <StyledNavLink id="swap-nav-link" to="/swap">
        {t`Swap`}
      </StyledNavLink>
      <StyledNavLink id="pool-nav-link" to="/pool">
        {t`Pool`}
      </StyledNavLink>
    </Tabs>
  )
}

export function FindPoolTabs() {
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem 1rem 0 1rem' }}>
        <HistoryLink to="/pool">
          <StyledArrowLeft />
        </HistoryLink>
        <ActiveText>{t`Import Pool`}</ActiveText>
        {/* <Settings /> */}
      </RowBetween>
    </Tabs>
  )
}

export function ProposalTabs() {
  return (
    <Tabs>
      <Row padding="1rem 1rem 0 1rem">
        <Row justify="center">
          <AbsoluteHistoryLink to="/stake">
            <StyledArrowLeft />
          </AbsoluteHistoryLink>
          <ActiveText>Create Proposal</ActiveText>{' '}
        </Row>
      </Row>
    </Tabs>
  )
}
