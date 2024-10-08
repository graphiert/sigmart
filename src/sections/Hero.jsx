import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
import { sectionStyle } from "../lib";

export default function Hero() {
  return (
    <Center
      bgImg={'url("/assets/bg-hero.jpg")'}
      bgPos="top center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <SimpleGrid
        as="section"
        id="#"
        columns={1}
        spacing={4}
        sx={{ ...sectionStyle, minH: "20rem", maxW: "51rem" }}
      >
        <Flex
          bg="gray.50"
          _dark={{ bg: "gray.800" }}
          my={8}
          p={8}
          boxShadow="lg"
          rounded="xl"
          direction="column"
          justify="center"
        >
          <Heading size={{ base: "lg", md: "xl" }} my={2}>
            Pilihan Hebat dan Smart?
            <br />
            <Highlight
              query="Sigmart solusinya!"
              styles={{ color: "teal.400" }}
            >
              Sigmart solusinya!
            </Highlight>
          </Heading>
          <Text my={2}>
            Dapatkan barang-barang asli yang berkualitas, tahan lama, dan keren
            untuk memenuhi kebutuhan sehari-harimu, di Sigmart!
          </Text>
          <Divider my={2} orientation="horizontal" />
          <Button colorScheme="teal" leftIcon={<Icon as={FaBagShopping} />}>
            Beli sekarang!
          </Button>
        </Flex>
      </SimpleGrid>
    </Center>
  );
}
