import axios from "axios";
import { useState, useEffect } from "react";
import TableList from "../../Components/Table";
import "./Home.scss";
import ModalWrapper from "../../Components/Modal";
import ModalForm from "./Components/ModalForm";
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://waveaccounting.github.io/se-challenge-fe-customers/settings.json"
      )
      .then((response) => {
        setData(response?.data?.customers);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const setSelectedHandler = (item) => {
    setSelectedData(item);
    handleModal()
  };
  const updatedHandler = (key, value) => {
    setSelectedData((prev) => ({ ...prev, [key]: value }));
  };
  return (console.log(selectedData),
    <>
      <div className="main-wrapper">
        <h3 className="title">Customer Information</h3>
        <TableList
          data={data}
          handleModal={handleModal}
          setSelectedHandler={setSelectedHandler}
        />
      </div>
      <ModalWrapper show={showModal} handleModal={handleModal}>
        <ModalForm selectedData={selectedData} updatedHandler={updatedHandler} />
      </ModalWrapper>
    </>
  );
};
export default Home;
