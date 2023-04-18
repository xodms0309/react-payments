import styled from 'styled-components';
import CardNumberInput from '../components/CardNumberInput/CardNumberInput';
import CardLabel from '../components/CardLabel/CardLabel';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const AddCard = () => {
  return (
    <>
      <CardLabel labelText="카드 번호" />
      <Wrapper>
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
      </Wrapper>
    </>
  );
};

export default AddCard;
