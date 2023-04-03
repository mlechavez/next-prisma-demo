import { Box, Flex } from "@chakra-ui/react";
import { Contact, Prisma } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { prisma } from "../lib/prisma";

const ContactPage = ({
  initialContacts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [contacts, setContacts] = useState(initialContacts);

  const handleSubmit = async (contact: Prisma.ContactCreateInput) => {
    try {
      const data = await saveContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  return (
    <Flex gap={20}>
      <Box>
        <ContactForm onSubmit={(c) => handleSubmit(c)} />
      </Box>
      <Box flexGrow={2}>
        {contacts && contacts.length > 0 && <ContactList contacts={contacts} />}
      </Box>
    </Flex>
  );
};

export default ContactPage;

async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch("/api/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}

interface Props {
  initialContacts: Contact[];
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts,
    },
  };
};
