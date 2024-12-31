import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Products() {
  const datas = [
    { name: "Susu", price: 4500, img: "/assets/susu.jpg" },
    { name: "Roti", price: 5000, img: "/assets/roti.jpg" },
    { name: "Keju", price: 5500, img: "/assets/keju.jpg" },
  ];

  return (
    <Flex
      as="section"
      id="product"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Produk Kami
      </Heading>
      <Heading p={2}>Apa yang kami jual?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Kami menyediakan produk-produk asli yang berkualitas tinggi, tahan
          lama, dan keren untuk memenuhi kebutuhan sehari-hari.
        </Text>
      </Box>
      <Flex mt={6} gap={4} direction={{ base: "column", md: "row" }}>
        {datas.map((el, i) => (
          <Card key={i} w={{ base: 392, md: 228 }}>
            <CardBody>
              <Image w="200px" src={el.img} alt={el.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  ${el.price}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
