import { Box } from "@chakra-ui/react"
import { ReactNode } from "react";

// #resume {
//   margin: 0 auto;
//   max-width: 600px;
//   padding: 80px 100px;
//   background: #fff;
//   border: 1px solid #ccc;
//   box-shadow: 2px 2px 4px #aaa;
//   -webkit-box-shadow: 2px 2px 4px #aaa;
// }

export const A4: FC<ReactNode> = ({ children }) => {
  return (
    <Box
      m="0 auto"
      maxW="210mm"
      p="25.4"
      border="1px"
      borderStyle="solid"
      borderColor="#ccc"
      boxShadow="xl"
      bgColor="#fff"
      fontFamily="Roboto"
      //lineHeight={1.4}
    >
      {children}
    </Box>
  );
}
