import { useEffect } from 'react';
import { Star, MapPin, Calendar, Users, Filter, X, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SearchResults = () => {
  const { searchQuery, filters, searchResults, isSearching, clearSearch } = useSearch();
  const navigate = useNavigate();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'package':
        return 'bg-blue-100 text-blue-800';
      case 'hilly':
        return 'bg-green-100 text-green-800';
      case 'honeymoon':
        return 'bg-pink-100 text-pink-800';
      case 'usp':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'package':
        return 'Tour Package';
      case 'hilly':
        return 'Hill Station';
      case 'honeymoon':
        return 'Honeymoon';
      case 'usp':
        return 'Special Package';
      default:
        return 'Package';
    }
  };

  const handlePackageClick = (result: any) => {
    // Navigate to appropriate detail page based on type
    switch (result.type) {
      case 'package':
        navigate(`/package/${result.id}`);
        break;
      case 'hilly':
        navigate(`/hilly/${result.id}`);
        break;
      case 'honeymoon':
        navigate(`/honeymoon/${result.id}`);
        break;
      case 'usp':
        navigate(`/usp/${result.id}`);
        break;
      default:
        navigate(`/package/${result.id}`);
    }
  };

  const handleWhatsAppClick = (result: any) => {
    const message = `Hi, I'm interested in the *${result.title}* package. Can you provide more details about pricing and availability?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918178515133?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isSearching ? 'Searching...' : `Search Results`}
              </h1>
              {searchQuery && (
                <p className="text-gray-600">
                  {isSearching ? 'Finding the best packages for you...' :
                    `Found ${searchResults.length} packages for "${searchQuery}"`}
                </p>
              )}
            </div>
            <Button variant="outline" onClick={clearSearch}>
              <X className="w-4 h-4 mr-2" />
              Clear Search
            </Button>
          </div>

          {/* Active Filters */}
          {(filters.destination || filters.duration || filters.priceRange || filters.activity || filters.groupSize) && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm text-gray-600 mr-2">Active filters:</span>
              {filters.destination && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {filters.destination}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => filters.destination = ''} />
                </Badge>
              )}
              {filters.duration && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {filters.duration === '1-3' ? '1-3 Days' :
                    filters.duration === '4-7' ? '4-7 Days' :
                      filters.duration === '8-14' ? '8-14 Days' : filters.duration}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => filters.duration = ''} />
                </Badge>
              )}
              {filters.priceRange && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {filters.priceRange === 'under-20k' ? 'Under ₹20k' :
                    filters.priceRange === '20k-30k' ? '₹20k-30k' :
                      filters.priceRange === '30k-40k' ? '₹30k-40k' :
                        filters.priceRange === 'above-40k' ? 'Above ₹40k' : filters.priceRange}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => filters.priceRange = ''} />
                </Badge>
              )}
              {filters.activity && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {filters.activity}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => filters.activity = ''} />
                </Badge>
              )}
              {filters.groupSize && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {filters.groupSize === 'solo' ? 'Solo' :
                    filters.groupSize === 'couple' ? 'Couple' :
                      filters.groupSize === 'family' ? 'Family' :
                        filters.groupSize === 'group' ? 'Group' : filters.groupSize}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => filters.groupSize = ''} />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        {isSearching ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching for the best packages...</p>
            </div>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse our popular destinations.
            </p>
            <Button onClick={clearSearch} variant="outline">
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result) => (
              <Card key={`${result.type}-${result.id}`} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getTypeColor(result.type)}>
                      {getTypeLabel(result.type)}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {result.title}
                    </h3>
                    <div className="flex items-center gap-1 ml-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{result.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {result.description}
                  </p>

                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {result.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {result.duration}
                    </div>
                  </div>

                  {result.activities && result.activities.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {result.activities.slice(0, 3).map((activity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                      {result.activities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{result.activities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{result.price}</span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePackageClick(result);
                        }}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppClick(result);
                        }}
                        className="bg-[#25D366] hover:bg-[#128C7E]"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {searchResults.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Packages
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
