
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import CategoryFilter from '@/components/CategoryFilter';
import AIChatButton from '@/components/AIChatButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Check, Search, SlidersHorizontal } from 'lucide-react';
import { format } from 'date-fns';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Sample data
const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'https://a0.muscache.com/pictures/8b318783-723f-4584-9b76-1519b624f86c.jpg' },
  { id: 'beach', name: 'Beachfront', icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' },
  { id: 'cabin', name: 'Cabins', icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' },
  { id: 'mansion', name: 'Mansions', icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' },
  { id: 'countryside', name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { id: 'pools', name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' },
  { id: 'lakefront', name: 'Lakefront', icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' },
  { id: 'ski-in-out', name: 'Ski-in/out', icon: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg' },
  { id: 'design', name: 'Design', icon: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' },
  { id: 'tropical', name: 'Tropical', icon: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' }
];

const PROPERTIES = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    location: 'Malibu, California',
    price: 350,
    rating: 4.97,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/e8979fca-946b-487f-9ba7-cbf8baffdd2a.jpeg',
    superhost: true
  },
  {
    id: '2',
    title: 'Mountain View Cabin',
    location: 'Aspen, Colorado',
    price: 220,
    rating: 4.85,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-549505300359123405/original/f22e51c8-e51c-4f20-b64e-4798ebf2d1ab.jpeg'
  },
  {
    id: '3',
    title: 'Urban Loft Downtown',
    location: 'New York City, New York',
    price: 180,
    rating: 4.75,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-27583990/original/5bd13508-33d5-42be-8f9d-c4cbd972a037.jpeg'
  },
  {
    id: '4',
    title: 'Lakeside Cottage',
    location: 'Lake Tahoe, Nevada',
    price: 195,
    rating: 4.92,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29459696/original/030256d3-db67-4d15-a913-8436b5474912.jpeg',
    superhost: true
  },
  {
    id: '5',
    title: 'Historic Downtown Apartment',
    location: 'Boston, Massachusetts',
    price: 165,
    rating: 4.8,
    imageUrl: 'https://a0.muscache.com/im/pictures/e8babcf4-0407-4359-85d8-de187e0cf3e5.jpg'
  },
  {
    id: '6',
    title: 'Seaside Cottage',
    location: 'Newport, Rhode Island',
    price: 210,
    rating: 4.9,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50768121/original/b0b7e61f-066a-4a93-a6d4-727265487276.jpeg'
  },
  {
    id: '7',
    title: 'Modern Desert Home',
    location: 'Scottsdale, Arizona',
    price: 240,
    rating: 4.95,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-52339324/original/a5d63be5-f3e0-4944-a0c0-247b2a70d39a.jpeg',
    superhost: true
  },
  {
    id: '8',
    title: 'Cozy Forest Retreat',
    location: 'Portland, Oregon',
    price: 170,
    rating: 4.82,
    imageUrl: 'https://a0.muscache.com/im/pictures/af9bdd21-1e56-4f52-b2aa-5bd8cfe0a100.jpg'
  }
];

const ListingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [location, setLocation] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Filter properties based on active category and other filters
  // In a real app this would be API calls with server-side filtering
  const filteredProperties = PROPERTIES.filter(property => {
    if (activeCategory !== 'all' && Math.random() > 0.5) return false; // Mock category filter
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false;
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update URL params and trigger a data fetch
    setSearchParams({ 
      location, 
      checkIn: checkIn ? format(checkIn, 'yyyy-MM-dd') : '', 
      checkOut: checkOut ? format(checkOut, 'yyyy-MM-dd') : '',
      priceMin: priceRange[0].toString(),
      priceMax: priceRange[1].toString()
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
              <Input
                id="location"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium mb-1">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full md:w-[160px] justify-start text-left">
                    {checkIn ? format(checkIn, 'MMM dd, yyyy') : 'Select date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium mb-1">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full md:w-[160px] justify-start text-left">
                    {checkOut ? format(checkOut, 'MMM dd, yyyy') : 'Select date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="button" variant="outline" onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            
            <Button type="submit" className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </form>
        </div>

        {/* Advanced Filters */}
        {isFiltersOpen && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Price range</label>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={50}
                      max={500}
                      step={10}
                      onValueChange={(value) => setPriceRange(value as number[])}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Amenities</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['WiFi', 'Kitchen', 'Free parking', 'Pool', 'Hot tub', 'Air conditioning'].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <div className="h-4 w-4 rounded border border-gray-300 mr-2"></div>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Property type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['House', 'Apartment', 'Guesthouse', 'Hotel'].map((type) => (
                      <div key={type} className="flex items-center">
                        <div className="h-4 w-4 rounded-full border border-gray-300 mr-2"></div>
                        <span className="text-sm">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Categories Filter */}
        <CategoryFilter 
          categories={CATEGORIES} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Results count */}
        <div className="my-4">
          <h2 className="text-xl font-semibold">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'stay' : 'stays'}
            {location && ` in ${location}`}
          </h2>
        </div>
        
        {/* Property Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
          {filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              rating={property.rating}
              imageUrl={property.imageUrl}
              superhost={property.superhost}
            />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center my-12 py-12">
            <h3 className="text-xl font-medium mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </main>
      
      <AIChatButton />
      <Footer />
    </div>
  );
};

export default ListingsPage;
