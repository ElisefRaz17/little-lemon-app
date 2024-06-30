import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  VStack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import occasion_logo from "../../assets/Champagne.png";
const BookingForm = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      guests: Yup.string()
        .min(1, "Must be at least 1 guest")
        .max(10, "Please call us if you have more than 10 guests")
        .required("Required"),
    }),
  });

  const [times, setTimes] = useState("");

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");

  const [guests, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <>
      <Flex
        bg={"#f4ce14"}
        py={16}
        spacing={8}
        align={"center"}
        justify={"center"}
      >
        <VStack
          spacing={8}
          width={800}
          py={12}
          px={6}
          bgColor={"#495e57"}
          rounded={"lg"}
        >
          <Heading as="h1" id="booking-form" color={"#f4ce14"}>
            Reserve a Table
          </Heading>
          <Box
            p={8}
            rounded={"lg"}
            borderWidth={1}
            boxShadow={"lg"}
            backgroundColor={"gray.50"}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={8} fontSize={"lg"}>
                <HStack>
                  <Box>
                    <FormControl
                      isInvalid={
                        !!formik.errors.firstName && formik.touched.firstName
                      }
                    >
                      <FormLabel htmlFor="firstName" className="form-label">First Name</FormLabel>
                      <Input
                        type={"text"}
                        id="firstName"
                        name="firstName"
                        {...formik.getFieldProps("firstName")}
                      ></Input>
                      <FormErrorMessage>
                        {formik.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel className="form-label">Last Name</FormLabel>
                      <Input type={"text"}></Input>
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl
                  isInvalid={!!formik.errors.email && formik.touched.email}
                >
                  <FormLabel htmlFor="email" className="form-label">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel className="form-label">Phone Number</FormLabel>
                  <Input type="phone" name="phone" value={tel} onChange={(e)=>setTel(e.currentTarget.value)}/>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.guests && formik.touched.guests}
                >
                  <FormLabel className="form-label">Number of guests</FormLabel>
                  <Input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    {...formik.getFieldProps("guests")}
                  />
                  <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel className="form-label">Choose date</FormLabel>
                  <Input type="date" id="res-date" />
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.time && formik.touched.time}
                >
                  <FormLabel htmlFor="time" className="form-label">Choose time</FormLabel>

                  <Input
                    type="time"
                    id="res-time"
                    value={times}
                    onChange={(e) => {
                      setTimes(e.currentTarget.value);
                    }}
                  />
                  <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel className="form-label">Comments</FormLabel>
                  <Textarea value={comments} onChange={(e)=>setComments(e.currentTarget.value)}></Textarea>
                </FormControl>
                <Button
                  type="submit"
                  bg={"#f4ce14"}
                  color={"#333333"}
                  size={"lg"}
                  _hover={{ bg: "yellow.500" }}
                >
                  Make Your Reservation
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default BookingForm;

// <div>
//               <label htmlFor="book-occasion">
//                 Occasion:
//                 <div className="occasion-logo-container">
//                   <img
//                     src={occasion_logo}
//                     alt="occasion-icon"
//                     className="occasion-logo"
//                   />
//                 </div>
//               </label>
//               <select
//                 id="book-occasion"
//                 key={occasion}
//                 value={occasion}
//                 onChange={(e) => setOccasion(e.target.value)}
//               >
//                 <option>Occasion </option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//                 <option>Engagement</option>
//               </select>
//             </div>

// <div>
// <label htmlFor="book-time">Choose Time:</label>
// <input
//   type="time"
//   value={times}
//   onChange={(e) => {
//     setTimes(e.currentTarget.value);
//   }}
// />
// </div>
