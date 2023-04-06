BEGIN;

DROP TABLE IF EXISTS patients, universities, appointments CASCADE;

CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  age VARCHAR(2) NOT NULL,
  phone TEXT NOT NULL
);


CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  date TEXT NOT NULL,
  patient_id INTEGER REFERENCES patients(id)
);

INSERT INTO patients (name, age, phone) VALUES 
(
  'John Doe', 35 ,  '555-1234'),
  ('Jane Smith', 24 , '555-5678'),
  ('Emily Davis', 42 , '555-2468'
  );



INSERT INTO appointments (date) VALUES 
(
  '5/5/2023'),
  ('6/5/2023'),
  ('7/5/2023'),
  ('8/5/2023'),
  ('9/5/2023'),
  ('10/5/2023'),
  ('11/5/2023');
  

COMMIT;
-- C:/Users/farah/Desktop/WEEK6-FARAH-ALBATTRAWI/src/models/config/build.sql
-- C:/Users/farah/Desktop/WEEK6-FARAH-ALBATTRAWI/src/models/config/build.sql