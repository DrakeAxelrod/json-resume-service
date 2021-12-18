import { Box, Button } from '@chakra-ui/react'
import { A4 } from '@components/A4'
import axios from 'axios'
import { FC, useState } from 'react'


export const DemoResume: FC = () => {
  const [resume, setResume] = useState({})
  // const getResume = async () => {
  //   const { data } = await axios.get(
  //     "http://localhost:3000/api/github/gists/json?username=DrakeAxelrod", {
  //     }
  //   );
  //   setResume(data)
  // }
  // const handleClick = () => {
  //   getResume()
  // }
  return (
    <Box pt="5rem" bgColor="#EEEEEE" minH="100vh">
      <A4>
        {/* <Button onClick={handleClick}>Click</Button> */}
        <Box>Placeholder</Box>
      </A4>
    </Box>
  );
}
