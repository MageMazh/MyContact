import styles from "./AddContact.module.css";
import { useState } from "react";

function AddContact(props) {
  const { contacts, setFilter, setContacts, setClick } = props;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const idValue = contacts[contacts.length - 1].id + 1;

  function handlePageClick(e) {
    e.preventDefault();
    setClick(false);
  }

  const handleFormClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleName(e) {
    e.preventDefault();
    setNameValue(e.target.value);
  }
  function handlePhone(e) {
    e.preventDefault();
    setPhoneValue(e.target.value);
  }

  function handleAddContact(e) {
    if (nameValue === "" || phoneValue === "") {
      window.alert("Field masih ada yang kosong");
      return;
    }
    e.preventDefault();
    setContacts((prev) => [
      ...prev,
      { id: idValue, name: nameValue, phone: phoneValue },
    ]);
    setFilter((prev) => [
      ...prev,
      { id: idValue, name: nameValue, phone: phoneValue },
    ]);

    setClick(false);

    setNameValue("");
    setPhoneValue("");
  }

  return (
    <div className={styles.backgroundopct} onClick={handlePageClick}>
      <form className={styles.form} onClick={handleFormClick}>
        <div className="subtitle">Daftar Kontak</div>
        <input
          type="text"
          placeholder="Name"
          className="bar"
          value={nameValue}
          maxlength="21"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="bar"
          maxlength="21"
          value={phoneValue}
          onChange={handlePhone}
        />

        <button className="submit" onClick={handleAddContact}>
          submit
        </button>
      </form>
    </div>
  );
}

export default AddContact;
