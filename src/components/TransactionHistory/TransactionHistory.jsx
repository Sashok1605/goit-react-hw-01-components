import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ transaction }) => {
  return (
    <>
      <tr>
        <td className={s.list}>{transaction.type}</td>
        <td className={s.list}>{transaction.amount}</td>
        <td className={s.list}>{transaction.currency}</td>
      </tr>
    </>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}.isRequired;

export default TransactionHistory;
