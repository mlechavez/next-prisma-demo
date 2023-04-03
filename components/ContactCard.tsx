import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

interface Props {
  contact: any;
}
const ContactCard = ({ contact }: Props) => {
  return (
    <Card>
      <CardBody>
        <HStack>
          <Flex
            borderRadius="50%"
            bg="blue.400"
            w="50px"
            h="50px"
            minHeight="50px"
            minWidth="50px"
            justifyContent="center"
            alignItems="center"
          >
            M
          </Flex>
          <Box>
            <Text>{`${contact.firstName} ${contact.lastName}`}</Text>
            <Text>{contact.email}</Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
