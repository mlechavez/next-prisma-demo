import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      className={roboto.className}
      bg="gray.50"
    >
      <GridItem
        as="aside"
        w={{ base: "75px", lg: "300px" }}
        bg="blue.700"
        minHeight="100vh"
        sx={{ transition: "width 0.3s ease" }}
        py="40px"
      >
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Sidebar />
        </HStack>
      </GridItem>
      <GridItem as="main" colSpan={4} p="40px">
        <Navbar />
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
