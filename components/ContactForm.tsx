import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { Prisma } from "@prisma/client";
import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (contact: Prisma.ContactCreateInput) => void;
}
const ContactForm = ({ onSubmit }: Props) => {
  const [contact, setContact] = useState<Prisma.ContactCreateInput>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input
          type="text"
          autoFocus
          onChange={(e) =>
            setContact({ ...contact, firstName: e.target.value })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last name</FormLabel>
        <Input
          type="text"
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
      </FormControl>
      <FormControl mb="30px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
