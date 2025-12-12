import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  variant?: 'hero' | 'compact' | 'full';
  onSearch?: () => void;
}

const SearchBar = ({ variant = 'full', onSearch }: SearchBarProps) => {
  const navigate = useNavigate();
  const { searchQuery, filters, setSearchQuery, setFilters, performSearch, isSearching } = useSearch();
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    performSearch();
    navigate('/search');
    onSearch?.();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const destinations = [
    'Uttarakhand', 'Kashmir', 'Kerala', 'Himachal Pradesh', 'Rajasthan', 
    'Goa', 'Ladakh', 'Andaman', 'West Bengal', 'Sikkim'
  ];

  const activities = [
    'Trekking', 'Beach', 'Sightseeing', 'Adventure Sports', 'Wildlife Safari',
    'Pilgrimage', 'Photography', 'Water Sports', 'Skiing', 'Houseboat',
    'Romantic', 'Nature Walks', 'Culture', 'Heritage', 'Yoga'
  ];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search destinations, packages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10 pr-4 py-2 border-0 focus:ring-0"
          />
        </div>
        <Button onClick={handleSearch} disabled={isSearching} size="sm">
          <Search className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-3 w-4 h-4 text-white/70" />
            <Input
              placeholder="Search destinations, packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-11 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm placeholder:text-white/70 pl-10"
            />
          </div>

          {/* Destination Select */}
          <div className="relative">
            <Select value={filters.destination} onValueChange={(value) => setFilters({ destination: value })}>
              <SelectTrigger className="w-full h-11 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/70" />
                  <SelectValue placeholder="Destination" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Destinations</SelectItem>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button 
            onClick={handleSearch} 
            disabled={isSearching}
            className="h-11 bg-white/90 hover:bg-white text-gray-900 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            <Search className="w-4 h-4 mr-2" />
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
        </div>

        {/* Advanced Filters */}
        <div className="mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
          
          {showFilters && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Duration */}
              <Select value={filters.duration} onValueChange={(value) => setFilters({ duration: value })}>
                <SelectTrigger className="w-full h-10 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/70" />
                    <SelectValue placeholder="Duration" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Duration</SelectItem>
                  <SelectItem value="1-3">1-3 Days</SelectItem>
                  <SelectItem value="4-7">4-7 Days</SelectItem>
                  <SelectItem value="8-14">8-14 Days</SelectItem>
                </SelectContent>
              </Select>

              {/* Price Range */}
              <Select value={filters.priceRange} onValueChange={(value) => setFilters({ priceRange: value })}>
                <SelectTrigger className="w-full h-10 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Price</SelectItem>
                  <SelectItem value="under-20k">Under ₹20,000</SelectItem>
                  <SelectItem value="20k-30k">₹20,000 - ₹30,000</SelectItem>
                  <SelectItem value="30k-40k">₹30,000 - ₹40,000</SelectItem>
                  <SelectItem value="above-40k">Above ₹40,000</SelectItem>
                </SelectContent>
              </Select>

              {/* Activity */}
              <Select value={filters.activity} onValueChange={(value) => setFilters({ activity: value })}>
                <SelectTrigger className="w-full h-10 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm">
                  <SelectValue placeholder="Activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Activity</SelectItem>
                  {activities.map((activity) => (
                    <SelectItem key={activity} value={activity}>{activity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Group Size */}
              <Select value={filters.groupSize} onValueChange={(value) => setFilters({ groupSize: value })}>
                <SelectTrigger className="w-full h-10 rounded-lg border-white/30 bg-white/20 backdrop-blur-sm text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white/70" />
                    <SelectValue placeholder="Group Size" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Size</SelectItem>
                  <SelectItem value="solo">Solo</SelectItem>
                  <SelectItem value="couple">Couple</SelectItem>
                  <SelectItem value="family">Family (3-5)</SelectItem>
                  <SelectItem value="group">Group (6+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        {/* Search Input */}
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search destinations, packages, activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10"
          />
        </div>

        {/* Destination */}
        <div className="relative">
          <Select value={filters.destination} onValueChange={(value) => setFilters({ destination: value })}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <SelectValue placeholder="Destination" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Destinations</SelectItem>
              {destinations.map((dest) => (
                <SelectItem key={dest} value={dest}>{dest}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Duration */}
        <div className="relative">
          <Select value={filters.duration} onValueChange={(value) => setFilters({ duration: value })}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <SelectValue placeholder="Duration" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Duration</SelectItem>
              <SelectItem value="1-3">1-3 Days</SelectItem>
              <SelectItem value="4-7">4-7 Days</SelectItem>
              <SelectItem value="8-14">8-14 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button onClick={handleSearch} disabled={isSearching} className="h-10">
          <Search className="w-4 h-4 mr-2" />
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {/* Advanced Filters */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-700">Advanced Filters</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Price Range */}
            <Select value={filters.priceRange} onValueChange={(value) => setFilters({ priceRange: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Price</SelectItem>
                <SelectItem value="under-20k">Under ₹20,000</SelectItem>
                <SelectItem value="20k-30k">₹20,000 - ₹30,000</SelectItem>
                <SelectItem value="30k-40k">₹30,000 - ₹40,000</SelectItem>
                <SelectItem value="above-40k">Above ₹40,000</SelectItem>
              </SelectContent>
            </Select>

            {/* Activity */}
            <Select value={filters.activity} onValueChange={(value) => setFilters({ activity: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Activity</SelectItem>
                {activities.map((activity) => (
                  <SelectItem key={activity} value={activity}>{activity}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Group Size */}
            <Select value={filters.groupSize} onValueChange={(value) => setFilters({ groupSize: value })}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <SelectValue placeholder="Group Size" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Size</SelectItem>
                <SelectItem value="solo">Solo</SelectItem>
                <SelectItem value="couple">Couple</SelectItem>
                <SelectItem value="family">Family (3-5)</SelectItem>
                <SelectItem value="group">Group (6+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
