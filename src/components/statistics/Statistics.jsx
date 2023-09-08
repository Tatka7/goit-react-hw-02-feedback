import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <p className={css.item}>Good: {good}</p>
      </li>
      <li>
        <p className={css.item}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.item}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.item}>Total: {total}</p>
      </li>
      <li>
        <p className={css.item}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
