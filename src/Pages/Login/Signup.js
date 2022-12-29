import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Card className='bg w-full lg:max-w-screen-2xl mx-auto my-5'>
            <CardHeader
                variant="gradient"
                color="blue"
                className="my-4 grid h-20 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign up
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Name" size="lg" />
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                    Sign up
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Already have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                    >
                        <Link to='/login'>Login</Link>
                    </Typography>
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default Signup;