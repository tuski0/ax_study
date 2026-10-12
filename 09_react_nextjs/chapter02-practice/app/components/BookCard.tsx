interface BookCardProps {
  title: string;
  price: number;
  isAvailable: boolean;
}

export default function BookCard(props: BookCardProps) {
  return (
    <>
      <h1>도서 제목 : {props.title}</h1>
      <h1>가격 : {props.price}</h1>
      {props.isAvailable ? <h1>대출 가능</h1> : <h1>대출 중</h1>}
    </>
  );
}
