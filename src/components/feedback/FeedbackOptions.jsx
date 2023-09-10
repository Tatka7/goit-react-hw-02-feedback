import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysArr = Object.keys(options);
  return (
    <ul className={css.list}>
      {keysArr.map(elem => {
        return (
          <li key={elem}>
            <button
              type="button"
              className={css.btn}
              onClick={() => onLeaveFeedback(elem)}
            >
              {elem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
