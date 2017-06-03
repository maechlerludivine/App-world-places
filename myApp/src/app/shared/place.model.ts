// Model for places

export interface Place {
  'address_components': Address_component[];
  'adr_address': string;
  'formatted_address': string;
  'formatted_phone_number': string;
  geometry: Geometry;
  icon: string;
  id: string;
  'international_phone_number': string;
  name: string;
  'opening_hours': Opening_hours;
  photos: Photo[];
  'place_id': string;
  rating: number;
  reference: string;
  reviews: Review[];
  scope: string;
  types: string[];
  url: string;
  'utc_offset': number;
  vicinity: string;
  website: string;
}

interface Review {
  aspects: Aspect[];
  'author_name': string;
  'author_url': string;
  language: string;
  'profile_photo_url': string;
  rating: number;
  'relative_time_description': string;
  text: string;
  time: number;
}

interface Aspect {
  rating: number;
  type: string;
}

interface Photo {
  height: number;
  'html_attributions': string[];
  'photo_reference': string;
  width: number;
}

interface Opening_hours {
  'open_now': boolean;
  periods: Period[];
  'weekday_text': string[];
}

interface Period {
  close: Close;
  open: Close;
}

interface Close {
  day: number;
  time: string;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Location {
  lat: number;
  lng: number;
}

interface Address_component {
  'long_name': string;
  'short_name': string;
  types: string[];
}