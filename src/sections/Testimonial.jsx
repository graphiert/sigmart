import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Products() {
  const datas = [
    {
      profile: "/assets/birjon.jpg",
      author: "Legenda Birjon",
      text: "Harganya murah, barang yang saya dapatkan juga selalu ada, pokoknya mantap lahh!!!",
    },
    {
      profile: "/assets/kobra.jpg",
      author: "Kobo Kanaeru",
      text: "Barangnya lengkap, tapi nggak ada ciki sama koyo.",
    },
    {
      profile: "",
      author: "Dapa",
      text: "Layoutnya dulu berantakan. Tetapi setelah menjadi donatur, layout di Sigmart jadi enak dilihat.",
    },
  ];
  return (
    <Flex
      as="section"
      id="testimonial"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Testimoni
      </Heading>
      <Heading p={2}>Apa pendapat mereka?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Reputasi supermarket kami sangat unggul, banyak pelanggan yang sudah
          sangat menilai kami dalam menjual barang-barang di supermarket kami.
        </Text>
      </Box>
      <Flex mt={6} gap={4} direction={{ base: "column", md: "row" }}>
        {datas.map((el, i) => (
          <Card key={i} w={{ base: 392, md: 228 }}>
            <CardHeader>
              <Avatar src={el.profile} mb={2} />
              <Heading size="md">{el.author}</Heading>
            </CardHeader>
            <CardBody>
              <Text>&quot;{el.text}&quot;</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
