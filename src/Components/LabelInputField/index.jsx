/* eslint-disable react/prop-types */
import "./LabelInputField.scss";
const LabelInputField = (props) => {
  return (
    <div className="form-section">
      {!!props?.label && <label>{props?.label}</label>}
      <input
        className={`${!!props?.error && "err-field"}`}
        type={props?.type}
        value={props?.value}
        name={props?.name}
        onChange={props?.onChange}
      />
      {!!props?.error && <span>{props?.errorMsg}</span>}
    </div>
  );
};
export default LabelInputField;
