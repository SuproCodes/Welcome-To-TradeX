import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} mt={8}>About Us:</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to CryptoX. This platform helps you to know the value of each and every crypto coin known, and gives you an analytical idea about which coin to choose from the thousands of others. Wish you a Happy Trading Time!!
          </Text>
          <Text fontWeight={"bold"} mt={4}>Contact Me:</Text>
          <Text fontWeight={"bold"}>Supratik Dutta - Aspiring Software Engineer | Full Stack Developer</Text>
          <Text><a href="https://www.linkedin.com/in/supratik-dutta-2362811b7/" target="_blank" rel="supro li">LinkedIn | </a><a href="https://github.com/SuproCodes" target="_blank" rel="supro gi">Github | </a><a href="mailto:dsupratik1@gmail.com" target="_blank" rel="supro em">Email</a></Text>
        </VStack>
   
        <VStack>
          {/* You can add any additional content here if needed */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
