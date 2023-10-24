import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Link as ChakraLink,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import PageNavbar from "../../components/PageNavbar/PageNavbar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { signUp, googleSignIn, gitHubSignIn, updateUserProfile } =
    useAuthContext();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignUpLoading(true);
    signUp(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;

        // * update user profile
        updateUserProfile(createdUser, name, photoUrl)
          .then(() => {})
          .catch((error) => {
            // *show toast
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });

            setIsSignUpLoading(false);
          });

        // *show toast
        toast.success("Succesfully Signed Up", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // * reset state
        setName("");
        setPhotoUrl("");
        setEmail("");
        setPassword("");
        setIsSignUpLoading(false);

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

        setIsSignUpLoading(false);
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
      <Box maxW="450px" my="120px" mx="auto" padding="20px">
        <Heading
          as="h6"
          fontSize="1.5rem"
          fontWeight="500"
          mb="20px"
          color="teal.500"
        >
          Sign Up
        </Heading>
        <form onSubmit={handleSignUp} className="signup">
          <VStack spacing="20px">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Type Your Name..."
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Photo URL</FormLabel>
              <Input
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                type="text"
                placeholder="Place Your Photo URL..."
                size="lg"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Type your email..."
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Type your password..."
                size="lg"
              />
            </FormControl>
            <Button
              type="submit"
              isLoading={isSignUpLoading}
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
          Already have an account?{" "}
          <ChakraLink as={Link} color="teal" to="/signin">
            Sing In
          </ChakraLink>
        </Box>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            OR
          </AbsoluteCenter>
        </Box>
        <Box>
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

export default SignUp;
