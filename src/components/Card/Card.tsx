import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  height: 132px;
  padding: 12px;
  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 14px;
`;

const ChipWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

const CardText = styled.span`
  display: inline-block;
  color: #ffffff;
  margin: 8px 8px 0 0;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface CardProps {
  cardNumbers: Record<number, string>;
  expiredDate: Record<number, string>;
  cardOwnerName: string;
}

const Card = ({ cardNumbers, expiredDate, cardOwnerName }: CardProps) => {
  return (
    <>
      <Wrapper>
        <ChipWrapper>
          <Chip />
          <TextWrapper>
            <CardText>{cardNumbers[0]}</CardText>
            <CardText>{cardNumbers[1]}</CardText>
            <CardText>{'•'.repeat(cardNumbers[2].length)}</CardText>
            <CardText>{'•'.repeat(cardNumbers[3].length)}</CardText>
          </TextWrapper>
          <TextWrapper>
            <CardText>{cardOwnerName || 'NAME'}</CardText>
            <CardText>
              {expiredDate[0] || 'MM'} / {expiredDate[1] || 'YY'}
            </CardText>
          </TextWrapper>
        </ChipWrapper>
      </Wrapper>
    </>
  );
};

export default Card;