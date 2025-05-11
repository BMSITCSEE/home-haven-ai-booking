
import React from 'react';
import { Star, MapPin, Share, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import AIChatButton from './AIChatButton';

interface Amenity {
  name: string;
  available: boolean;
}

interface PropertyDetailProps {
  id: string;
  title: string;
  description: string;
  location: string;
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
  };
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: Amenity[];
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

const PropertyDetail = ({
  title,
  description,
  location,
  host,
  price,
  rating,
  reviewCount,
  images,
  amenities,
  maxGuests,
  bedrooms,
  beds,
  baths
}: PropertyDetailProps) => {
  const { toast } = useToast();

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Sharing functionality will be added in the future.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Saved",
      description: "Property saved to your wishlist.",
    });
  };

  const handleReserve = () => {
    toast({
      title: "Booking Request",
      description: "This will be connected to the backend booking system.",
    });
  };

  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-8">
      {/* Property Title and Actions */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">·</span>
            <span className="underline">{reviewCount} reviews</span>
            <span className="text-muted-foreground">·</span>
            <MapPin className="h-4 w-4" />
            <span className="underline">{location}</span>
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Button variant="ghost" size="sm" className="flex items-center" onClick={handleShare}>
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center" onClick={handleSave}>
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* Property Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 mb-8 rounded-xl overflow-hidden">
        <div className="md:col-span-2 md:row-span-2">
          <AspectRatio ratio={1} className="md:h-full">
            <img src={images[0]} alt={title} className="object-cover h-full w-full" />
          </AspectRatio>
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index}>
            <AspectRatio ratio={1}>
              <img src={image} alt={`Property ${index + 2}`} className="object-cover h-full w-full" />
            </AspectRatio>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Host Info */}
          <div className="flex justify-between items-start pb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Entire rental unit hosted by {host.name}
              </h2>
              <p className="text-muted-foreground">
                {maxGuests} guests · {bedrooms} bedroom{bedrooms !== 1 ? 's' : ''} · {beds} bed{beds !== 1 ? 's' : ''} · {baths} bath{baths !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={host.image} 
                alt={host.name} 
                className="rounded-full h-14 w-14 object-cover"
              />
              {host.isSuperhost && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded mt-1 block text-center">
                  Superhost
                </span>
              )}
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700">{description}</p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Amenities */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className={`flex items-center ${!amenity.available ? 'text-gray-400 line-through' : ''}`}>
                  <span className="mr-2">
                    {amenity.available ? '✓' : '✕'}
                  </span>
                  {amenity.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-md">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span><span className="text-xl font-bold">${price}</span> night</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">{rating}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <p className="text-xs font-semibold">CHECK-IN</p>
                    <p className="text-sm">5/15/2025</p>
                  </div>
                  <div className="p-3 border-b">
                    <p className="text-xs font-semibold">CHECKOUT</p>
                    <p className="text-sm">5/20/2025</p>
                  </div>
                </div>
                <div className="p-3 border-t">
                  <p className="text-xs font-semibold">GUESTS</p>
                  <p className="text-sm">2 guests</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white mb-4" 
                size="lg"
                onClick={handleReserve}
              >
                Reserve
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mb-4">You won't be charged yet</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="underline">${price} x 5 nights</span>
                  <span>${price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$60</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-semibold">
                <span>Total before taxes</span>
                <span>${price * 5 + 75 + 60}</span>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant Button */}
          <div className="mt-6">
            <AIChatButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
