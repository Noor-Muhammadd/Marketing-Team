import { Button } from '@mui/material';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl text-center">
          Why choose us?
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-start mb-4">
              <div className='w-16 h-16'>
              <img src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f9c5affa398f4979bafd6f19f0863441/20/4SoifmQp45JMgBnHiDiv8/Affordable.png" alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">We’re affordable</h3>
            <p className="mt-4 text-gray-600">
              If your budget is small, don’t worry. We can work with almost any size budget and will help formulate a plan that makes the best use of the budget you have.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-16 h-16">
                <img src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e3bdb16c5ef847458455a64866586357/20/4SoifmQp45JMgBnHiDiv8/Google.png" alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Recommended by Google</h3>
            <p className="mt-4 text-gray-600">
              We are a long-standing Premier Google Partner and, therefore, highly recommended by Google. Hear what Google has to say about us.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline mt-2 inline-block">Watch this video</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-16 h-16">
                <img src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c5631480097246878d445c4bc96f8436/20/4SoifmQp45JMgBnHiDiv8/meta.png" alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Loved by Meta</h3>
            <p className="mt-4 text-gray-600">
              As a Meta business partner, we work hard to make sure your campaigns get the best results possible. From campaign setup to optimization we can take care of it for you.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline mt-2 inline-block">Watch this video</a>
          </div>
        </div>
        <div className="mt-20 text-center">
          <Button 
          variant='contained'
          color='primary' size='large'>
            Plans & Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
