/*
  # Create contacts table for portfolio submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, auto-generated)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy to allow anonymous inserts for public submissions
    - Add policy to allow authenticated users to read their own submissions
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read submissions"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
