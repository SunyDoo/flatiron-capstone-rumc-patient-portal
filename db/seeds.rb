
Patient.destroy_all
Location.destroy_all
Doctor.destroy_all


puts "🌱 Seeding spices..."

puts "Creating patients..."
patient_1 = Patient.create(username: "SNilavarath", password: "123", first_name: "Sunil", last_name: "Nilavarath", insurance: "1199" )
patient_2 = Patient.create(username: "MNilavarath", password: "123", first_name: "Maegha", last_name: "Nilavarath", insurance: "EMBLEM" )
patient_3 = Patient.create(username: "Rpisciot", password: "123", first_name: "Rachel", last_name: "Pisciotta", insurance: "BCBS" )
patient_4 = Patient.create(username: "AKandy", password: "123", first_name: "Ashish", last_name: "Kandy", insurance: "MEDICARE" )

puts "Creating locations..."
location_1 = Location.create(name: "Main Hospital Campus", address: "355 Bard Avenue", phone_number: "718.818.1234", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/12/RUMC-Building-768x512.jpg" )
location_2 = Location.create(name: "Breast and Womens Center", address: "1161 Victory Blvd", phone_number: "718.818.4020", zip_code: 10301, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/1161-Victory-768x512.jpg" )
location_3 = Location.create(name: "Cardiopulmonary Rehab", address: "288 Kissel Avenue", phone_number: "718.818.2515", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/12/Cardio-Front-768x512.jpg" )
location_4 = Location.create(name: "Center for Cancer Care", address: "1000 South Avenue", phone_number: "718.818.3000", zip_code: 10314, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/Burst-Cancer-Care-Center-768x512.jpg" )
location_5 = Location.create(name: "Endocrinology Center: Staten Island", address: "1366 Victory Blvd", phone_number: "718.727.1366", zip_code: 10301, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1366-victory_v2-768x512.jpg" )
location_6 = Location.create(name: "Family Health Center", address: "800 Castleton Avenue", phone_number: "718.818.4570", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/800-Castleton-Ave-768x512.jpg" )
location_7 = Location.create(name: "OB/GYN Services: Staten Island", address: "11 Ralph Place", phone_number: "718.720.4130", zip_code: 10304, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/locations_0001_11-Ralph-Place-Both-Suites-768x512.jpg" )
location_8 = Location.create(name: "Primary Care and Gastroenterology: Staten Island", address: "3700 Richmond Avenue", phone_number: "718.948.8111", zip_code: 10312, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/locations_0002_3700-Richmond-Ave.-768x512.jpg" )
location_9 = Location.create(name: "Primary Walk-In/Cardiology: Staten Island", address: "1058 Forest Avenue", phone_number: "718.818.1058", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1058-Forest_v2-768x512.jpg" )
location_10 = Location.create(name: "Primary Walk-In/Immediate Care Center", address: "4360 Hylan Blvd", phone_number: "718.818.4360", zip_code: 10312, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/primary-care-hylan-blvd-768x512.jpg" )
location_11 = Location.create(name: "Urology Services: Staten Island", address: "1200 South Avenue", phone_number: "718.370.1400", zip_code: 10314, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1200-South-768x512.jpg" )
location_12 = Location.create(name: "Richmond Health Network: Internal Medicine", address: "4268 Richmond Avenue", phone_number: "718.967.3000", zip_code: 10312, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/10/locations_0000_4268-Richmond-Avenue-SI-NY-10312--768x512.jpg" )

puts "Creating doctors..."
doctor_1 = location_1.Doctor.create(name: "Adebayo Adeyinka, MD", specialty: "Critical Care" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.250.8525", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/AAEAAQAAAAAAAAWMAAAAJDFiYjg4MTg4LWYzNjktNDdiNS05OGZmLTkzNjM3MTEwODI0Mw1.jpg" )
doctor_2 = location_1.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_3 = location_1.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_4 = location_2.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_5 = location_2.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_6 = location_2.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_7 = location_3.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_8 = location_3.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_9 = location_3.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_10 = location_4.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_11 = location_4.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_12 = location_4.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_13 = location_5.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_14 = location_5.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_15 = location_5.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_16 = location_6.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_17 = location_6.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_18 = location_6.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_19 = location_7.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_20 = location_7.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_21 = location_7.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_22 = location_8.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_23 = location_8.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_24 = location_8.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_25 = location_9.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_26 = location_9.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_27 = location_9.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_28 = location_10.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_29 = location_10.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_30 = location_10.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_31 = location_11.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_32 = location_11.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_33 = location_11.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )

doctor_34 = location_12.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_35 = location_12.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )
doctor_36 = location_12.Doctor.create(name: "Aiman Abboud, DO", specialty: "OB/GYN" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.743.3121", image: "" )


puts "✅ Done seeding!"