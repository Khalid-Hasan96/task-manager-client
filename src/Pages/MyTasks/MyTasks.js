import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const MyTasks = () => {
    return (
        <div className='w-full lg:max-w-screen-2xl mx-auto mt-5'>
            <Card>
                <CardHeader color="blue" className="relative">
                    <img
                        src="/img/blog.jpg"
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        Cozy 5 Stars Apartment
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-center py-3">
                    <Link to='/mytasks/taskdetails'><Button color="amber">View Details</Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MyTasks;