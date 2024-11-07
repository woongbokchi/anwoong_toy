import styles from './page.module.css';

async function TestAPI() {
  const response = await fetch('http://localhost:8080/react/api');

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const data = response.text();

  return <div>{data}</div>;
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>#Main</h2>
      <br />

      <p>백엔드에서 받아온 데이터 :</p>
      <TestAPI />
    </div>
  );
}
