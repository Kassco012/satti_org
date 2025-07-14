import React from 'react';
import OrderCalculator from '../../components/OrderCalculator';

const Calculator = () => {
  return (
    <div className="pt-20"> {/* отступ сверху для фиксированного navbar */}
      <OrderCalculator />
    </div>
  );
};

export default Calculator;