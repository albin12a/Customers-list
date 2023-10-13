/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Modal } from "react-bootstrap";
import "./ModalForm.scss";
import LabelInputField from "../../../../Components/LabelInputField";

const ModalForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailErr && !nameErr) console.log(props?.data);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    props?.updatedHandler(name, value?.trimStart());
  };

  const nameErr = useMemo(() => {
    return !props?.selectedData?.name;
  }, [props?.selectedData?.name]);

  const emailErr = useMemo(() => {
    return !props?.selectedData?.email;
  }, [props?.selectedData?.email]);
  return (
    <div className="modal-section">
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <LabelInputField
            label="Name:"
            type="text"
            name="name"
            value={props?.selectedData?.name}
            onChange={onChangeHandler}
            error={nameErr}
            errorMsg="*Name is required"
          />
          <LabelInputField
            label="Email:"
            type="text"
            name="email"
            value={props?.selectedData?.email}
            onChange={onChangeHandler}
            error={emailErr}
            errorMsg="*Email is required"
          />
          <LabelInputField
            label="Channel:"
            type="text"
            name="channel"
            value={props?.selectedData?.channel}
            onChange={onChangeHandler}
          />
          <LabelInputField
            label="Address:"
            type="text"
            name="address"
            value={props?.selectedData?.address}
            onChange={onChangeHandler}
          />
          <LabelInputField
            label="Postal:"
            type="text"
            name="postal"
            value={props?.selectedData?.postal}
            onChange={onChangeHandler}
          />
          <LabelInputField
            label="City:"
            type="text"
            name="city"
            value={props?.selectedData?.city}
            onChange={onChangeHandler}
          />
          <LabelInputField
            label="Province:"
            type="text"
            name="province"
            value={props?.selectedData?.province}
            onChange={onChangeHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" disabled={nameErr || emailErr}>
            Submit
          </button>
        </Modal.Footer>
      </form>
    </div>
  );
};
export default ModalForm;
