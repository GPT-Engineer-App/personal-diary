import { Container, Heading, Text, VStack, Image, Link, Box } from "@chakra-ui/react";
import { FaHeart, FaCamera, FaBook, FaGlobeAsia } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>私の人生について</Heading>
          <Text mt={4}>こんにちは、私のブログへようこそ！ここでは、私の日常生活、旅行、趣味、そして特別な瞬間を共有しています。</Text>
          <Image src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJsb2clMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzE1MzIyODk4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={4} />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2} size="md">
            旅行記
          </Heading>
          <Text mt={4}>世界中を旅して見た美しい風景や文化について書いています。旅行は私の大きな情熱の一つです。</Text>
          <Link href="#" color="teal.500" leftIcon={<FaGlobeAsia />}>
            もっと読む
          </Link>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2} size="md">
            写真
          </Heading>
          <Text mt={4}>写真は私にとって特別な趣味です。美しい瞬間を捉えることで、それらの記憶を永遠に保存できます。</Text>
          <Link href="#" color="teal.500" leftIcon={<FaCamera />}>
            ギャラリーを見る
          </Link>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2} size="md">
            読書
          </Heading>
          <Text mt={4}>本は最高の逃避先です。読んだ本についての感想やおすすめを共有しています。</Text>
          <Link href="#" color="teal.500" leftIcon={<FaBook />}>
            レビューを読む
          </Link>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2} size="md">
            ライフスタイル
          </Heading>
          <Text mt={4}>健康、ウェルネス、日々の生活に役立つヒントを提供しています。バランスの取れた生活を送るためのアイデアを共有しています。</Text>
          <Link href="#" color="teal.500" leftIcon={<FaHeart />}>
            もっと詳しく
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
