
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface BookingFormProps {
  price: number;
}

const BookingForm = ({ price }: BookingFormProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const { toast } = useToast();

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const subtotal = price * nights;
  const cleaningFee = 75;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const handleBook = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: "Missing Dates",
        description: "Please select check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed",
      description: "Your booking request has been sent! This would connect to the backend in the full implementation.",
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xl font-bold">${price}</span>
          <span className="text-gray-600"> night</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium">★ 4.92</span>
          <span className="mx-1 text-gray-500">·</span>
          <span className="text-sm text-gray-500 underline">124 reviews</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg mb-4 divide-y">
        <div className="grid grid-cols-2 divide-x">
          <div className="p-3">
            <label className="block text-xs font-semibold uppercase">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto font-normal w-full justify-start text-left">
                  {checkIn ? (
                    format(checkIn, 'MMM d, yyyy')
                  ) : (
                    <span className="text-muted-foreground">Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date() || (checkOut ? date >= checkOut : false)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="p-3">
            <label className="block text-xs font-semibold uppercase">Checkout</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto font-normal w-full justify-start text-left">
                  {checkOut ? (
                    format(checkOut, 'MMM d, yyyy')
                  ) : (
                    <span className="text-muted-foreground">Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => date < new Date() || (checkIn ? date <= checkIn : false)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="p-3">
          <label className="block text-xs font-semibold uppercase">Guests</label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="border-0 p-0 h-auto font-normal">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'guest' : 'guests'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        onClick={handleBook} 
        className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white mb-4"
      >
        {checkIn && checkOut ? 'Reserve' : 'Check availability'}
      </Button>

      {nights > 0 && (
        <>
          <p className="text-center text-sm text-gray-500 mb-4">You won't be charged yet</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="underline">${price} x {nights} nights</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Cleaning fee</span>
              <span>${cleaningFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Service fee</span>
              <span>${serviceFee}</span>
            </div>
            
            <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
              <span>Total before taxes</span>
              <span>${total}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
