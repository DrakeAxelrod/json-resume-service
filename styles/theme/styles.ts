import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const styles = extendTheme({
  styles: {
    global: (props: Dict<any>) => ({
      // body: {
      //   fontFamily: "Roboto",
      //   color: mode("gray.800", "whiteAlpha.900")(props),
      //   bg: mode("white", "gray.800")(props),
      //   lineHeight: "base",
      // },

    }),
  },
});
