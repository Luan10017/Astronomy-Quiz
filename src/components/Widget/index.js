import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({theme}) => theme.colors.secondary};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input`
  width: 283px;
  height: 36px;
  margin: 30px auto 25px;
  padding: 8px 16px;
  background-color: ${({theme}) => theme.colors.mainBg};
  border: 1px solid #8D8B89;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.contrastText};
  opacity: 70%;
`;

Widget.Button = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 283px;
  height: 36px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.contrastText};
`;

export default Widget;