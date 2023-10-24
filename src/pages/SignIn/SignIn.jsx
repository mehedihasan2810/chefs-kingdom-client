import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import PageNavbar from "../../components/PageNavbar/PageNavbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Divider,
  AbsoluteCenter,
  VStack,
} from "@chakra-ui/react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInLoading, setIsSignInLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { signIn, googleSignIn, gitHubSignIn } = useAuthContext();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSignInLoading(true);
    signIn(email, password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const loggedUser = userCredential.user;

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // * reset state
        setEmail("");
        setPassword("");
        setIsSignInLoading(false);

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setIsSignInLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const loggedUser = userCredential.user;

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  return (
    <Box as="section">
      <Box maxW="1200px" mx="auto">
        <PageNavbar />
      </Box>
      <Box
        className="signin-container"
        maxW="450px"
        my="120px"
        mx="auto"
        padding="20px"
      >
        <Heading
          as="h6"
          fontSize="1.5rem"
          fontWeight="500"
          mb="20px"
          color="teal.500"
        >
          Sign In
        </Heading>
        <form onSubmit={handleSignIn} className="signin">
          <VStack spacing="20px">
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Type your email..." size="lg" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Type your password..."
                size="lg"
              />
            </FormControl>
            <Button
              type="submit"
              isLoading={isSignInLoading}
              loadingText="Signing In..."
              colorScheme="teal"
              size="lg"
              w="100%"
            >
              Sign In
            </Button>
          </VStack>
        </form>

        <Box textAlign="center" mt="14px">
          Don&#39;t have an account?{" "}
          <ChakraLink as={Link} color="teal" to="/signup">
            SingUp
          </ChakraLink>
        </Box>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            OR
          </AbsoluteCenter>
        </Box>
        <Box className="google-github">
          <GoogleButton onClick={handleGoogleSignIn} className="google-btn" />
          <Button
            bg="#25292e"
            color="#fff"
            mt="20px"
            size="lg"
            w="100%"
            onClick={handleGitHubSignIn}
            _hover={{
              opacity: "0.8",
            }}
          >
            Sign in with Github
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
