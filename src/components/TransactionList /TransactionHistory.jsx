import transactions from './data/transactions.json';

const TransactionHistory = () => {
  const tracsaction = transactions.map();
  return (
    <>
      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </>
  );
};
