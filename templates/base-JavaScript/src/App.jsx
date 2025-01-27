import { Button, Stack, Heading, Text, Highlight } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { RiArrowRightLine } from "react-icons/ri";

export function App() {
  // Handle button click to send a message to Figma to create a text node
  function handleCreateTextbox() {
    // Send message to Figma to create a textbox with text "Hello World"
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-textbox",
          text: "Hello World",
          fontSize: 128,
        },
      },
      "*"
    );
  }

  return (
    <Provider>
      <Stack padding={"15px"}>
        <Heading size="3xl" letterSpacing="tight" textAlign={"center"}>
          <Highlight query="with speed" styles={{ color: "teal.600" }}>
            Build Accessible Figma Plugins with speed
          </Highlight>
        </Heading>
        <Text fontSize="md" color="fg.muted">
          <b>FigDU (Figma Development Utility)</b> simplifies building Figma
          plugins with{" "}
          <Text as="span" color="teal.600">
            React
          </Text>{" "}
          and{" "}
          <Text as="span" color="teal.600">
            Chakra UI
          </Text>{" "}
          . Create stunning, functional plugins effortlessly.
        </Text>
        <Button
          id="create"
          colorPalette="orange"
          variant="subtle"
          onClick={handleCreateTextbox}
        >
          Create Hello World <RiArrowRightLine />
        </Button>
      </Stack>
    </Provider>
  );
}
