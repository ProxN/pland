import styled, { css, th } from '@xstyled/styled-components';

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  padding: 0 1.4rem;
`;

export const NavLink = styled.a<{ active?: boolean }>`
  padding: 1.8rem 0;
  display: inline-block;
  font-family: ${th('fontFamily')};
  font-size: 1.4rem;
  font-weight: 500;
  user-select: none;
  text-transform: capitalize;
  position: relative;
  opacity: ${({ active }) => (active ? 1 : 0.72)};
  transition: all 200ms ease-in-out;

  ::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 0px;
    height: 2px;
    background: ${({ theme }) => theme.colors[theme.primary][6]};
    left: 0;
    transition: all 200ms ease-in-out;
    bottom: 0;
  }

  ${({ active }) =>
    active &&
    css`
      ::before {
        width: 100%;
      }
    `};
  :hover {
    opacity: 1;
  }
  :hover ::before {
    width: 100%;
  }
`;

export const Popover = styled.div`
  position: relative;
  margin-right: 1rem;
`;

export const PopoverContent = styled.div<{ width?: string }>`
  background: white;
  border-radius: sm;
  width: ${({ width }) => width || 'auto'};
  border: 1px solid;
  border-color: blackAlpha.3;
`;

export const PopoverBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionLink = styled.a<{ padding?: string; hover?: string }>`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem 1.6rem;
  cursor: pointer;
  opacity: 0.8;
  transition-property: default;
  transition-duration: normal;
  transition-timing-function: ease-in-out;

  svg {
    margin-right: 1rem;
  }

  :hover {
    opacity: 1;
    color: ${({ hover }) => (hover ? 'gray.8' : '#fff')};
    background: ${({ theme, hover }) =>
      hover ? theme.colors[hover][3] : theme.colors[theme.primary][6]};
  }
`;

export const Spliter = styled.div`
  height: 1px;
  width: 100%;
  background-color: blackAlpha.1;
`;
