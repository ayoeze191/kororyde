import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Car, Clock, DollarSign } from 'lucide-react';

export default function CNGFinancePage() {
  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6'>
      {/* Hero Section */}
      <section className='text-center space-y-4'>
        <h1 className='text-3xl font-bold'>Convert Your Car to CNG Without Upfront Payment!</h1>
        <p className='text-lg text-gray-600'>KoroRYDE’s CNG Finance Scheme lets 500 drivers convert their cars and pay over 12 months—saving money without the stress!</p>
        <Button className='bg-green-600 text-white px-6 py-3 rounded-lg'>Apply Now</Button>
      </section>

      {/* Cost Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>CNG Conversion Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-semibold'>₦1.2M – ₦2.5M (Varies by Car Type)</p>
          <p className='text-gray-600'>Spread payment over 12 months with no upfront cost.</p>
          <Button variant='outline' className='mt-4'>Check Eligibility</Button>
        </CardContent>
      </Card>

      {/* Benefits */}
      <section className='grid grid-cols-2 gap-4'>
        <Card className='flex items-center space-x-4 p-4'>
          <Car className='text-green-600' size={32} />
          <p className='font-medium'>Professional CNG Conversion</p>
        </Card>
        <Card className='flex items-center space-x-4 p-4'>
          <DollarSign className='text-green-600' size={32} />
          <p className='font-medium'>Save Fuel Costs by 50%</p>
        </Card>
        <Card className='flex items-center space-x-4 p-4'>
          <Clock className='text-green-600' size={32} />
          <p className='font-medium'>Flexible 12-Month Plan</p>
        </Card>
        <Card className='flex items-center space-x-4 p-4'>
          <CheckCircle className='text-green-600' size={32} />
          <p className='font-medium'>No Upfront Payment Required</p>
        </Card>
      </section>

      {/* Steps to Apply */}
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className='list-decimal pl-6 space-y-2'>
            <li>Check your eligibility</li>
            <li>Apply online</li>
            <li>Get your car converted</li>
            <li>Start saving!</li>
          </ol>
        </CardContent>
      </Card>

      {/* Final CTA */}
      <section className='text-center space-y-4'>
        <h2 className='text-xl font-bold'>Don’t Miss Out! Only 500 Slots Available!</h2>
        <Button className='bg-green-600 text-white px-6 py-3 rounded-lg'>Apply Now & Start Saving</Button>
      </section>
    </div>
  );
}
