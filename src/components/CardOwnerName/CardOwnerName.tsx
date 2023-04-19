import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const CardOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');
  const cardOwnerNameRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.target.value.length === 0) setOwnerName('');
    if (!/[A-Za-z\s]+$/.test(e.target.value)) return;

    setOwnerName(e.target.value.toUpperCase());
  };

  return (
    <>
      <CardLabel labelText="카드 소유자 이름(선택)" />
      <Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={cardOwnerNameRef}
          onChange={handleCardInputChange}
          value={ownerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
          required={false}
        />
      </Wrapper>
    </>
  );
};

export default CardOwnerName;