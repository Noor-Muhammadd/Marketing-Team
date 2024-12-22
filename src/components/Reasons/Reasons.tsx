"use client"
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Marketing360Reasons() {
  return (
    <div className="bg-gray-50 my-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center">
          6 reasons why you need Marketing 360 <sup>®</sup>
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/fc98e835c17442ae85a152e4e79bc290/20/nGa1B4aos8qcQp1fmtp/one.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Everything you need</h3>
              <p className="mt-2 text-gray-600">
                Get the analytics, reporting, tracking and other important tools you need to help grow your business through a single, cost-effective platform.
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f4aa848b38ad4f1e8f1c061f001eef3d/20/nGa1B4aos8qcQp1fmtp/two.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Get talent and technology</h3>
              <p className="mt-2 text-gray-600">
                With Marketing 360®, you get the talent and technology you need to help grow your business; not just one or the other.
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/bfab8642ceb640b7b71f40674a54ff2f/20/nGa1B4aos8qcQp1fmtp/3.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">It’s easy</h3>
              <p className="mt-2 text-gray-600">
                We understand you’re busy running your business, so we provide the talent and support you need to make sure everything gets done at the highest standard.
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/de6e4822adf9477ab29918a78db67d09/20/nGa1B4aos8qcQp1fmtp/four.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Save time</h3>
              <p className="mt-2 text-gray-600">
                Because we do everything for you, it saves you time and allows you to focus more on the big picture and running your growing business.
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/b2006b83956341fcbb83a2208044109f/20/nGa1B4aos8qcQp1fmtp/five.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Save money</h3>
              <p className="mt-2 text-gray-600">
                Not only does Marketing 360® save you time, but it also saves you money! No need for an expensive in-house marketing team or high-cost software solutions.
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-6 bg-white p-6">
            <div>
              <Image width={75} height={75} src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/b2c5eee8a45a4f9394a4e0b11d4b1c02/20/nGa1B4aos8qcQp1fmtp/six.png" alt="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Works better and better over time</h3>
              <p className="mt-2 text-gray-600">
                Marketing 360® is a momentum-based system. Your online presence and overall results and return on investment get better and better over time!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button variant='contained' color='primary' size='large'>
            Plans & Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
