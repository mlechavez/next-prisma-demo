import { HStack, List, ListItem, Text, Link } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineContacts } from "react-icons/ai";
import NextLink from "next/link";
import { useRouter } from "next/router";

const menus = [
  {
    id: 1,
    label: "Dashboard",
    link: "/",
    icon: <MdOutlineDashboard size={30} />,
  },
  { id: 2, label: "Todos", link: "/todos", icon: <FaTasks size={30} /> },
  {
    id: 3,
    label: "Profile",
    link: "/profile",
    icon: <CgProfile size={30} />,
  },
  {
    id: 4,
    label: "Minutes of Meeting",
    link: "/mom",
    icon: <BiTimeFive size={30} />,
  },
  {
    id: 5,
    label: "Articles",
    link: "/articles",
    icon: <BiTimeFive size={30} />,
  },
  {
    id: 6,
    label: "Contact",
    link: "/contacts",
    icon: <AiOutlineContacts size={30} />,
  },
];
const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <List w="100%" display="flex" flexDir="column">
        {menus.map((menu) => (
          <ListItem
            key={menu.id}
            w="100%"
            _hover={{ bg: "blue.800" }}
            px={{ base: "20px", lg: "40px" }}
            background={router.asPath === menu.link ? "#3e6ba3" : ""}
          >
            <Link
              as={NextLink}
              href={menu.link}
              display="inline-block"
              w="100%"
            >
              <HStack spacing={4} my={5} mx="auto">
                <Text color="white" as="span">
                  {menu.icon}
                </Text>
                <Text
                  fontWeight="medium"
                  letterSpacing={1}
                  color="white"
                  display={{ base: "none", lg: "inline-block" }}
                >
                  {menu.label}
                </Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
