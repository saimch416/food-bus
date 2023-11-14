import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  Box,
  Button,
  Center,
  HStack,
  Img,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import form from '../assets/form.jpg';
function Franchise() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    city: '',
    email: '',
    investment: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(formData).forEach(key => {
      if (formData[key].trim() === '') {
        newErrors[key] = 'Field is required';
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate form submission
      setShowSuccessMessage(true);

      // After a delay, reset the form and success message
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          state: '',
          city: '',
          email: '',
          investment: '',
          description: '',
        });
        setShowSuccessMessage(false);
      }, 3000);
    } else {
      console.log('Form has errors. Please check.');
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <>
      <Header />
      <Spacer height="80px"></Spacer>
      <HStack margin="20px" marginTop="30px" justifyContent="center">
        <Stack>
          <Img src={form} />
        </Stack>
      </HStack>

      <Stack>
        <Text
          fontSize={['2xl', '3xl', '4xl']}
          fontWeight="400"
          textAlign="center"
        >
          Be Your Own Boss
        </Text>
        <Text color="#495460" fontSize="18" textAlign="center">
          We consider all the drivers of change gives you the components <br />{' '}
          you need to change to create a truly happens.
        </Text>
      </Stack>

      <Stack
        w={['90%', '80%', '50vw']}
        padding={['30px', '40px', '80px']}
        marginLeft="auto"
        marginRight="auto"
        marginBottom="50px"
        marginTop="50px"
        border="1px solid #F20808"
        borderRadius="10px"
        boxShadow="lg"
      >
        {showSuccessMessage && (
          <Alert status="success">
            <AlertIcon />
            Form submitted successfully!
          </Alert>
        )}
        <HStack justifyContent="space-between">
          {showSuccessMessage && (
            <Alert status="success">
              <AlertIcon />
              Form submitted successfully!
            </Alert>
          )}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            width="100%"
          >
            <Stack w={['100%', '100%', '45%']}>
              <FormControl isInvalid={!!errors.name}>
                <Text>Name</Text>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  borderRadius="50px"
                  h="8vh"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.phone}>
                <Text>Phone No.</Text>
                <Input
                  type="number"
                  name="phone"
                  placeholder="x-xxx-xxx-xxx"
                  borderRadius="50"
                  h="8vh"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.state}>
                <Text>State</Text>
                <Input
                  type="text"
                  name="state"
                  placeholder="State"
                  borderRadius="50"
                  h="8vh"
                  value={formData.state}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.state}</FormErrorMessage>
              </FormControl>
            </Stack>

            <Stack w={['100%', '100%', '45%']}>
              <FormControl isInvalid={!!errors.email}>
                <Text>Email</Text>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  borderRadius="50"
                  h="8vh"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.city}>
                <Text>City</Text>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  borderRadius="50"
                  h="8vh"
                  value={formData.city}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.city}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.investment}>
                <Text>Total Investment Budget</Text>
                <Input
                  type="number"
                  name="investment"
                  placeholder="x-xxx-xxx-xxx"
                  borderRadius="50"
                  h="8vh"
                  value={formData.investment}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.investment}</FormErrorMessage>
              </FormControl>
            </Stack>
          </Stack>
        </HStack>
        <FormControl isInvalid={!!errors.description}>
          <Text>Which Option Describe you the best?</Text>
          <Select
            placeholder="Select option"
            borderRadius="50px"
            h="8vh"
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
            <option value="option1">Best</option>
            <option value="option2">Exellent</option>
            <option value="option3">Pro</option>
          </Select>
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </FormControl>
        <Spacer height="15px"></Spacer>
        <Button
          bg="#EF3A3A"
          color="#fff"
          borderRadius="50px"
          h="8vh"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
      <Footer />
    </>
  );
}

export default Franchise;
