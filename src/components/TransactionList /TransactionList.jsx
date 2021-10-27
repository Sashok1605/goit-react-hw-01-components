import TransactionHistory from '../TransactionHistory/TransactionHistory';
import s from './TransactionList.module.css';
const TransactionList = ({ transactions }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.title}>
          <th className={s.text}>Type</th>
          <th className={s.text}>Amount</th>
          <th className={s.text}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transactions.map(transaction => (
          <TransactionHistory key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
