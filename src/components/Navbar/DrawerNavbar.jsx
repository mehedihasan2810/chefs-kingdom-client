/* eslint-disable react/prop-types */
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const DrawerNavbar = ({
  onOpen,
  isOpen,
  onClose,
  currentUser,
  handleSignOut,
  navbarData,
}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />

      <DrawerContent pos="relative">
        <Circle
          pointerEvents="none"
          pos="absolute"
          top="0"
          left="-55px"
          onClick={onOpen}
          as="button"
          size="50px"
          p="12px"
          border="1px"
          borderColor="gray.400"
          color="gray.200"
          _hover={{ borderColor: "gray.50" }}
        >
          <CloseIcon w="100%" h="100%" />
        </Circle>
        <DrawerHeader borderBottomWidth="1px">
          <Heading
            as="h2"
            bgImg="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1600"
            bgSize="cover"
            bgPos="center"
            bgClip="text"
          >
            Chef&#39;s Kingdom
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <List spacing="20px">
            {navbarData.map(({ id, path, text }) => (
              <>
                <ListItem key={id} alignSelf="center" textTransform="uppercase">
                  <ChakraLink
                    as={NavLink}
                    to={path}
                    color="gray.900"
                    fontSize="1.05rem"
                    _hover={{
                      color: "#4FD1C5",
                      textDecor: "none",
                    }}
                    style={({ isActive }) => {
                      if (!(path === "#")) {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          borderBlockEnd: isActive ? "2px solid" : "",
                          color: isActive ? "#4FD1C5" : "gray.100",
                        };
                      }
                    }}
                  >
                    {text}
                  </ChakraLink>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>

          {currentUser ? (
            <>
              <Button
                colorScheme="green"
                w="100%"
                size="lg"
                my="20px"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <ChakraLink as={NavLink} to="/signin">
              <Button
                colorScheme="teal"
                w="100%"
                size="lg"
                my="20px"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                Sign In
              </Button>
            </ChakraLink>
          )}

          <Divider />

          <Flex flexDir="column" gap="20px" mt="20px" color="gray.400">
            <Box as="address">St, Delicious City, London 9578, UK</Box>
            <Divider />
            <Box as="span">Daily : 8.00 am to 10.00 pm</Box>
            <Divider />
            <ChakraLink as={NavLink} to="tel:+11234567890">
              +1 123 456 7890
            </ChakraLink>
            <Divider />
            <ChakraLink as={NavLink} href="mailto:booking@restaurant.com">
              buyrecipe@gmail.com
            </ChakraLink>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNavbar;
