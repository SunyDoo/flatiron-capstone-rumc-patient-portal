
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
doctor_2 = location_1.Doctor.create(name: "Michael Zeidman, MD", specialty: "General Surgery" , network: ["MEDICARE", "AARP", "EMBLEM"], phone_number: "718.743.3121", image: "https://www.rumcsi.org/wp-content/uploads/2021/04/Best-768x1151.jpg" )
doctor_3 = location_1.Doctor.create(name: "Frank Acerra, DO", specialty: "Critical Care" , network: ["1199", "NYSNA", "BCBS"], phone_number: "718.816.6440", image: "https://www.rumcsi.org/wp-content/uploads/2020/10/acerraf1-1.jpg" )

doctor_4 = location_2.Doctor.create(name: "Michael Benson, MD", specialty: "OB/GYN" , network: ["AARP", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.273.5500", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Benson-Michael-768x960.jpeg" )
doctor_5 = location_2.Doctor.create(name: "Aldo Arpaia, MD", specialty: "Medicine" , network: ["MEDICAID", "1199", "BCBS"], phone_number: "718.727.1898", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Arpaia-Aldo-768x905.jpg" )
doctor_6 = location_2.Doctor.create(name: "Suzy Bibawy, MD", specialty: "Medicine" , network: ["1199", "NYSNA", "EMBLEM"], phone_number: "718.818.5584", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Bibawy-Suzy-768x960.jpeg" )

doctor_7 = location_3.Doctor.create(name: "Paramanathan Ahilan, MD", specialty: "Cardiology" , network: ["1199", "MEDICAID", "MEDICARE"], phone_number: "718.981.2684", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Ahilan-Para--768x960.jpeg" )
doctor_8 = location_3.Doctor.create(name: "Radu Ariton, MD", specialty: "Pulmonary" , network: ["AARP", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.981.0370", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/d33u0k6qsi-768x905.jpg" )
doctor_9 = location_3.Doctor.create(name: "Keith Diaz, MD", specialty: "Pulmonary" , network: ["1199", "BCBS", "EMBLEM"], phone_number: "718.818.1058", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Diaz-Keith-768x512.jpg" )

doctor_10 = location_4.Doctor.create(name: "Thomas Forlenza, MD", specialty: "Oncology" , network: ["AARP", "MEDICARE", "NYSNA"], phone_number: "718.816.4949", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Forlenza-Thomas-768x960.jpeg" )
doctor_11 = location_4.Doctor.create(name: "Seetha Murukutla, MD", specialty: "Oncology" , network: ["1199", "AETNA", "MEDICAID"], phone_number: "718.273.2277", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/2-MURUKUTLA-Seetha--768x960.jpg" )
doctor_12 = location_4.Doctor.create(name: "Victoria Forte, MD", specialty: "Oncology" , network: ["UNITEDHEALTHCARE", "1199", "EMBLEM"], phone_number: "718.816.4949", image: "https://www.rumcsi.org/wp-content/uploads/2021/08/Dr.-Forte.jpg" )

doctor_13 = location_5.Doctor.create(name: "Lina Leykina, MD", specialty: "Endocrinology" , network: ["UNITEDHEALTHCARE", "AETNA", "MEDICAID"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Leykina-Lina-768x1152.jpg" )
doctor_14 = location_5.Doctor.create(name: "Philip Otterbeck, MD", specialty: "Endocrinology" , network: ["1199", "AETNA", "MEDICARE"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Otterbeck-Philip-E-768x1152.jpg" )
doctor_15 = location_5.Doctor.create(name: "Mark Sheynshteyn, DO", specialty: "Endocrinology" , network: ["BCBS", "UNITEDHEALTHCARE", "EMBLEM"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/mark.jpg" )

doctor_16 = location_6.Doctor.create(name: "Marianne LaBarbera, MD", specialty: "Family Practice" , network: ["1199", "AARP", "EMBLEM"], phone_number: "718.818.1162", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/La-Barbera-Marianne.jpg" )
doctor_17 = location_6.Doctor.create(name: "Nepola Neil, MD", specialty: "Family Practice" , network: ["EMBLEM", "AETNA", "MEDICAID"], phone_number: "718.667.6767", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Nepola-Neil.jpg" )
doctor_18 = location_6.Doctor.create(name: "Vladimir Barayev, MD", specialty: "Family Practice" , network: ["UNITEDHEALTHCARE", "AETNA", "NYSNA"], phone_number: "718.876.1732", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Barayev-Vladimir-768x1024.jpg" )

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