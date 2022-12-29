import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import addtask from '../../assets/addtask.png';
import './AddTask.css';

const AddTask = () => {
    return (
        <div className='bg w-full lg:max-w-screen-2xl mx-auto my-5'>
            <div className='flex flex-col-reverse lg:flex-row items-center'>
                <img src={addtask} className="w-full lg:w-1/2" alt="" />
                <div className='w-full p-5 lg:w-1/2'>
                    <h2 className='mb-5 text-3xl font-semibold underline underline-offset-4 text-green-500 text-center lg:text-left'>TRACK YOUR DAILY TASKS</h2>
                    <Input label="Title" success />
                    <input type="file" className="my-5 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                    <Textarea color="green" label="Task Description" />
                    <Button color="green">Add Task</Button>
                </div>
            </div>

        </div>
    );
};

export default AddTask;