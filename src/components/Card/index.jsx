import styles from "./Card.module.css";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import EditContact from "../EditContact";
import { BsTrash, BsPersonCircle, BsPencilFill } from "react-icons/bs";

function Card(props) {
  const { id, name, phone, contacts, setContacts, setFilter } =
    props;
  const [isEditMode, setIsEditMode] = useState(false);

  function handleDelete() {
    setContacts((prev) =>
      prev.filter((contact) => name !== contact.name || phone !== contact.phone)
    );
    setFilter((prev) =>
      prev.filter((contact) => name !== contact.name || phone !== contact.phone)
    );
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(`${phone}`)
      .then(() => window.alert("Copied"))
      .catch((err) => console.error("Could not copy text: ", err));
  }
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.rowProfile}>
          <BsPersonCircle size={60} />
        </div>

        <div className={styles.rowDesc}>
          <h3>{name}</h3>
          <p>{phone}</p>
        </div>
        {name === contacts[0].name && phone === contacts[0].phone ? (
          <>
            <section className={`${styles.buttons}  ${styles.rowEdit}`}>
              <button onClick={handleCopy}>
                <FiCopy size={18} />
              </button>

              <button onClick={() => setIsEditMode(true)}>
                <BsPencilFill size={18} />
              </button>
            </section>
          </>
        ) : (
          <>
            <section className={`${styles.buttons}  ${styles.rowEdit}`}>
              <button onClick={handleCopy}>
                <FiCopy size={18} />
              </button>

              <button onClick={() => setIsEditMode(true)}>
                <BsPencilFill size={18} />
              </button>

              <button onClick={handleDelete}>
                <BsTrash cursor="pointer" size={18} />
              </button>
            </section>
          </>
        )}
        {isEditMode ? (
          <EditContact
            id={id}
            name={name}
            phone={phone}
            setIsEditMode={setIsEditMode}
            contacts={contacts}
            setContacts={setContacts}
            setFilter={setFilter}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Card;
