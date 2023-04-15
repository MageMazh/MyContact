import styles from "./EditContact.module.css";
import { useState } from "react";

function EditContact(props) {
  const { id, name, phone, contacts, setIsEditMode, setFilter, setContacts } = props;
  const [nameValue, setNameValue] = useState(name);
  const [phoneValue, setPhoneValue] = useState(phone);

  function handlePageClick(e) {
    e.preventDefault();
    setIsEditMode(false);
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

  function handleEditContact(e) {
    if (nameValue === "" || phoneValue === "") {
      window.alert("Field masih ada yang kosong");
      return;
    }
    e.preventDefault();

    const updatedContact = { id: id, name: nameValue, phone: phoneValue };

    if (id === 1) {
      const updatedContacts = contacts.map((contact) => {
        if (contact.name === name) {
          return updatedContact;
        } else {
          return contact;
        }
      });
      setContacts(updatedContacts);
    } else {
      const updatedContacts = contacts.slice(1).map((contact) => {
        if (contact.name === name) {
          return updatedContact;
        } else {
          return contact;
        }
      });

      setFilter(updatedContacts);
      setContacts([contacts[0], ...updatedContacts]);
    }

    setIsEditMode(false);
    setNameValue("");
    setPhoneValue("");
  }

  return (
    <div className={styles.backgroundopct} onClick={handlePageClick}>
      <form className={styles.form} onClick={handleFormClick}>
        <div className="subtitle">Edit Kontak</div>
        <input
          type="text"
          placeholder="Name"
          className="bar"
          maxlength="21"
          value={nameValue}
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

        <button className="save" onClick={handleEditContact}>
          submit
        </button>
      </form>
    </div>
  );
}

export default EditContact;
