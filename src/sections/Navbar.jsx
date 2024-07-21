import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box position="relative" zIndex={2}>
      <Flex
        position="fixed"
        bg="gray.100"
        _dark={{ bg: "gray.700", color: "gray.50" }}
        top={0}
        right={0}
        left={0}
        sx={{
          px: {
            base: 8,
            md: 12,
            lg: 16,
          },
          py: {
            base: 2,
          },
        }}
        as="nav"
        justify={"space-between"}
      >
        <Center>
          <Heading color="teal">
            <Link href="#">Sigmart</Link>
          </Heading>
        </Center>
        <Show below="md">
          <IconButton
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon color="teal" />}
          />
        </Show>
        <Show above="md">
          <Flex color="teal" justify="space-between">
            <Link href="#about" p={4}>
              Tentang Kami
            </Link>
            <Link href="#product" p={4}>
              Produk
            </Link>
            <Link href="#testimonial" p={4}>
              Testimoni
            </Link>
            <Link href="#contact" p={4}>
              Hubungi Kami
            </Link>
          </Flex>
        </Show>
      </Flex>
      <Drawer
        as="aside"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex direction="column">
              <Heading p={4} color="teal">
                Sigmart
              </Heading>
              <Link href="#about" p={4}>
                Tentang Kami
              </Link>
              <Link href="#product" p={4}>
                Produk
              </Link>
              <Link href="#testimonial" p={4}>
                Testimoni
              </Link>
              <Link href="#contact" p={4}>
                Hubungi Kami
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
