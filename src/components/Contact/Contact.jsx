import styles from "./contact.module.css";

function Contact() {
  const contacts = [
    { label: "E-mail", href: "mailto:b.dadej14@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bart%C5%82omiej-dadej-782ab52a1/",
    },
    { label: "GitHub", href: "https://github.com/Dadejczyk?tab=repositories" },
    { label: "Telephone", href: "tel:+48699199101" },
  ];

  return (
    <section className={styles.container}>
      <h3 className={styles.header}>Get in Touch</h3>
      <div className={styles.contacts}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
