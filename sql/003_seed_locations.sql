insert into public.locations (name, country, latitude, longitude, timezone)
values
  ('New York', 'US', 40.7128, -74.0060, 'America/New_York'),
  ('London', 'GB', 51.5072, -0.1276, 'Europe/London'),
  ('Tokyo', 'JP', 35.6762, 139.6503, 'Asia/Tokyo'),
on conflict do nothing;

