
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  superhost?: boolean;
  dates?: string;
}

const PropertyCard = ({ 
  id, 
  title, 
  location, 
  price, 
  rating, 
  imageUrl, 
  superhost = false,
  dates = 'May 15-20'
}: PropertyCardProps) => {
  const { toast } = useToast();
  const [imgError, setImgError] = useState(false);
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Favorite Added",
      description: "This property has been added to your favorites"
    });
  };

  // Use reliable fallback images from Unsplash
  const fallbackImageUrl = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
  
  // Determine the image source to use
  const getImageSource = () => {
    if (imgError) {
      return fallbackImageUrl;
    }
    
    if (!imageUrl) {
      return fallbackImageUrl;
    }
    
    return imageUrl.startsWith('http') ? imageUrl : `https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`;
  };

  // Handle image loading errors
  const handleImageError = () => {
    console.log("Image load error, using fallback");
    setImgError(true);
  };

  console.log("PropertyCard rendering with imageUrl:", imageUrl);
  console.log("Using image source:", getImageSource());

  return (
    <Link to={`/properties/${id}`}>
      <Card className="overflow-hidden border-none listing-card-hover">
        <CardContent className="p-0">
          <div className="relative">
            <AspectRatio ratio={1} className="bg-muted">
              <img 
                src={getImageSource()} 
                alt={title} 
                className="object-cover h-full w-full rounded-xl"
                onError={handleImageError}
              />
            </AspectRatio>
            <button
              onClick={handleFavorite}
              className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5 text-gray-700">
                <path d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451" />
              </svg>
            </button>
          </div>
          
          <div className="pt-3">
            <div className="flex justify-between">
              <h3 className="font-medium text-base">{title}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">{rating}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">{location}</p>
            <p className="text-muted-foreground text-sm">{dates}</p>
            <p className="mt-1">
              <span className="font-medium">${price}</span>
              <span className="text-muted-foreground"> night</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
