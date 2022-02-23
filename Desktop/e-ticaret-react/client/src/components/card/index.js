import { Image, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Box
      textAlign="center"
      position="relative"
      alignItems={"center"}
      overflow="hidden"
      p="10px"
      bg={"black"}
      color="grey"
      mb={"20px"}
    >
      <Box>
        <Image minHeight={"350px"} src={item.image} />
      </Box>

      <Box p="2">
        <Box
          overflow="hidden"
          textOverflow="ellipsis"
          textAlign="center"
          fontWeight="semibold"
        >
          <strong>{item.title}</strong>
        </Box>
        <Box>
          <br />
          {item.title.length < 27 && <br />}
        </Box>
        <Box mb={"50px"} fontWeight="semibold" as="h3" lineHeight={"tight"}>
          {item.imdb_rate}
        </Box>
        <Box
          position="absolute"
          bottom="10px"
          className="btn-group"
          mt="4px"
          width="200px"
          display={"flex"}
          justifyContent="space-between"
        >
          <Button
            className="mylist"
            variant="outline"
            spacing="6"
            fontSize={"15px"}
            colorScheme={"blue"}
            width="50%"
          >
            + MY LIST
          </Button>
          <Link to={`/movie/${item._id}`}>
            <Button
              className="details"
              variant="outline"
              spacing="6"
              fontSize={"15px"}
              colorScheme={"orange"}
              width="100%"
            >
              DETAILS
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
