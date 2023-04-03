import { SimpleGrid } from "@chakra-ui/react";
import { Contact } from "@prisma/client";
import ContactCard from "./ContactCard";

interface Props {
  contacts: Contact[];
}
const ContactList = ({ contacts }: Props) => {
  return (
    <SimpleGrid spacing={5} minChildWidth="250px">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </SimpleGrid>
  );
};

export default ContactList;
