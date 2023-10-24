import styled from '@emotion/styled/macro';

import { colors, variables } from '@/styles/variables';

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <HeaderContainer>
      <Inner>
        {title}
      </Inner>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  color: #fff;
  background-color: #222;
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${variables['max-width']};
  margin: 0 auto;
  background-color: $black;
  color: #fff;
  z-index: 900;

  .header-left {
    flex: 0 0 94px;
  }
  .button-back {
    width: 30px;
    height: 30px;
    i {
      color: #fff;
    }
  }
  .button-wrapper {
    display: flex;
    column-gap: 5px;
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #fff;
    }
    .button-home {
      width: 30px;
      height: 30px;
    }
    .button-like {
      width: 30px;
      height: 30px;
    }
    .button-cart {
      width: 30px;
      height: 30px;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${variables['header-height']};
  padding: 0 10px;
`;
