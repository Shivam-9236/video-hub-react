import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend } from 'react-icons/ai';



const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={["column","row"]}>

         <VStack alignItems={"strech"} w={'full'} px={'4'}>
            <Heading size="md" texttransform={'uppercase'} textAlign={["center","left"]}>
             Subscribe to get update
            </Heading>
         <HStack 
         borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder={"Enter email here..."} border={"none"} borderRadius={"none"}
            outline={"none"} focusBorderColor='none'/>
            <Button p={"0"} colorScheme='purple' variant={"ghost"}
            borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend/>
            </Button>
             </HStack>
        </VStack>



        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>



        <VStack w={'full'}>
          <Heading p={1} size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=LL&index=1&ab_channel=RickAstley">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/shivam_9236/">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/Shivam-9236">
              Github
            </a>
          </Button>
          
        </VStack>



      </Stack>   

    </Box>
  )
}

export default Footer